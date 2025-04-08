import { useState  } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Modulos/header' 
import Proyectos from './Modulos/proyectos';
import Inicio from './Modulos/Inicio'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path='Inicio' element={<Inicio/>}></Route>
       < Route path="/proyectos" element={<Proyectos />} />
     {/* <Route path="/contacto"element={<Contacto />} /> */}
    </Routes>
  </Router>
  );
  
}
export default App
