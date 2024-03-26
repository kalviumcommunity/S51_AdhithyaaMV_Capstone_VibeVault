import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from './Components/Upload'
import Navbar from "./Components/NavBar";
import Login from "./Components/Login";   



function App(){
  return(
    <BrowserRouter>
      <>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Navbar/>}></Route>
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </>
    </BrowserRouter>
  )
}
export default App;
