import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

     
      <nav className={`nav ${menuAbierto ? "open" : ""}`}>
        <ul>
          <li><a href="/Inicio" onClick={() => setMenuAbierto(false)} className="Menu">Inicio</a></li>
          <li><a href="/proyectos" onClick={() => setMenuAbierto(false)} className="Menu">Proyectos</a></li>
          <li><a href="#" onClick={() => setMenuAbierto(false)} className="Menu">Contacto</a></li>
          <li><a href="#" onClick={() => setMenuAbierto(false)} className="Menu"></a></li>
          <li><a href="#" onClick={() => setMenuAbierto(false)} className="Menu">Contacto</a></li>
        </ul>
      </nav>

      {menuAbierto && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
