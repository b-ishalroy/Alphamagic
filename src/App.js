import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Formbar from './components/Formbar';
import Alert from './components/alert';

// react router 
// The Switch component has been replaced with the Routes component. 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  // Navbar useState 
  const [textMode, setTextMode] = useState("Dark mode");
  const [styleMode, setStyleMode] = useState({
    color: "black",
    backgroundColor: "white"
  });
  const toggleMode = () => {
    if (styleMode.backgroundColor === "white") {
      setStyleMode({
        color: "white",
        backgroundColor: "black",
      });
      document.body.style.backgroundColor = "black";
      setTextMode("Light mode");
      showAlert("Dark Mode Enabled", "Success");
      document.title = "Alphamagic - Dark Mode"
    } else {
      setStyleMode({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      setTextMode("Dark mode");
      showAlert("White Mode Enabled", "Success");
      document.title = "Alphamagic - Light Mode"
    }
  };

  //alert logic
  const [description, setDescription] = useState(null)
  const showAlert = (message, type) => {
    setDescription({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setDescription(null)
    }, 1000)
  }


  return (
    <>
      <Router>

        {/*Navbar */}
        <Navbar title='Alphamagic' mode={styleMode} text={textMode} toggleMode={toggleMode} />
        {/*Alert*/}
        <Alert description={description} />
        {/* Form  */}
        

        {/* switch for router ====  The Switch component has been replaced with the Routes component. */}
        <Routes>
          {/* <Route path="/Home" element={<Navbar title='Alphamagic' mode={styleMode} text={textMode} toggleMode={toggleMode} />} /> */}
          <Route path="/Home" element={<Formbar mode={styleMode} showAlert={showAlert} />} />
        </Routes>

      </Router>

    </>
  );
}
export default App;
