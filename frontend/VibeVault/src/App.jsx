import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from './Components/Upload'
import Navbar from "./Components/NavBar";
import Login from "./Components/Login";   
import Moodpage from "./Components/Moodpage";
import {Happy} from "./Components/Moods/HappyLang";
import {Sad} from "./Components/Moods/SadLang";
import {Thrill} from "./Components/Moods/ThrillLang";
import {Relaxed} from "./Components/Moods/RelaxedLang";
import {Scared} from "./Components/Moods/ScaredLang";
import {Inspired} from "./Components/Moods/InspiredLang";
import { Funny } from "./Components/Moods/FunnyLang";




function App(){

  
  return(
    <BrowserRouter>
      <>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Navbar/>}></Route>
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/moodpage" element={<Moodpage />} />
          <Route path="/sad" element={<Sad />} />
          <Route path="/happy" element={<Happy />} />
          <Route path="/thrill" element={<Thrill />} />
          <Route path="/relaxed" element={<Relaxed />} />
          <Route path="/scared" element={<Scared />} />
          <Route path="/inspired" element={<Inspired />} />
          <Route path="/funny" element={<Funny />} />


        </Routes>
      </>
    </BrowserRouter>
  )
}
export default App;
