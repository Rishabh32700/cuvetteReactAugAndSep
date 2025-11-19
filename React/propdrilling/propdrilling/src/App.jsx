import { useState } from "react";
import "./App.css";
import GrandParent from "./components/GrandParent";

import { Routes, Route } from "react-router-dom";
import Parent from "./components/Parent";
import Child from "./components/Child";
import GrandChild from "./components/GrandChild";
import Navbar from "./components/Navbar";

function App() {
  const [zameen, setZameen] = useState("nahi dunga !!!");
  return (
    <>
    {/* {
      if(true){console.log("hello")}
    } */}
    {/* {
      false ? <>hello</> : <>bye</>
    } */}
      <Navbar />
      <Routes>
        <Route path="/" element={<GrandParent zameen={zameen} />} />
        <Route path="/gp" element={<GrandParent zameen={zameen} />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/child" element={<Child />} />
        <Route path="/grand-child" element={<GrandChild />} />
        {/* <Route path="/grand-child/:abc" element ={<GrandChild />} /> */}
      </Routes>
      hello
    </>
  );
}

export default App;
