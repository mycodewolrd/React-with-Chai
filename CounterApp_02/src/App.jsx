import { useState } from 'react';
import './style.css';

function App() {
   let [counter, setCounter] = useState(0)

    const addValue = () => {
    setCounter(counter + 1)
    console.log('Counter value:', counter)
    }

    const removeValue = () => {
      setCounter(counter - 1)
      console.log('Counter value:', counter)
  }

  return (
    <>
    <h1>Hello World!!</h1>
    <h3>Counter value: {counter}</h3>
    <button onClick={addValue}>Add value</button>
    <p>Added value: {counter}</p>
    <button onClick={removeValue}>Remove Value</button>
    <p>Removed value: {counter}</p>
    </>
  )
}

export default App
