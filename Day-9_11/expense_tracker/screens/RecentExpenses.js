import { useContext, useState, useEffect } from "react";

import ExpensesOutput from "../components/expenses_output/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import Loader from "../components/UI/Loader";
import ErrorView from "../components/UI/ErrorView";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesContext = useContext(ExpensesContext);

  function errorHandler() {
    setError(null);
  }

  useEffect(() => {
    async function getExpenses() {
      try {
        const expenses = await fetchExpenses();
        expensesContext.setExpenses(expenses);
      } catch (error) {
        setError("Couldn't fetch expenses at the moment!");
      }
      setIsFetching(false);
    }
    getExpenses();
  }, [isFetching]);

  if (isFetching) {
    return <Loader />;
  }

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No Recent Expenses Found!"
    />
  );
};

export default RecentExpenses;
