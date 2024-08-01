import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import GitHub from './Components/Github/GitHub';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Tools from './Components/Tools/Tools';
import Projects from './Components/Projects/Projects';
import Experiance from './Components/Experiance/Experiance';


function App() {
  return (
    <div className="App" style={{backgroundColor: "rgb(13, 25, 51)", color: "#e2dede"}}>
        <Navbar/>
        <Home/>
        <About/>
        <Experiance/>
        <Skills/>
        <GitHub/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
