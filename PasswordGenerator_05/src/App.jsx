import { useState, useCallback, useEffect, useRef } from 'react'

//useState hook: Allows to add state to a functional component
//useEffect hook: Memoize the functions
//useEffect hook: Allows to add effect to a functional component
//useRef hook: Allows to add ref to a functional component 

function App() {
  //Hold the needed variables
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  //Method to Generate password
  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$&*_-/~"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, 
  [length, numAllowed, charAllowed,setPassword]//to optimized the method according to the modifier's
)
  //Method to Copy Password 
  const copyPasstoClip = useCallback(() => {
    passwordRef.current?.select();//select copied password(? for optionaly select bcoz password can be blank also)
    // passwordRef.current?.setSelectionRange(0,20); //limit selection range
    window.navigator.clipboard.writeText(password)//copy password to system clipboard 
  }, [password])

  //useEffect hook
  useEffect(()=>{
    passGenerator()
  }, [length, numAllowed, charAllowed]//if modifier's changed re-run the code)
)

  return (
    <>
    {/* Headline text */}
      <h1 className='text-center pt-6 sm:pt-8 text-4xl sm:text-5xl text-white font-mono'>Password Generator</h1>
      {/* Main container */}
      <div className="w-full sm:w-2/3 md:w-4/5 lg:w-1/2 xl:w-2/5 max-w-4/5 mx-auto my-8 px-4 py-4  shadow-md rounded-lg text-orange-500 bg-gray-700">
      {/* Password field */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passwordRef}
        />

        {/* Copy button */}
        <button 
         className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700 transition duration-300"
         onClick={copyPasstoClip}
         >Copy</button>
      </div>
      
      {/* Password modifier*/}
      <div className="flex text-sm gap-x-2 text-orange-500 text-wrap">
      
        {/* Length range */}
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={50}
          value={length}
          className= 'h-6 cursor-pointer'          
          onChange={(e) => {setLength(e.target.value)}}/>
          <label htmlFor="lengthRange">Length: {length}</label>
        </div>

        {/* NumberAllowed cheakbox */}
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          className="h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          onChange={() => {
            setNumAllowed((prev) => !prev); //(prev):previous value and (!prev): reversed value
          }}/>
          <label htmlFor="numberInput">Numbers</label>
          </div>

        {/* CharAllowed cheakbox */}
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          id="characterInput"
          className="h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          onChange={() => {
            setCharAllowed((prev) => !prev); //(prev):previous value and (!prev): reversed value
          }}/>
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}
export default App
