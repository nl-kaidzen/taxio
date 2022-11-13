import { makeAutoObservable } from "mobx";
import { RootStore } from "./rootStore";
import React from "react";

export class PaymentTableStore {
  constructor(public root: RootStore) {
    makeAutoObservable(this);
  }

  selectedRows: string[] = [];

  handleSelectRow = (paymentId: string) => {
    if (this.isRowSelected(paymentId)) {
      this.selectedRows = this.selectedRows.filter(
        (rowId) => rowId !== paymentId
      );
    } else {
      this.selectedRows.push(paymentId);
    }
  };

  handleSelectAllRows = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      this.selectedRows = this.root.paymentsStore.payments.map(
        (payment) => payment.id
      );
    } else {
      this.selectedRows = [];
    }
  };

  handleDeleteClick = () => {
    const itemsForRemoving = [...this.selectedRows];
    itemsForRemoving.forEach((paymentId) => {
      this.root.paymentsStore.removePayment(paymentId);
      this.selectedRows = this.selectedRows.filter(
        (rowId) => rowId !== paymentId
      );
    });
  };

  isRowSelected = (paymentId: string) => {
    return this.selectedRows.includes(paymentId);
  };
}
