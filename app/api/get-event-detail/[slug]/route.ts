/* eslint-disable @typescript-eslint/no-explicit-any */
import { convertArrayToObject } from "@/lib/utils";
import { google } from "googleapis";
import { unstable_noStore } from "next/cache";

export const fetchCache = "force-no-store";
export async function GET(request: Request, { params }) {
  unstable_noStore();
  try {
    const { slug } = await params;

    const auth = await new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = await google.sheets({
      auth,
      version: "v4",
    });

    const eventsResult = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
      range: `Events`,
    });

    const data: any = eventsResult.data.values;

    const findingEvent = data.find((item) => {
      return item[0] === slug;
    });

    if (findingEvent) {
      const eventIndex = data.findIndex((item) => item[0] === slug) + 1;

      return Response.json({
        message: "ok",
        data: { eventIndex, ...convertArrayToObject(findingEvent) },
      });
    }

    return Response.json({
      message: "error",
    });
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
