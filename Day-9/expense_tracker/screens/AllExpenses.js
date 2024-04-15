import { useContext } from "react";

import ExpensesOutput from "../components/expenses_output/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      expensesPeriod="Total"
      fallbackText="No Expenses Found!"
    />
  );
};

export default AllExpenses;
