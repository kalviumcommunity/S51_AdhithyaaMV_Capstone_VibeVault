import { useState } from 'react'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='main'><h1>VIBE VAULT</h1></div>
    <div className='about'>
    Introducing Vibe Vault, a unique project designed to enhance your entertainment experience. 
    Users simply select their current mood, and are seamlessly guided to a subsequent page where they can choose between music, movies, or web series. 
    The platform then prompts users to specify their language preference, presenting curated options tailored to their selections. 
    Dive into personalized entertainment with Vibe Vault and let your mood guide the way!"
    </div>
    
    <div className='wrapper'>
      <form action="">
          <h1>Login</h1>
          <div className='input-box'>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='password' />

          </div>
      </form>
    </div>
    
    </>
  )
}

export default App
