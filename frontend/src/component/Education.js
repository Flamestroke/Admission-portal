import React from "react";
import Navbar from "./Navbar";
import Two from "./Two";

const Education = ({ setEducationValue }) => {
  return (
    <>
      <Navbar />

      <Two setEducationValue={setEducationValue} />
    </>
  );
};

export default Education;
