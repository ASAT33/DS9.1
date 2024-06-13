import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactForm.css'; 

const ContactForm = ({ fetchContacts, currentContact, setCurrentContact }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  // Efecto para actualizar el formulario cuando se selecciona un contacto para editar
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setSurname(currentContact.surname || '');
      setAge(currentContact.age || '');
      setPhone(currentContact.phone);
    }
  }, [currentContact]);

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentContact) {
        // Actualizar contacto existente
        await axios.patch(`http://localhost:3001/contacts/${currentContact._id}`, {
          name, surname, age, phone
        });
        setCurrentContact(null);
      } else {
        // Crear nuevo contacto
        await axios.post('http://localhost:3001/contacts', { name, surname, age, phone });
      }
      fetchContacts();
      setName('');
      setSurname('');
      setAge('');
      setPhone('');
    } catch (error) {
      console.error('Error saving contact', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Apellido</label>
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
      </div>
      <div>
        <label>Edad</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div>
        <label>Telefono</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <button type="submit">{currentContact ? 'Update Contact' : 'Add Contact'}</button>
    </form>
  );
};

export default ContactForm;
