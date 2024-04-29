import React, { useState } from 'react';
import "../Components/Signup.css";
import { auth } from '../../firebase';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        . then((userCredential) => {
            console.log(userCredential);
        })
        . catch((error)=>{
            console.log(error);
        })
    }

    return(
        <div className='log-in-container'>
            <form onSubmit={signIn}>
                <h1>Sign-up</h1>
                <input 
                    type='email'
                    placeholder='Enter email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <input 
                    type='password' 
                    placeholder='Enter password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>

                <button type='submit'>Log In</button>

            </form>
        </div>
    )
};

export default Signup;