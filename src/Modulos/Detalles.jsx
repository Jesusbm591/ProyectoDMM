import React from "react";
import '../App.css'
import { useParams } from "react-router-dom";
import Header from "./header";
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
      title: "Closets",
      images: [
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150908/photo_5163914101846552219_y_iy7n7y.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5163914101846552238_y_kyae94.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5165735176569991054_y_s5wvqa.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5163914101846552235_y_xgtfmi.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5163914101846552224_y_aycmts.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5163914101846552218_y_udh0xw.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744307226/photo_5163914101846552231_y_mwk4ek.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744307226/photo_5163914101846552239_y_rggniv.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744307227/photo_5163914101846552244_y_a9wgrq.jpg"
      ],
    },
    {
      id: "3",
      title: "Centro de entretenimiento",
      images: [
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552227_y_uaw1ug.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150906/photo_5163914101846552233_y_whm9te.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5163914101846552237_y_yaxp2s.jpg"
      ],
    },
    {
      id: "4",
      title: "Otros Proyectos",
      images: [
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744219724/photo_5163914101846552243_y_z0gqcs.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744219723/photo_5163914101846552234_y_xvacqb.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5165735176569991056_y_knhraq.jpg",
        "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744307226/photo_5165735176569991057_y_kkznhf.jpg"
      ],
    },
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