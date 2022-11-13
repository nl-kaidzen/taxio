import React, { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { PaymentsStore } from "./paymentsStore";
import { ConvertationStore } from "./convertationStore";
import { PaymentTableStore } from "./paymentTableStore";

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  }

  paymentsStore = new PaymentsStore(this);
  convertationStore = new ConvertationStore(this);
  paymentTableStore = new PaymentTableStore(this);
}

export const RootStoreContext = createContext({} as RootStore);

export const RootStoreProvider: React.FC = ({ children }) => {
  const rootStore = new RootStore();

  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = () => useContext(RootStoreContext);
