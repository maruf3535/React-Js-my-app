import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  // toggleMode function and it will be passed through props.
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable DarkMode');
  let alertObj = {};
  const [alert, setAlert] = useState(alertObj);

  // const showAlert = (msg, type) => {
  //   alertObj.message = msg;
  //   alertObj.type = type;
  //   return alertObj;
  // };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeText('Enable LightMode');
      document.body.style.backgroundColor = "rgb(48 95 93)";
      // Control the text color of textbox area.
      document.getElementById('mainContainer').style.color = 'white';
      // setAlert(showAlert("Dark mode is enabled!", "success"));
      // alertObj.message = "Dark mode is enabled!";
      // alertObj.type = "success";
      // Object.assign(alertObj, { id: 2, name: "myNewObject" });
      setAlert(Object.assign(alertObj, { message: "Darkmode is enabled!", type: 'success' }));
      console.log(alertObj)

    } else {
      setMode('light');
      setModeText('Enable DarkMode')
      document.body.style.backgroundColor = "white";
      // Control the text color of textbox area.
      document.getElementById('mainContainer').style.color = 'black';
      // setAlert(showAlert("Light mode is enabled!", "success"));
      // alertObj.message = "Light mode is enabled!";
      // alertObj.type = "success";
      setAlert(Object.assign(alertObj, { message: "Light mode is enabled!", type: "success" }));
    }
  };



  return (
    <>
      <Navbar title="TitlePassed" mode={mode} toggleMode={toggleMode} modeText={modeText} />
      <Alert alert={alert} />
      <div className="container" id="mainContainer">
        <TextForm mode={mode} />
      </div>
    </>
  );
}

export default App;
