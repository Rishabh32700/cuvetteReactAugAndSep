import "./App.css";

import { useEffect, useState } from "react";

// traditional react we have some inbuilt fetures Which are not present in your latest React?

// And these features are you know states, life cycle methods, context, right? So, ये कुछ ऐसे features हैं: these are some of the features which were present in the traditional React when we were using class components, right? When we use class components, these features were present but when we use functional components, right? These features are not present. These features are not in-built, right? These are not in-built, right? So in class components there were some features which were in-built just like your states, life cycle methods, and context but they are not in-built in your functional components and to use those React internal features, React created some special JavaScript functions and we call those functions as hooks.

function App() {
  const [count, setCount] = useState(0);
  // const arr = [];
  const [arr, setArr] = useState([]);
  const fetchUser = async () => {
    const api = "https://api.github.com/users";
    const fetchApi = await fetch(api);
    const strRes = await fetchApi.json();
    console.log(strRes);
    setArr(strRes);
  };

  console.log("arr ===> ", arr);

  useEffect(() => {
    fetchUser();
    return () => {
      console.log("conponent unmonted");
    };
  }, []);

  return (
    <>
      <h1 className="hello">{count}</h1>
      {arr?.map((ele, idx) => {
          return <li key={ele.id}>{ele.login}</li>;
        })
        .slice(0, 6)}
      <button
        onClick={() => {
          setCount(count + 1);
          // setInc(inc+1)
        }}>
        add
      </button>
      <button
        onClick={() => {
          if (count == 0) return;
          setCount(count - 1);
        }}>
        sub
      </button>
    </>
  );
}
export default App;
