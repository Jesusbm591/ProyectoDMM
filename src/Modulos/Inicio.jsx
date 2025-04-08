import React from "react";
import Header from "./header";
import '../App.css'

const Inicio = ()=>{
    return(
        <div className="wall-wrapper">
            <Header className="Header" />
            <div>
                <div>
                <a target="_blank" rel="noopener noreferrer">
                    <img
                    src="https://res.cloudinary.com/dje0ep7ig/image/upload/v1744059590/photo_5161191930099511036_y_dk6bbb.jpg"
                    className="logo"
                    alt="React logo"
                    />
                </a>
                </div>
                <h1 className="h1">Carpinteria DMM</h1>
                <div className="card">
                <button>Trabajos Realizados</button>
                <p>Para ver más información visita los módulos del sistema</p>
                </div>
                <p className="read-the-docs">Bienvenidos a Mueblería De Madera Muebles</p>
            </div>
        </div>
    );
}
export default Inicio;