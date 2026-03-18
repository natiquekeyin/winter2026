import { useState } from "react";

const Temp1 = () => {
  let [num, setNum] = useState(0);
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
          setName("Bob Woolmer");
        }}
      >
        Inrement
      </button> */}
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </div>
  );
};

export default Temp1;
