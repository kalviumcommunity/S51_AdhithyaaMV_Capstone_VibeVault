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

import {FunnyEng} from "./Components/Funny/FunnyEng";
import {FunnyTam} from "./Components/Funny/FunnyTam";
import {FunnyTel} from "./Components/Funny/FunnyTel";

import {HappyEng} from "./Components/Happy/HappyEng";
import {HappyTam} from "./Components/Happy/HappyTam";
import {HappyTel} from "./Components/Happy/HappyTel";

import {InspiredEng} from "./Components/Inspired/InspiredEng";
import {InspiredTam} from "./Components/Inspired/InspiredTam";
import {InspiredTel} from "./Components/Inspired/InspiredTel";

import {RelaxedEng} from "./Components/Relaxed/RelaxedEng";
import {RelaxedTam} from "./Components/Relaxed/RelaxedTam";
import {RelaxedTel} from "./Components/Relaxed/RelaxedTel";

import {SadEng} from "./Components/Sad/SadEng";
import {SadTam} from "./Components/Sad/SadTam";
import {SadTel} from "./Components/Sad/SadTel";

import {ScaredEng} from "./Components/Scared/ScaredEng";
import {ScaredTam} from "./Components/Scared/ScaredTam";
import {ScaredTel} from "./Components/Scared/ScaredTel";

import {ThrillEng} from "./Components/Thrill/ThrillEng";
import {ThrillTam} from "./Components/Thrill/ThrillTam";
import {ThrillTel} from "./Components/Thrill/ThrillTel";



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

          <Route path="/funnyeng" element={<FunnyEng/>}/>
          <Route path="/funnytam" element={<FunnyTam/>}/>
          <Route path="/funnytel" element={<FunnyTel/>}/>

          <Route path="/happyeng" element={<HappyEng/>}/>
          <Route path="/happytam" element={<HappyTam/>}/>
          <Route path="/happytel" element={<HappyTel/>}/>

          <Route path="/inspiredeng" element={<InspiredEng/>}/>
          <Route path="/inspiredtam" element={<InspiredTam/>}/>
          <Route path="/inspiredtel" element={<InspiredTel/>}/>

          <Route path="/relaxedeng" element={<RelaxedEng/>}/>
          <Route path="/relaxedtam" element={<RelaxedTam/>}/>
          <Route path="/relaxedtel" element={<RelaxedTel/>}/>

          <Route path="/sadeng" element={<SadEng/>}/>
          <Route path="/sadtam" element={<SadTam/>}/>
          <Route path="/sadtel" element={<SadTel/>}/>

          <Route path="/scaredeng" element={<ScaredEng/>}/>
          <Route path="/scaredtam" element={<ScaredTam/>}/>
          <Route path="/scaredtel" element={<ScaredTel/>}/>

          <Route path="/thrilleng" element={<ThrillEng/>}/>
          <Route path="/thrilltam" element={<ThrillTam/>}/>
          <Route path="/thrilltel" element={<ThrillTel/>}/>


        </Routes>
      </>
    </BrowserRouter>
  )
}
export default App;
