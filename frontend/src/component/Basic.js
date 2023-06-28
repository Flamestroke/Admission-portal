import React from "react";
import Navbar from "./Navbar";
import Three from "./Three";

const Basic = ({ setValue }) => {
  return (
    <>
      <Navbar />

      <Three setValue={setValue} />
    </>
  );
};

export default Basic;
