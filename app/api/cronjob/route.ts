/* eslint-disable @typescript-eslint/no-explicit-any */
import { google } from "googleapis";
import { convertToDate } from "@/lib/utils";
import transporter from "@/lib/email";
import { EVENT_INFO, REGISTER_INFO } from "@/lib/constant";
import htmlLayoutPayment from "@/lib/htmlLayoutPayment";
import htmlLayoutPaymentPdf from "@/lib/htmlLayoutPaymentPdf";
import puppeteer from "puppeteer";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  auth,
  version: "v4",
});

export async function POST() {
  const eventsResult: any = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
    range: `Events`,
  });

  const eventInFutures: any = [];

  eventsResult.data.values.map((event, index) => {
    const today = new Date();
    const eventDate: any = convertToDate(event[2]);

    eventDate.setDate(eventDate.getDate() + 1);

    if (today.getTime() <= eventDate.getTime()) {
      const eventIndex = index + 1;
      event[0] = eventIndex;
      eventInFutures.push(event);
    }
  });

  eventInFutures.map(async (event) => {
    // Get list of customer of event
    const eventRegister = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
      range: `Event-${event[0]}`,
    });

    let ticketsLeft = Number.parseInt(event[EVENT_INFO.EVENT_TICKET_AMOUNT]);

    if (eventRegister.data.values) {
      await eventRegister.data.values.map(async (register, index) => {
        if (
          register[REGISTER_INFO.GUEST_TRANSFER_PAYMENT] &&
          register[REGISTER_INFO.GUEST_TRANSFER_PAYMENT] === "x" &&
          !register[REGISTER_INFO.SEND_GUEST_EMAIL_PAYMENT]
        ) {
          const attachments: any = [];

          for (
            let i = 0;
            i < register[REGISTER_INFO.GUEST_TICKET_AMOUNT];
            i++
          ) {
            const pdf = await htmlLayoutPaymentPdf(
              register[REGISTER_INFO.GUEST_NAME],
              register[REGISTER_INFO.ORDER_NUMBER],
              register[REGISTER_INFO.GUEST_TOTAL_MONEY],
              register[REGISTER_INFO.GUEST_EMAIL],
              register[REGISTER_INFO.GUEST_PHONE],
              event[EVENT_INFO.EVENT_NAME],
              register[REGISTER_INFO.GUEST_TICKET_AMOUNT],
              event[EVENT_INFO.LOCATION],
              event[EVENT_INFO.PHONE_SUPPORT],
              event[EVENT_INFO.EMAIL_SUPPORT]
            );
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setContent(pdf);
            const buffer = await page.pdf({
              path: `Ticket-${i + 1}.pdf`,
              format: "A4",
            });
            attachments.push(buffer);
            await browser.close();
          }

          if (attachments.length) {
            const mailOptions = {
              subject: `[326CONCEPTS] XÁC NHẬN THANH TOÁN THÀNH CÔNG VÀ VÉ ĐIỆN TỬ | PAYMENT COMPLETE AND E-TICKET`,
              html: htmlLayoutPayment(
                register[REGISTER_INFO.GUEST_NAME],
                register[REGISTER_INFO.ORDER_NUMBER],
                register[REGISTER_INFO.GUEST_TOTAL_MONEY],
                register[REGISTER_INFO.GUEST_EMAIL],
                register[REGISTER_INFO.GUEST_PHONE],
                event[EVENT_INFO.EVENT_NAME],
                register[REGISTER_INFO.GUEST_TICKET_AMOUNT],
                event[EVENT_INFO.LOCATION],
                event[EVENT_INFO.PHONE_SUPPORT],
                event[EVENT_INFO.EMAIL_SUPPORT]
              ),
              to: register[REGISTER_INFO.GUEST_EMAIL],
              from: `326 Concepts Company<sales@326concepts.com>`,
              attachments: attachments.map((attachment, index) => ({
                filename: `Ticket-${index + 1}.pdf`,
                content: Buffer.from(attachment).toString("base64"),
                contentType: "application/pdf",
                encoding: "base64",
              })),
            };

            transporter.sendMail(mailOptions, async (error, info) => {
              if (error) {
                console.log(error);
              } else {
                console.log("Email sent: " + info.response);
                await sheets.spreadsheets.values.batchUpdate({
                  spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
                  requestBody: {
                    valueInputOption: "USER_ENTERED",
                    data: [
                      {
                        range: `Event-${event[0]}!${String.fromCharCode(
                          97 + REGISTER_INFO.SEND_GUEST_EMAIL_PAYMENT
                        )}${index + 1}`,
                        majorDimension: "ROWS",
                        values: [["x"]],
                      },
                    ],
                  },
                });
              }
            });
          }
        }

        ticketsLeft =
          ticketsLeft -
          Number.parseInt(register[REGISTER_INFO.GUEST_TICKET_AMOUNT]);

        console.log("value", ticketsLeft);
      });
    }

    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
      requestBody: {
        valueInputOption: "USER_ENTERED",
        data: [
          {
            // N column is the current ticket amount
            range: `Events!N${event[0]}`,
            majorDimension: "ROWS",
            values: [[ticketsLeft]],
          },
        ],
      },
    });
  });

  console.log("Cronjob is finished");
  return Response.json({});
}
