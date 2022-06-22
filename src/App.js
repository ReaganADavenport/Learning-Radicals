import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './Components/Nav/nav';
import Home from './Components/Home/home';
import Lesson1 from './Components/Lesson1/lesson1-study';
import Lesson1_Ch_Eng from './Components/Lesson1/lesson1-ch->eng';
import Lesson1_Ch_Pin from './Components/Lesson1/lesson1-ch->pin';

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
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
