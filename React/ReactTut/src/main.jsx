import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Timer from "./Timer.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App name={"app1"} age={20} />
    
    {/* <Timer /> */}
    {/* {console.log(<Timer />)} */}
    {/* <App name={"app2"} age={22}  /> */}
    {/* {App({name:"rishi", age:24})} */}
    {/* {console.log("hn bhai aagye swaad !!!!",App)} */}
  </>
);
