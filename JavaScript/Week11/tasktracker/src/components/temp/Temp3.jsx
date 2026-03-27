import { useState } from "react";

const Temp3 = () => {
  let num = [11, 22, 33, 44];
  let [numbers, setNumbers] = useState(num);

  let changeList = () => {
    setNumbers((previousState) => {
      return [...previousState, Math.floor(Math.random() * 50)];
    });
  };
  return (
    <div>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <button onClick={changeList}>Update Array</button>
    </div>
  );
};

export default Temp3;
