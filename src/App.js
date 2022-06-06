import React, { Suspense, lazy } from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import Contact from './components/Contact';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));

function App() {
  // toggleMode function and it will be passed through props.
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable DarkMode');
  let alertObj = {};
  const [alert, setAlert] = useState(alertObj);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeText('Enable LightMode');
      document.body.style.backgroundColor = "rgb(48 95 93)";
      // Control the text color of textbox area.
      document.getElementById('mainContainer').style.color = 'white';
      setAlert(Object.assign(alertObj, { message: "Darkmode is enabled!", type: 'success' }));
      setTimeout(() => {
        alertObj = {};
        setAlert(alertObj);
      }, 1500);
    } else {
      setMode('light');
      setModeText('Enable DarkMode')
      document.body.style.backgroundColor = "white";
      // Control the text color of textbox area.
      document.getElementById('mainContainer').style.color = 'black';
      setAlert(Object.assign(alertObj, { message: "Light mode is enabled!", type: "success" }));
      setTimeout(() => {
        alertObj = {};
        setAlert(alertObj);
      }, 1500);
    }
  };



  return (
    <>
      <Navbar title="TitlePassed" mode={mode} toggleMode={toggleMode} modeText={modeText} />
      <Alert alert={alert} />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* <Route path="/" element={<TextForm mode={mode} />} /> */}
            <Route path="/" element={<Contact />} >

              {console.log(Contact)}
            </Route>
            <Route path="/about" element={<About />} >
              {console.log(About)}

            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
