import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      <nav className={`nav ${menuAbierto ? "open" : ""}`}>
        <ul>
          <li><a href="/Inicio" onClick={() => setMenuAbierto(false)} className="Menu">Inicio</a></li>
          <li><a href="/proyectos" onClick={() => setMenuAbierto(false)} className="Menu">Proyectos</a></li>
          <li><a href="/Nosotros" onClick={() => setMenuAbierto(false)} className="Menu">Sobre Nosotros</a></li>
          <li><a href="/contacto" onClick={() => setMenuAbierto(false)} className="Menu">Contacto</a></li>
        </ul>
      </nav>

      <img
        src="https://res.cloudinary.com/dje0ep7ig/image/upload/v1744059590/photo_5161191930099511036_y_dk6bbb.jpg"
        className="logo"
        alt="Logo"
      />

      {menuAbierto && <div className="overlay" onClick={toggleMenu}></div>}
    </header>


  );
};

export default Header;
