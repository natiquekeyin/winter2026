import React from "react";

const About = ({ email, phone }) => {
  return (
    <div>
      <h2>About - {email}</h2>
      <p>About me here all the information - on my phone {phone}</p>
    </div>
  );
};

export default About;
