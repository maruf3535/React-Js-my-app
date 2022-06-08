import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


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
      <div className="my-3" id="mainContainer">
        <TextForm mode={mode} />
      </div>
    </>
  );
}

export default App;
