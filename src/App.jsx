// App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Houses from './pages/Houses/Houses';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import HouseDetail from './pages/HouseDetail/HouseDetail';
import Contact from './pages/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/houses/:family" element={<HouseDetail />} />
          <Route path="/contact" element={<Contact />} /> {/* Ruta para contacto */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;