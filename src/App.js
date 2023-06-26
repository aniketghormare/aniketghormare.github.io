import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import HomePage from './Components/HomePage';
import Project from './Components/Project';
function App() {
  return (
    <div className="App" style={{backgroundColor: "white", fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", color: "#3e2723"}}>
      <Navbar/>
      <HomePage/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
