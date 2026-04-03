import { createContext, useContext, useReducer } from "react";

const FinanceContext = createContext();

const initialState = {
  transactions: [
    {
      id: 1,
      title: "Salary",
      amount: 50000,
      type: "Income",
      category: "Job",
      date: "2026-04-01",
    },
    {
      id: 2,
      title: "Rent",
      amount: 12000,
      type: "Expense",
      category: "Housing",
      date: "2026-04-02",
    },
    {
      id: 3,
      title: "Food",
      amount: 2500,
      type: "Expense",
      category: "Food",
      date: "2026-04-02",
    },
  ],
};

const financeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const FinanceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(financeReducer, initialState);

  return (
    <FinanceContext.Provider value={{ state, dispatch }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  return useContext(FinanceContext);
};