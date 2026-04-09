import React, { useState, useEffect } from "react";

const Skills = ({ skills }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}
    </>
  );
};

export default Skills;
