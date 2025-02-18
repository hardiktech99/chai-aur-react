import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

// const reactElement = {
//   type: "a",
//   props: {
//       href:"https://google.com",
//       target:"_blank"
//   },
//   children: "Click me to visit google"
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser = "chai aur React"
const reactElement = React.createElement(
  "a", {href:"https://google.com", target: "_blank"},
  "click me to visit google",
  anotherUser
)

createRoot(document.getElementById('root')).render(
 reactElement
)
