'use client';

import { useState } from "react";

export function Counter() {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber((prev) => ++prev);

  return <>
    <button onClick={increment}>Number: {number}</button>
  </>;
}
