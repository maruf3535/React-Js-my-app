import logo from './logo.svg';
import './App.css';

let name = "maruf35";
function App() {
  return (
    <>
      <h3 id="heading">Hello {name}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, in reprehenderit! Modi veniam soluta fugiat exercitationem <b>provident</b>, eos praesentium aliquid dignissimos! Dignissimos modi, eius quibusdam rerum ab laborum dicta. Deleniti.</p>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React With CodeWithHarry
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
