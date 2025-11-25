import React, { memo } from "react";
import { useSelector } from "react-redux";


const Navbar = ({handleClick}) => {
  const enrollmentCount = useSelector((state) => {
   return state.enrollment.enrollments.length
  });
console.log("child rendered !!!");

  return <div>
    {/* enrolled courses count = {enrollmentCount} */}
    <button onClick={()=>{
      handleClick()
    }}>click chile navbar</button>
  </div>;
};

export default memo(Navbar);
