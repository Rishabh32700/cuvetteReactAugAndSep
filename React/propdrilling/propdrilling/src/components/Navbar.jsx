import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
       <button
        onClick={() => {
          navigate("/gp");
        }}>
        GrandParent
      </button>
      <button
        onClick={() => {
          navigate("/parent");
        }}>
        Parent
      </button>
      <button
        onClick={() => {
          navigate("/child");
        }}>
        Child
      </button>
      <button
        onClick={() => {
          navigate("/grand-child");
        }}>
        GrandChild
      </button>
    </div>
  )
}

export default Navbar
