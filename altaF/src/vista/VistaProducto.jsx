import React from 'react';
import './VistaProducto.css'; 
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Navigation2 from '../components/Navigation2';

function VistaProducto({ producto }) {
  return (
    <div>  
      <Header />
      <Navigation2 />
      <div className="product-container">
        <div className="product-details">
          <div className="image-section">
            <img className="product-image" src={producto.image} alt={producto.nombre} />
            <div className="thumbnails">
              <img className="thumbnail" src={producto.image} alt="Miniatura" />
              <img className="thumbnail" src={producto.image} alt="Miniatura" />
              <img className="thumbnail" src={producto.image} alt="Miniatura" />
            </div>
          </div>
          <div className="details-section">
            <h2 className="product-name">{producto.nombre}</h2>
            <h3 className="product-price">${producto.precio}</h3>
            <p className="product-description">{producto.descripcion}</p>
            <div className="buttons">
              <button className="add-to-cart-button">Agregar al carrito</button>
              <button className="buy-now-button">Comprar</button>
            </div>
          </div>
        </div>
        <div className="map-container">
          <h1>Ubicación del Producto</h1>
          <img className="map-image" src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22.jpg" alt="Mapa de ubicación" />
        </div>
      </div>
    </div>
  );
}

export default VistaProducto;
