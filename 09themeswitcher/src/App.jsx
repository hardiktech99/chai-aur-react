import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/themebtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThememode] = useState("light")

  const lightTheme = () => {
    setThememode ("light")
  }
   const darkTheme = () => {
    setThememode ("dark")
  }

// actual change in theme

useEffect(() => {
  document.querySelector(`html`).classList.remove("light","dark")
  document.querySelector(`html`).classList.add(themeMode)
},[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
        <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
