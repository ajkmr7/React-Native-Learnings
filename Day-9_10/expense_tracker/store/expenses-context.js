import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 4000,
    date: new Date("2024-03-12"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 1000,
    date: new Date("2024-03-11"),
  },
  {
    id: "e3",
    description: "Bananas",
    amount: 60,
    date: new Date("2024-03-10"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 600,
    date: new Date("2024-03-08"),
  },
  {
    id: "e5",
    description: "Maintenance",
    amount: 2000,
    date: new Date("2024-03-01"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 4000,
    date: new Date("2024-03-12"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 1000,
    date: new Date("2024-03-11"),
  },
  {
    id: "e8",
    description: "Bananas",
    amount: 60,
    date: new Date("2024-04-10"),
  },
  {
    id: "e9",
    description: "Book",
    amount: 600,
    date: new Date("2024-04-08"),
  },
  {
    id: "e10",
    description: "Maintenance",
    amount: 2000,
    date: new Date("2024-04-01"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [...state, { ...action.payload, id: id }];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
