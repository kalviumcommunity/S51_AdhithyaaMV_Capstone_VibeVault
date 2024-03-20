import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from './Components/Upload'
import Navbar from "./Components/NavBar";

function App(){
  return(
    <BrowserRouter>
      <>
        <Navbar/>
        <Routes>
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}
export default App;
