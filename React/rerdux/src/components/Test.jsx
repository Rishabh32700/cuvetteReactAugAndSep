import { useMemo } from "react";

import { useState } from "react";

// const memoizedValue = useMemo(()=>{
//     return heavyCal(a,b)
// }, [a, b])

const heavyWork = (count) => {
  console.log("heavy work is running take a chill pill !!!!");
  let total = 0;
  for (let i = 0; i < 5000000000; i++) {
    total += i;
  }
  return total + count;
};

function Test() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    return heavyWork(count);
  }, [count]);

  return (
    <>
        <h1>count = {count}</h1>
        <h1>resulyt = {result}</h1>
        {/* { heavyWork(count)} */}
        <button onClick={()=>{
            setCount(count+1)
        }}>inc count</button>
    </>
  )
}

export default Test