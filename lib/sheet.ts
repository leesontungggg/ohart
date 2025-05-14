'use server'
import { google } from 'googleapis'

const sheetService = async () => {
  const auth = await new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = await google.sheets({
    auth,
    version: 'v4',
  })

  return sheets
}

export default sheetService
