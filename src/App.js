import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // toggleMode function and it will be passed through props.
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable DarkMode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeText('Enable LightMode');
      document.body.style.backgroundColor = "rgb(48 95 93)";
      // Control the text color of textbox area.
      document.getElementById('mainContainer').style.color = 'white';

    } else {
      setMode('light');
      setModeText('Enable DarkMode')
      document.body.style.backgroundColor = "white";
      // Control the text color of textbox area.
      document.getElementById('mainContainer').style.color = 'black';
    }
  };

  return (
    <>
      <Navbar title="TitlePassed" mode={mode} toggleMode={toggleMode} modeText={modeText} />
      {/* <div className="container" style="height: 80vh;"> */}
      <div className="container" id="mainContainer">
        <TextForm mode="dark" />
      </div>
    </>
  );
}

export default App;
