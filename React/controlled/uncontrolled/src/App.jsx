
import { useRef } from 'react';
import './App.css'



function App() {
  const nameRef = useRef(null)
  const ageRef = useRef(null)

  function handleSubmit (e){
    e.preventDefault()

    const name = nameRef.current.value
    const age = ageRef.current.value
console.log(name, age);


  }

  return (
    <>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <label htmlFor="name"></label>
        <input type="text" id='name' ref={nameRef} defaultValue={"rishabh"} />
        <label htmlFor="age"></label>
        <input type="text" id='age' ref={ageRef} defaultValue={24} />
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
