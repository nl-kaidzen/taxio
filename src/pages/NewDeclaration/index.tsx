import { PaymentsTable } from "../../components/NewDeclaration/PaymentTable";
import { observer } from "mobx-react-lite";
import { AddPaymentHeader } from "../../components/NewDeclaration/AddPaymentHeader";
import { useRootStore } from "../../stores/rootStore";
import { HowToUse } from "../../components/HowToUse";

export const NewDeclaration = observer(() => {
  const { paymentsStore } = useRootStore();
  return (
    <>
      <div>
        <AddPaymentHeader />
      </div>
      <div>
        {!!paymentsStore.payments.length ? <PaymentsTable /> : <HowToUse />}
      </div>
    </>
  );
});
