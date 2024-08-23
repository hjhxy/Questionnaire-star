import React, { useState } from "react";

function Child1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>点击+1 {count}</button>
    </div>
  );
}

export default Child1;
