import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation2 from '../components/Navigation2';
import productos from '../datos/productos.js';

function Carrito() {
  const [totalFactura, setTotalFactura] = useState(0);

  const handleCantidadChange = (index, event) => {
    const newProductos = [...productos];
    newProductos[index].cantidad = parseInt(event.target.value);
    const newTotal = newProductos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    setTotalFactura(newTotal);
  };

  const handlePagarClick = () => {
    
    alert('Gracias por tu compra. Pago procesado correctamente.');
  };

  const renderProductos = productos.map((producto, index) => (
    <div key={index} className="producto">
      <div className="imagen">
        <img src={producto.image} alt="Producto" />
      </div>
      <div className="informacion">
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
        <div className="accion">
          Cantidad <input type="number" min="1" defaultValue="1" className="cantidad" onChange={(e) => handleCantidadChange(index, e)} />
          <button className="eliminar">Eliminar</button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <Header />
      <Navigation2 />
      <div className="carrito-container">
        <div className="productos-container">
          <h2>Productos en el carrito:</h2>
          {renderProductos}
        </div>
        <div className="factura-container">
          <h2>Factura:</h2>
          <div className="factura">
            {productos.map((producto, index) => (
              <div key={index} className="item-factura">
                <span>{producto.nombre}</span>
                <span>${producto.precio * (producto.cantidad || 1)}</span>
              </div>
            ))}
            <div className="total-factura">
              <span>Total:</span>
              <span>${totalFactura}</span>
            </div>
            <button onClick={handlePagarClick}>Pagar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
