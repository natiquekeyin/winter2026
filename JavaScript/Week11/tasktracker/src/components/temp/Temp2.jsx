import { useState } from "react";

const Temp2 = () => {
  let obj = {
    name: "Ali",
    age: 20,
    height: 5.11,
    isYoung: true,
  };
  const [person, setPerson] = useState(obj);
  let changeState = () => {
    setPerson((previousState) => {
      return { ...previousState, age: 34, isYoung: false };
    });
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button onClick={changeState}>Update</button>
    </div>
  );
};

export default Temp2;
