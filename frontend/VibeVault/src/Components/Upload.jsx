import { useState } from 'react'
import "../Components/Upload.css"
import img from "../assets/img.jpg"


function App() {
    const [count, setCount] = useState(0)
  
    return (
    <>
      <div className='body'>
          <div href='#' className='Upload'>UPLOAD</div>
          <div className='back'>BACK</div>
          <nav>
          <div className='title'>
            <img className="img" src={img} alt="" />
          </div>
          <div className='description'>click here to upload your talents 
          </div>
          <div className='but'><button><h2>POST</h2></button></div>
          </nav>
      </div>
    </>
  )
}
export default App