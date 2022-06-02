import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" about_text="About TextUtils" home_link="https://www.google.com"/> */}
      {/* <Navbar /> */}
      <Navbar title="TitlePassed" />
      <div className="container">
        <TextForm />

      </div>
    </>
  );
}

export default App;
