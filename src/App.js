import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './Components/Nav/nav';
import Home from './Components/Home/home';

import Lesson1 from './Components/Lesson1/lesson1-study';
import Lesson1_Ch_Eng from './Components/Lesson1/lesson1-ch->eng';
import Lesson1_Ch_Pin from './Components/Lesson1/lesson1-ch->pin';
import Lesson1_Eng_Ch from './Components/Lesson1/lesson1-eng->ch';

import Lesson2 from './Components/Lesson2/lesson2-study';
import Lesson2_Ch_Eng from './Components/Lesson2/lesson2-ch->eng';
import Lesson2_Ch_Pin from './Components/Lesson2/lesson2-ch->pin';
import Lesson2_Eng_Ch from './Components/Lesson2/lesson2-eng->ch';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/lesson1/study" element={<Lesson1></Lesson1>}></Route>
          <Route path="/lesson1/ch-to-eng" element={<Lesson1_Ch_Eng></Lesson1_Ch_Eng>}></Route>
          <Route path="/lesson1/ch-to-pin" element={<Lesson1_Ch_Pin></Lesson1_Ch_Pin>}></Route>
          <Route path="/lesson1/eng-to-ch" element={<Lesson1_Eng_Ch></Lesson1_Eng_Ch>}></Route>

          <Route path="/lesson2/study" element={<Lesson2></Lesson2>}></Route>
          <Route path="/lesson2/ch-to-eng" element={<Lesson2_Ch_Eng></Lesson2_Ch_Eng>}></Route>
          <Route path="/lesson2/ch-to-pin" element={<Lesson2_Ch_Pin></Lesson2_Ch_Pin>}></Route>
          <Route path="/lesson2/eng-to-ch" element={<Lesson2_Eng_Ch></Lesson2_Eng_Ch>}></Route>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
