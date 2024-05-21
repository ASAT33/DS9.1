import React from 'react';
import { Link } from 'react-router-dom';
import './Tarjetas.css';

function Tarjetas({ image = "", title = "titulo por defecto", precio = "0.00" }) {
  return (
    <div className="tarjeta">
      <img src={image} alt={title} className="tarjeta-image" /> 
      <div className="tarjeta-content">
        <h2 className="tarjeta-title">{title}</h2>
        <p className="tarjeta-precio">Precio: {precio}</p>
        <Link to={title} className="tarjeta-link">Ver detalles</Link>
      </div>
    </div>
  );
}


export default Tarjetas;

 //<img src={image} alt={title} className="tarjeta-image" /> 