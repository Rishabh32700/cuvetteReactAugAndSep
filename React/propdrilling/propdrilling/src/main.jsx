import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MyContextProvider from "./components/MyContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <MyContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyContextProvider>
    {/* <Abc />
    <Xyz /> */}
  </>
);
