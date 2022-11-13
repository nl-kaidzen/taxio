import { makeAutoObservable } from "mobx";
import { Payment } from "../models/Declaration";
import { RootStore } from "./rootStore";
import {roundTo} from "round-to";

export class PaymentsStore {
  constructor(public root: RootStore) {
    makeAutoObservable(this);
  }

  payments: Payment[] = [];

  addPayment = (payment: Payment) => this.payments.push(payment);

  removePayment = (id: string) => {
    this.payments = this.payments.filter((payment) => payment.id !== id);
  };

  get totalPaymentsUSD() {
    const total = this.payments.reduce((accum, payment) => {
      return accum + payment.parentValue;
    }, 0);

    return roundTo(total, 2)
  }

  get totalPaymentsGel() {
    const total =  this.payments.reduce((accum, payment) => {
      return accum + payment?.gelValue;
    }, 0);

    return roundTo(total, 2)
  }
}
