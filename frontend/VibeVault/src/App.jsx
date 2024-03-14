import { useState } from 'react'
import './App.css'
// import image1 from "../assets/Group 7.png"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <div className='main'>
    <img src={image1} alt="Example" />

    </div> 
    
    </>
  )
}

export default App
