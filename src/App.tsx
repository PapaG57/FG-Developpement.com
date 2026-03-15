import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import About from './pages/About';
import Creations from './pages/Creations';
import Construction from './pages/Construction';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/creations" element={<Creations />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
