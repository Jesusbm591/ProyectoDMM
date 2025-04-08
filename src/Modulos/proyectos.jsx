import React from "react";
import "../App.css";
import Header from "./header";

const proyectos = [
  {
    id: 1,
    title: "Mueble de cocina",
    image: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552225_y_hvmint.jpg",
  },
  {
    id: 2,
    title: "Closet de madera",
    image: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552226_y_mns6gu.jpg",
  },
  {
    id: 3,
    title: "Entretenimiento",
    image: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552227_y_uaw1ug.jpg",
  },
];

const Proyectos = () => {
  return (
    <div className="wall-wrapper">
      <Header />
      <div className="Card">
        <h1>Proyectos realizados 🙂</h1>
        <div className="card-grid">
          {proyectos.map((p) => (
            <div className="image-card" key={p.id}>
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
