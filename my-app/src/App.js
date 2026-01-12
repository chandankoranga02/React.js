import logo from './logo.svg';
import './App.css';
import TextForm from './Components/TextForm.mjs';
import Navbar from './Components/Navbar.mjs';
import { useState } from 'react';
import AboutUS from './Components/AboutUS.mjs'
import { Routes, Route } from "react-router-dom";





function App() {

  const DarkMode = 'black';
  const NormalMode = 'white';

  const [btnText, changeText] = useState("Enable Dark Mode");
  const [currentMode, modeChange] = useState({ color: DarkMode, backgroundColor: NormalMode, });


  let togglebutton = () => {
    if (currentMode.color === DarkMode) {
      modeChange({
        color: NormalMode,
        backgroundColor: DarkMode

      })
      changeText("Enable Light mode");
      document.body.style.backgroundColor = DarkMode

    }

    else {
      modeChange({
        color: DarkMode,
        backgroundColor: NormalMode

      })
      changeText("Enable Dark mode");
      document.body.style.backgroundColor = NormalMode


    }
  }



  return (
    <div className="App">
      <Navbar inputMode={currentMode} stylemode={currentMode.backgroundColor === DarkMode ? 'dark' : 'light'} > </Navbar>
      <button type="button" className={`btn btn-${currentMode.backgroundColor === DarkMode ? 'light' : 'dark'} my-5`} onClick={togglebutton} > {btnText} </button>
      <Routes>
        <Route  path="/" element={<TextForm stylemode={currentMode} />}/>
        <Route  path="/about" element={<AboutUS stylemode={currentMode}  />}/>
      </Routes>

    </div>


  );

}





export default App;
