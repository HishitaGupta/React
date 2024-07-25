import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hishita from './hishita.jsx'

function MyJsx(){
  return(
    <div>
      <h1>Hishita is Hishita is Hishita</h1>
    </div>
  )
}

const AnotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

//create element according to react syntax

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',
    target:'_blank'
  },
  'click me to visit google'
)

 




ReactDOM.createRoot(document.getElementById('root')).render(
  
    /* <App />
    <Hishita/>
    <MyJsx/> */
    reactElement
    /* <AnotherElement/> not working*/
    
)
