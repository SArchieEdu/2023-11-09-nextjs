"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export const Counter = () => {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <button onClick={() => setAmount(amount - 1)}>-</button>
      {amount}
      <button onClick={() => setAmount(amount + 1)}>+</button>
    </div>
  );
};
