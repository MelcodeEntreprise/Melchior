import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
 
  return (
   <>
    
    <BrowserRouter>
    <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/projets" element={<Projects />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
