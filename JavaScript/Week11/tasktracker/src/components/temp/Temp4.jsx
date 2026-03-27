// to test useEffect hook

import { useState, useEffect } from "react";

const Temp4 = () => {
  const [num, setNum] = useState(0);
  const [x, setX] = useState(10);
  useEffect(() => {
    console.log("useEffect");
    // API data loading.. subscriptions, DOM updating...
  }, [num]);
  return (
    <div>
      <h2>
        The value of num is {num} - <br /> the value of x is {x}
      </h2>
      <button onClick={() => setNum(num + 1)}>Change Num</button>
      <button onClick={() => setX(x + 1)}>Change X</button>
    </div>
  );
};

export default Temp4;
