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
                <div>
                    <img src="https://res.cloudinary.com/dje0ep7ig/image/upload/v1744145629/photo_5163914101846552212_y_uv47gk.jpg" alt="1" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dje0ep7ig/image/upload/v1744145629/photo_5163914101846552211_y_xgopy7.jpg" alt="2" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dje0ep7ig/image/upload/v1744145629/photo_5163914101846552213_y_q8gchq.jpg" alt="3" />
                </div>
        </Carousel>
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