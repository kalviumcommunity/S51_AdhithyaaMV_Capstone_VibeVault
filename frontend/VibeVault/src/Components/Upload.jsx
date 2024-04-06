import { useState } from 'react'



function App() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <div>
          <a href='#' className='Upload'>U P L O A D</a>
          <div className='desc1'>Upload</div>
        <div className='desc'>Unveil your artistic prowess here</div>

        <div className='audiovideo'>
            <label htmlFor="url">Auido Or Video:</label>
            <input type="text" placeholder='paste URL here..' />
            <p>⬅️click here</p>
        </div>

      </div>
      </>
    )
  }
  
  export default App