import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from './Components/Upload'
import Navbar from "./Components/NavBar";
import Login from "./Components/Login";   
import Moodpage from "./Components/Moodpage";
import back_img1 from "../assets/01.png"
import back_img2 from "../assets/02.png"
import back_img3 from "../assets/03.png";
import back_img4 from "../assets/04.png";
import back_img5 from "../assets/05.png";

function App(){

  useEffect(()=>{
    const images = [back_img1, back_img2, back_img3, back_img4, back_img5];
    const randomNumber = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[randomNumber]})`;
  }, []);
  return(
    <BrowserRouter>
      <>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Navbar/>}></Route>
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/moodpage" element={<Moodpage />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}
export default App;
