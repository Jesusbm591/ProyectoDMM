import React from "react";
import '../App.css'
import { useParams } from "react-router-dom";
import Header from "./header";
const proyectos = [
  {
    id: "1",
    title: "Mueble de cocina",
    images: [
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552225_y_hvmint.jpg",
        descripcion: "Vista frontal del mueble de cocina"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552225_y_hvmint.jpg",
        descripcion: "Detalle lateral del diseño"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744153638/photo_5163914101846552229_y_mkynfo.jpg",
        descripcion: "Mueble instalado en cocina real"
      }
    ],
    descripcion: [
      "Tiempo de elaboración aproximadamente 15 días, elaborado con tabla roca de encino"
    ]
  },
  {
    id: "2",
    title: "Closets",
    images: [
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150908/photo_5163914101846552219_y_iy7n7y.jpg",
        descripcion: "Closet con puertas corredizas"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5163914101846552238_y_kyae94.jpg",
        descripcion: "Interior del closet con divisiones"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5165735176569991054_y_s5wvqa.jpg",
        descripcion: "Closet ensamblado en habitación"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5163914101846552235_y_xgtfmi.jpg",
        descripcion: "Vista lateral del closet"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5163914101846552224_y_aycmts.jpg",
        descripcion: "Closet con acabado en madera natural"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5163914101846552218_y_udh0xw.jpg",
        descripcion: "Closet empotrado"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744307226/photo_5163914101846552231_y_mwk4ek.jpg",
        descripcion: "Detalle de puertas"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744307226/photo_5163914101846552239_y_rggniv.jpg",
        descripcion: "Closet con divisiones internas"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744307227/photo_5163914101846552244_y_a9wgrq.jpg",
        descripcion: "Acabado final del closet"
      }
    ],
    descripcion: [
      "Tiempo de elaboración aproximadamente 15 días, elaborado con tabla roca de encino"
    ]
  },
  {
    id: "3",
    title: "Centro de entretenimiento",
    images: [
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150907/photo_5163914101846552227_y_uaw1ug.jpg",
        descripcion: "Centro de entretenimiento completo"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744150906/photo_5163914101846552233_y_whm9te.jpg",
        descripcion: "Vista desde el lateral derecho"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5163914101846552237_y_yaxp2s.jpg",
        descripcion: "Detalle del espacio para TV"
      }
    ],
    descripcion: [
      "Tiempo de elaboración aproximadamente 15 días, elaborado con tabla roca de encino"
    ]
  },
  {
    id: "4",
    title: "Otros Proyectos",
    images: [
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744219724/photo_5163914101846552243_y_z0gqcs.jpg",
        descripcion: "Diseño personalizado en madera"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744219723/photo_5163914101846552234_y_xvacqb.jpg",
        descripcion: "Proyecto de estructura modular"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744306470/photo_5165735176569991056_y_knhraq.jpg",
        descripcion: "Acabado elegante en roble"
      },
      {
        url: "https://res.cloudinary.com/dje0ep7ig/image/upload/v1744307226/photo_5165735176569991057_y_kkznhf.jpg",
        descripcion: "Vista general del proyecto"
      }
    ],
    descripcion: [
      "Tiempo de elaboración aproximadamente 15 días, elaborado con tabla roca de encino"
    ]
  }
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
            <div key={index} className="image-card">
              <img src={img.url} alt={`Imagen ${index + 1}`} />
              <p>{img.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Detalle;