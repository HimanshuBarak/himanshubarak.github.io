
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="app">
      
      <Header />
      <About />
      <Skills  />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
