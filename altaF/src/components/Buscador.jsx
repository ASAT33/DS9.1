import React, { Component } from 'react'

export default class Buscador extends Component {
  render() {
    return (
        <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
        />
        <button className="search-button">
          Buscar
        </button>
      </div>
    )
  }
}
