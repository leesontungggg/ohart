/* eslint-disable @typescript-eslint/no-explicit-any */
import htmlLayoutBooking from "@/lib/htmlLayoutBooking";
import transporter from "@/lib/email";
import { google } from "googleapis";

export async function POST(request: Request) {
  const data = await request.json();
  try {
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

    const {
      eventIndex,
      event_id,
      fullName,
      orderId,
      totalVND,
      email,
      phone,
      eventTitle,
      amount,
      bank,
      account_number,
      location,
      phoneSupport,
      emailSupport,
    } = data;

    const mailOptions = {
      subject: `[326CONCEPTS] GIỮ CHỖ VÀ HƯỚNG DẪN THANH TOÁN | TICKET RESERVATION AND PAYMENT INSTRUCTION`,
      html: htmlLayoutBooking(
        event_id,
        fullName,
        orderId,
        totalVND,
        email,
        phone,
        eventTitle,
        amount,
        bank,
        account_number,
        location,
        phoneSupport,
        emailSupport
      ),
      to: data.email,
      from: `326 Concepts Company<sales@326concepts.com>`,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    const valueArray = [orderId, fullName, email, phone, amount, totalVND];

    const request = {
      spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
      resource: {
        requests: [
          {
            addSheet: {
              properties: {
                title: `Event-${eventIndex}`,
                index: 1,
                gridProperties: {
                  rowCount: 200,
                  columnCount: 11,
                },
                sheetType: "GRID",
              },
            },
          },
        ],
      },
    };

    const result = await sheets.spreadsheets.get({
      spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
    });

    if (result.data.sheets) {
      const sheetNames = result.data.sheets.map(
        (item: any) => item.properties.title
      );

      const isSheetExists = sheetNames.includes(`Event-${eventIndex}`);

      if (!isSheetExists) {
        await sheets.spreadsheets.batchUpdate(request).then(async () => {
          await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
            range: `Event-${eventIndex}!A1:H150`,
            valueInputOption: "USER_ENTERED",
            requestBody: {
              values: [valueArray],
            },
          });
        });
      } else {
        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
          range: `Event-${eventIndex}!A1:H150`,
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [valueArray],
          },
        });
      }
    }

    return Response.json({ message: "ok" });
  } catch (e) {
    console.log(e);
  }
}
