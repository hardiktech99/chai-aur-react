import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName:"Hardik",
    age:21
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-700 text-white p-4 rounded-xl mb-4 '>Tailwind Test</h1>
      <Card userName="chai aur code" position="UIUX Designer"/>
      <Card userName="Roshardy"/>
      
    </>
  )
}

export default App
