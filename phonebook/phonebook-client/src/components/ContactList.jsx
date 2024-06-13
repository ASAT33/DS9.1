import React from 'react';
import axios from 'axios';
import './ContactList.css'

const ContactList = ({ contacts, fetchContacts, setCurrentContact }) => {
  // Manejar la eliminación de un contacto
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact', error);
    }
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact._id}>
          {contact.name} {contact.surname} - {contact.age} years - {contact.phone}
          <button className="button" onClick={() => setCurrentContact(contact)}>Edit</button>
          <button className="button" onClick={() => handleDelete(contact._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

