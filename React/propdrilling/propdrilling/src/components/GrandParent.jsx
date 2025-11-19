import React from "react";
import Parent from "./Parent";
import Navbar from "./Navbar";

const GrandParent = ({ zameen }) => {
  return (
    <div>
      GrandParent
      <Parent zameen={zameen} />
    </div>
  );
};

export default GrandParent;
