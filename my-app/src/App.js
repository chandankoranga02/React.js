import logo from './logo.svg';
import './App.css';
import ReactUI from './Components/text.mjs';
import TextForm from './Components/TextForm.mjs';
import Navbar from './Components/Navbar.mjs';

import { useState } from 'react';




function App() {

  const [mode , setmode ] = useState('light');

  const centralToggleButton = () => {
    if (mode === 'light'){
      setmode('dark');
    }

     else {
      setmode('light');
     }
    }

      return (
    <div className="App">
      <Navbar mode={mode} centralToggleButton={centralToggleButton} > </Navbar>
      {/* <ReactUI name="chandan koranga" framework="react"/> */}
      <TextForm mode={mode} />

    </div>


  );

  }





export default App;
