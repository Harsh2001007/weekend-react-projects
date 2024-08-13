import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ items }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = items.amount > 0 ? "+" : "-";
  return (
    <li className={items.amount > 0 ? "plus" : "minus"}>
      {items.text}{" "}
      <span>
        {sign}₹{Math.abs(items.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(items.id)}
      >
        x
      </button>
    </li>
  );
}
