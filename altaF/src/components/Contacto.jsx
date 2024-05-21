import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation2 from '../components/Navigation2';

const randomUsers = [
  "Usuario1", "Usuario2", "Usuario3", "Usuario4", "Usuario5", 
  "Usuario6", "Usuario7", "Usuario8", "Usuario9", "Usuario10"
];

function Contacto() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'yo' }]);
      setInput('');

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Respuesta automática', sender: 'otro' },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      <Header />
      <Navigation2 />
      <div className="chat-container">
        <div className="chat-main">
          <div className="messages-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form className="input-container" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Escribe un mensaje..."
              className="input-message"
            />
            <button type="submit" className="send-button">Enviar</button>
          </form>
        </div>
        <div className="chat-sidebar">
          <h2>Chats</h2>
          <ul className="user-list">
            {randomUsers.map((user, index) => (
              <li key={index} className="user-item">{user}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
