import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import productos from './datos/productos.js'
import VistaProducto from './vista/VistaProducto.jsx'
import Perfil from './components/Perfil.jsx'
import Ajustes from './components/Ajustes.jsx'
import Contacto from './components/Contacto.jsx'
import Carrito from './components/Carrito.jsx'
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "perfil",
    element: <Perfil/>,
  },
  {
    path: "ajustes",
    element: <Ajustes/>,
  },
  {
    path: "contacto",
    element: <Contacto />
  },
  {
    path: "carrito",
    element: <Carrito />
  },
];

productos.forEach((producto) => {
  routes.push({
    path: `/${producto.nombre}`,
    element: <VistaProducto producto={producto} />
  });
});


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
