import { useState } from "react";

const Temp1 = () => {
  let [num, setNum] = useState(0); // state variables CANNOT be updated like normal variables. Rather we need a special function to update them!.. setNum is that special function that can ONLY be used to update the "num". num=num+1 NOT TRUE FOR STATE VARIABLE. For state vaiables like "num" we need  a special function (LIKE setNum)
  let [name, setName] = useState("Alan Smith");
  let [color, setColor] = useState("red");

  return (
    <div>
      {/* <h3>Using useState-{num}</h3>
      <h4>
        {num} - {name}
      </h4>
      <button
        onClick={() => {
          setNum(num + 1);
          setName("Bob Smith");
        }}
      >
        Inrement
      </button>
      <h3>{num}</h3> */}
      <h1>
        My favorite color is{" "}
        <span style={{ backgroundColor: color }}>{color}!</span>
      </h1>
      <button
        style={{ color: color }}
        type="button"
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button
        style={{ color: color }}
        type="button"
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        style={{ color: color }}
        type="button"
        onClick={() => setColor("pink")}
      >
        Pink
      </button>
      <button
        style={{ color: color }}
        type="button"
        onClick={() => setColor("green")}
      >
        Green
      </button>
      <h3>{color}</h3>
    </div>
  );
};

export default Temp1;
