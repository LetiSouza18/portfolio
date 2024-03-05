
import './App.css';
import Navbar from './componentes/section/Navbar';
import Presentation from './componentes/section/Presentation';
import Story from './componentes/section/Story';
import Skills from './componentes/section/Skills';
import Projects from './componentes/section/Projects';
import Footer from './componentes/section/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Story/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
