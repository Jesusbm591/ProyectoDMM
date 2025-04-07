import { useState } from 'react'
import Header from './Modulos/header' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className="wall-wrapper">

    <>
    <Header className='Header'/>
    
      <>
      <div>
        <div>
          <a target="_blank">
            <img src="https://res.cloudinary.com/dje0ep7ig/image/upload/v1744059590/photo_5161191930099511036_y_dk6bbb.jpg" className="logo" alt="React logo" />
          </a>
        </div>
          <h1 className='h1'>
          Muebleria DMM
          </h1>
        <div className="card">
          <button>
          Trabajos Realizados
          </button>
          <p>
          Para ver mas información visita los modulos del sistema
          </p>
        </div>
        <p className="read-the-docs">
          Bienvenidos a Muebleria De Madera Muebles
        </p>
        </div>
      </>
    
    </>
    </div>
  )
}
export default App
