import { lazy, Suspense, useCallback, useState } from "react";
import "./App.css";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Test from "./components/Test";
import TemporaryDrawer from "./components/Mui";

const Sidebar = lazy(() => {
  return import("./components/Sidebar");
});

function App() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("clicked !!!");
  }, []);
  return (
    <>
      <div>
        {/* <Test /> */}
        <TemporaryDrawer />
        {/* {count}
        <br />
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          update app
        </button>
        <Navbar handleClick={handleClick} />
        <main>
          <section>
            <Suspense fallback={<>loading....</>} >
              <Sidebar />
            </Suspense>
          </section>
          <section>
            <CourseList />
          </section>
        </main> */}
      </div>
    </>
  );
}

export default App;
