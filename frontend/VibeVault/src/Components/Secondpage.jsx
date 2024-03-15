import { useState } from 'react'
import "../Components/secondpage.css"
import image1 from "../../assets/Group 7.png"



function App() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <img id="topic" src={image1} alt="Example" />
        

      </>
    )
  }
  
  export default App