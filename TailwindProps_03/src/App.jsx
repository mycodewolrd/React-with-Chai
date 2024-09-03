import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 mb-5 text-black p-4 rounded-xl'>Tailwind Test</h1>
      
      <Card username = "Raju"/>
      <Card username = "Bobo"/>
    </>
  )
}

export default App
