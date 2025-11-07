//   const heading = document.createElement("h1");
//   heading.innerHTML = "Hello from JS !!!";

// <div id="root">
//   <div class="parent">
//     <div class="child">
//       <h1>Hello from ReactJS !!!</h1>
//       <h2>Hello from ReactJS !!!</h2>
//     </div>
//     <div class="child2">
//       <h1>Hello from ReactJS !!!</h1>
//       <h2>Hello from ReactJS !!!</h2>
//     </div>
//   </div>
// </div>

// const headingElement = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello from ReactJS !!!"
// );

// const childElement = React.createElement(
//   "div",
//   {
//     className: "child",
//   },
//   headingElement
// );

import React from "react"
import ReactDOM from "react-dom/client"
const parentElement = React.createElement(
  "div",
  {
    className: "parent",
  },
  //   childElement

  [
    React.createElement(
      "div",
      {
        className: "child",
      },
      //   headingElement
      [
        React.createElement(
          "h1",
          {
            id: "heading",
          },
          "Hello from ReactJS !!!"
        ),
        React.createElement(
          "h2",
          {
            id: "heading",
          },
          "Hello from ReactJS !!!"
        ),
      ]
    ),

    React.createElement(
      "div",
      {
        className: "child2",
      },
      //   headingElement
      [
        React.createElement(
          "h1",
          {
            id: "heading",
          },
          "Hello from ReactJS !!!"
        ),
        React.createElement(
          "h2",
          {
            id: "heading",
          },
          "Hello from ReactJS !!!"
        ),
      ]
    ),
  ]
);

// const headingReact = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     tisha: "hiiiii",
//     style: {
//       color: "red",
//       background: "green",
//     },
//   },
//   "Hello from ReactJS !!!"
// );

console.log("headingReact", parentElement);

const root = document.getElementById("root");
const rootReact = ReactDOM.createRoot(root);
//   root.appendChild(heading);
rootReact.render(parentElement);


// vite 
// webpack
// parcel

// build
// local server
// HMR
// file watching algorithm 
// caching
// image optimization
// minification of code
// bunduling
// code spliting
// tree shaking
// error handeling
