import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation2 from '../components/Navigation2';

function Ajustes() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [idioma, setIdioma] = useState('Español');
  const [notificaciones, setNotificaciones] = useState(true);

  const handleNombreUsuarioChange = (event) => {
    setNombreUsuario(event.target.value);
  };

  const handleIdiomaChange = (event) => {
    setIdioma(event.target.value);
  };

  const handleNotificacionesChange = () => {
    setNotificaciones(!notificaciones);
  };

  return (
    <div>
      <Header />
      <Navigation2 />
      <div className="main-container">
        <h1>Ajustes</h1>
        <div className="ajustes-container">
          <div className="ajuste-item">
            <label>Sugerencias:</label>
            <input type="text" value={nombreUsuario} onChange={handleNombreUsuarioChange} />
          </div>
          <div className="ajuste-item">
            <label>Idioma:</label>
            <select value={idioma} onChange={handleIdiomaChange}>
              <option value="Español">Español</option>
              <option value="Inglés">Inglés</option>
              <option value="Francés">Francés</option>
            </select>
          </div>
          <div className="ajuste-item">
            <label>Notificaciones:</label>
            <input type="checkbox" checked={notificaciones} onChange={handleNotificacionesChange} />
          </div>
          <button className="ajuste-button">Guardar cambios</button>
        </div>
      </div>
    </div>
  );
}

export default Ajustes;
