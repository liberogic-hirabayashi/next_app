import { useCallback, useEffect, useState } from "react";
export default function Counter({ count, countUp }) {
  return (
    <div className="flex flex-col items-center mr-4">
      <p className="text-xl mb-1">{count}</p>
      <button className="border p-1" onClick={countUp}>Counter</button>
    </div>
  );
}
