import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h1>Juego de Tronos</h1>
      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-class' : '')} onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/characters" className={({ isActive }) => (isActive ? 'active-class' : '')} onClick={() => setIsOpen(false)}>
          Personajes
        </NavLink>
        <NavLink to="/houses" className={({ isActive }) => (isActive ? 'active-class' : '')} onClick={() => setIsOpen(false)}>
          Casas
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-class' : '')} onClick={() => setIsOpen(false)}>
          Contacto
        </NavLink>

      </nav>
      <div className="hamburger" onClick={toggleMenu} aria-label="Abrir menú">
        &#9776;
      </div>
    </header>
  );
};

export default Header;