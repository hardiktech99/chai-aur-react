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
  // let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-orange-500 text-black p-4  mb-4 '>Tailwind Test</h1>
      <Card userName="Hardik" position="UIUX Designer"/>
      <Card userName="Roshni" position="Doctor"/>
      <Card userName="Jay" position="Web Developer"/>
      <Card userName="Aarya" position="Jr Developer"/>
      
    </>
  )
}

export default App
