import { makeAutoObservable, runInAction } from "mobx";
import {
  ConvertationAPIResponse,
  CURRENCIES_MAP,
  Payment,
} from "../models/Declaration";
import { RootStore } from "./rootStore";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import React from "react";
import { roundToUp } from "round-to";

export class ConvertationStore {
  constructor(public root: RootStore) {
    makeAutoObservable(this);
  }

  isLoading = false;
  isLoaded = false;

  date: Date = new Date();
  currency: string = CURRENCIES_MAP.USD.currency;
  amount: string = "0";

  handleDateChange = (date: Date | null) => {
    if (date) {
      this.date = date;
    }
  };

  handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    (this.currency = e.target.value);

  handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    (this.amount = e.target.value);

  get formattedDate() {
    return format(this.date, "yyyy-MM-dd");
  }

  convertPayment = async (date: string, currency: string, value: number) => {
    this.isLoading = true;

    const url = `https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/?currencies=${currency}&date=${date}`;

    try {
      const response = await fetch(url);

      const data = (await response.json()) as ConvertationAPIResponse;

      const { code, validFromDate, rate } = data[0].currencies[0];
      const newPayment: Payment = {
        id: uuidv4(),
        date: validFromDate,
        currency: code,
        parentValue: value,
        gelValue: roundToUp(value * rate, 2),
        rate
      };

      runInAction(() => (this.isLoaded = true));

      return newPayment;
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  clear = () => {
    this.isLoaded = false;
    this.isLoading = false;
    this.date = new Date();
    this.currency = CURRENCIES_MAP.USD.currency;
    this.amount = "0";
  };
}
