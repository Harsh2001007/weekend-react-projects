import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
