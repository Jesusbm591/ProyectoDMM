import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Header from "./header";

import '../App.css'

const Inicio = ()=>{
    return(
        <div className="wall-wrapper">
            <Header className="Header" />
            <div>
                
                <h1 className="h1">Carpinteria DMM</h1>
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <div className="carrucel">
                        <img src="https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150906/photo_5163914101846552233_y_whm9te.jpg" alt="1" />
                        <p className="carousel-text">Diseños personalizados en madera</p>
                    </div>
                    <div className="carrucel">
                        <img src="https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552225_y_hvmint.jpg" alt="2" />
                        <p className="carousel-text">Calidad y detalle en cada mueble</p>
                    </div>
                    <div className="carrucel">
                        <img src="https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552227_y_uaw1ug.jpg" alt="3" />
                        <p className="carousel-text">Hecho a mano con pasión</p>
                    </div>
                </Carousel>
                <div className="card">
                <button><a href="/Proyectos" className="href">Trabajos Realizados</a></button>
                <p>Para ver más información visita los módulos del sistema</p>
                </div>
                <p className="read-the-docs">Bienvenidos a Carpinteria De Madera Muebles</p>
            </div>
        </div>
    );
}
export default Inicio;