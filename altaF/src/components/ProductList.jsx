
import React from 'react';
import Tarjetas from './Tarjetas';
import productos from '../datos/productos.js';
import { Link } from 'react-router-dom';

function ProductList() {
  const productList = productos.map((producto, index) => (
    <Link key={index} to={producto.nombre} className="tarjeta-link">
      <Tarjetas
        image={producto.image}
        title={producto.nombre}
        precio={producto.precio}
      />
    </Link>
  ));

  return <>{productList}</>;
}

export default ProductList;
