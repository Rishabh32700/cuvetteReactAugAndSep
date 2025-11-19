import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { MyContext } from "./MyContext";

const GrandChild = () => {
  const zameen = useContext(MyContext);
  const { abc } = useParams();
  console.log(zameen);
  
  return (
    <div>
      GrandChild {abc}
      {zameen.price}
      {zameen.size}
      {JSON.stringify(zameen)}
    </div>
  );
};

export default GrandChild;
