import React from "react";

// Components
import { TransactionItem } from "./TransactionItem";

export const Transactions = () => {
  return (
    <>
      {[1, 2, 3, 4].map((transaction) => {
        return <TransactionItem key={transaction} transaction={transaction} />;
      })}
    </>
  );
};
