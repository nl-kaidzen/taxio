export interface Declaration {
  payments: Payment[];
  date: string;
}

export interface Payment {
  id: string;
  date: string;
  currency: CurrencyType;
  parentValue: number;
  gelValue: number;
  rate: number;
}

export type ConvertationAPIResponse = ConvertationResult[];

export interface ConvertationResult {
  currencies: CurrencyConvertationResult[];
  date: string;
}

export interface CurrencyConvertationResult {
  code: CurrencyType;
  date: string;
  diff: number;
  diffFormated: string;
  name: string;
  quantity: number;
  rate: number;
  rateFormated: string;
  validFromDate: string;
}

export type CurrencyType = "USD" | "EUR" | "GBP";

export const CURRENCIES_MAP = {
  USD: {
    id: 1,
    currency: "USD",
    title: "US Dollars",
  },
  EUR: {
    id: 2,
    currency: "EUR",
    title: "Euro",
  },
  GBP: {
    id: 3,
    currency: "GBP",
    title: "United Kingdom Pound",
  },
};

export interface LocalStorageDeclarationsData {
  [year: string]: {
    [month: string]: Declaration;
  };
}

export const MonthNameByShortageMap = {
  JAN: "January",
  FEB: "February",
  MAR: "March",
  APR: "April",
  MAY: "May",
  JUN: "June",
  JUL: "July",
  AUG: "August",
  SEP: "September",
  OCT: "October",
  NOV: "November",
  DEC: "December",
};

export const MonthNumberByShortageMap = {
  JAN: "01",
  FEB: "02",
  MAR: "03",
  APR: "04",
  MAY: "05",
  JUN: "06",
  JUL: "07",
  AUG: "08",
  SEP: "09",
  OCT: "10",
  NOV: "11",
  DEC: "12",
};

export type MonthKey = keyof typeof MonthNameByShortageMap;

export const MonthShortage = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
