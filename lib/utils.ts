/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertToDate = (dateString) => {
  const d = dateString.split("/");
  const dat = new Date(d[2] + "/" + d[1] + "/" + d[0]);
  return dat;
};

export const convertArrayToObject = (array) => {
  const eventObject: any = {};
  eventObject.id = array[0];
  eventObject.name = array[1];
  eventObject.date = array[2];
  eventObject.short_desc = array[3];
  eventObject.long_desc = array[4];
  eventObject.price = Number.parseInt(array[5]);
  eventObject.thumbnail_url = array[6];
  eventObject.event_ticket_amount = Number.parseInt(array[7]);
  eventObject.bank = array[8];
  eventObject.account_number = array[9];
  eventObject.location = array[10];
  eventObject.phone_support = array[11];
  eventObject.email_support = array[12];
  eventObject.amount_ticket_lefts = Number.parseInt(array[13]);
  eventObject.tags = array[14];
  eventObject.time = array[15];

  return eventObject;
};

export const formatMoney = (value) =>
  `${value} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const makeid = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
