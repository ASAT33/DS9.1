import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import Carrousel from './components/Carrousel';
import Buscador from './components/Buscador';
import './App.css';
import Navigation2 from './components/Navigation2';

function App() {


  return (
    <div className="App">
      <Header />
      <Navigation2 />
      <main className="main-container">
        <div className="carrousel-container">
          <Carrousel />
        </div>
        <div className="search-bar-container">
          <Buscador/>
        </div>
        <div className="product-list-container">
          <ProductList />
        </div>
      </main>
    </div>
  );
}

export default App;


