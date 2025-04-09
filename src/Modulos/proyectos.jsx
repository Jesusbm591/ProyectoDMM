import React from "react";
import "../App.css";
import Header from "./header";
import { Link } from "react-router-dom";
const proyectos = [
  {
    id: 1,
    title: "Mueble de cocina",
    image: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552225_y_hvmint.jpg",
  },
  {
    id: 2,
    title: "Closets",
    image: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552226_y_mns6gu.jpg",
  },
  {
    id: 3,
    title: "Centro de entretenimiento",
    image: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552227_y_uaw1ug.jpg",
  },
  {
    id:4,
    title: "Otros Trabajos",
    image: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744219723/photo_5163914101846552234_y_xvacqb.jpg",
  }
];

const Proyectos = () => {
  return (
    <div className="wall-wrapper">
      <Header />
      <div className="card-grid">
        {proyectos.map((p) => ( 
            <Link to={`/proyecto/${p.id}`} key={p.id} className="image-card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            </Link>
        ))}
        </div>
      </div>
  );
};

export default Proyectos;