import { PaymentsTable } from "../../components/NewDeclaration/PaymentTable";
import { observer } from "mobx-react-lite";
import { AddPaymentHeader } from "../../components/NewDeclaration/AddPaymentHeader";

export const NewDeclaration = observer(() => {
  return (
    <>
      <div>
        <AddPaymentHeader />
      </div>
      <div>
        <PaymentsTable />
      </div>
    </>
  );
});
