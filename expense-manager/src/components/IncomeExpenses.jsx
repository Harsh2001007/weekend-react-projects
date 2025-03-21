import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log("income expense total", total);

  const income = amounts.filter((item) => item > 0);
  console.log(income);

  const filteredIncome = income
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ₹{filteredIncome}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ₹{expense}
        </p>
      </div>
    </div>
  );
}
