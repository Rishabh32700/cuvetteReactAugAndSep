import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { enroll } from "../slice/enrollmentSlice";

const courses = [
  { id: 100, name: "MERN stack", price: 4999 },
  { id: 200, name: "MEAN stack", price: 5999 },
  { id: 300, name: "DSA", price: 4999 },
  { id: 400, name: "JS Deep Dive", price: 7999 },
];

const CourseList = () => {
  const dispatch = useDispatch();
  const enrolledIds = useSelector((state)=>{
    return state.enrollment.enrollments

  })
  return (
    <div>
      CourseList
      <div>
        {courses.map((course) => {
            const isEnrolled = enrolledIds.includes(course.id)
            console.log(isEnrolled, enrolledIds);
            
          return (
            <>
              <div>
                <h3>{course.name}</h3>
                <p>{course.price}</p>
                <button onClick={() => {dispatch(enroll(course.id))}}>
                  {isEnrolled ? "Delete" : "enroll Now"}
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CourseList;
