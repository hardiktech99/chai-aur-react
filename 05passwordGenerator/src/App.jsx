import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  //useref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback (() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed)  str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+{}[]<>?/;:"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])
    
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md px-4 py-4 my-8 text-white bg-gray-700'>
        <h1 className='text-center py-6'>Password Generator</h1>
        <div className='flex overflow-hidden mb-4 rounded'>
          <input
            type="text"
            value={Password}
            placeholder='Password'
            className='outline-none w-full py-1 px-3 text-black'
            ref={passwordRef}
            readOnly
            />
          <button onClick={copyPasswordToClipboard} className='outline-none py-1 px-3  bg-blue-700'>copy</button>
        </div>

        <div className='gap-x-1'>
          <input
          type="range" 
          min={6}
          max={32}
          className='cursor-pointer'
          onClick={(e) => {setLength(e.target.value)}}
          />
          <label>length:{length}</label>
        </div>

        <div className='flex item-center gap-x-1'>
          <input
          type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setnumberAllowed((prev) => !prev)
          }}
          />
          <label>Number</label>
        </div>

        <div className='flex item-center gap-x-1'>
          <input
          type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
