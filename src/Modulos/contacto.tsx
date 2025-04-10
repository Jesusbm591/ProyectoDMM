import React from "react";
import '../App.css';
import Header from "./header";

const Contacto = () => {
    return (
        <div className="wall-wrapper">
            <Header />
            <h1>Contacto</h1>
            <h3>Para más información sobre algún proyecto, puedes contactar a este número:</h3>
            <p className="contact-number">#88#########</p>
            
            <h4>O contáctanos directamente a través del siguiente formulario:</h4>
            
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" placeholder="Escribe tu mensaje..."  required></textarea>
                </div>
                <button type="submit" className="submit-btn">Enviar</button>
            </form>
        </div>
    );
}

export default Contacto;
