import React from "react";
import '../App.css'
import { useParams } from "react-router-dom";
import Header from "./header";

// Puedes mover esto a un archivo separado si prefieres
const proyectos = [
    {
      id: "1",
      title: "Mueble de cocina",
      images: [
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552225_y_hvmint.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552225_y_hvmint.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744153638/photo_5163914101846552229_y_mkynfo.jpg",
      ],
    },
    {
      id: "2",
      title: "Closet de madera",
      images: [
        "https://via.placeholder.com/300x200?text=Proyecto+2+-+1",
        "https://via.placeholder.com/300x200?text=Proyecto+2+-+2",
      ],
    },
    // Más proyectos...
  ];
  


  const Detalle = () => {
    const { id } = useParams();
    const proyecto = proyectos.find((p) => p.id === id);
  
    if (!proyecto) {
      return <p>Proyecto no encontrado</p>;
    }
  
    return (
      <div className="wall-wrapper">
        <Header />
        <h1>{proyecto.title}</h1>
        <div className="detalle-imagenes">
          {proyecto.images.map((img, index) => (
            <img key={index} src={img} alt={`Imagen ${index + 1}`} />
          ))}
        </div>
      </div>
    );
  };
  

export default Detalle;