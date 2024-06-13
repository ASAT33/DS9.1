// src/App.jsx
import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { fetchContacts } from './servicios/contactService';
import './App.css'
const App = () => {
 const [contacts, setContacts] = useState([]);
 const [currentContact, setCurrentContact] = useState(null);
 // Función para obtener los contactos desde el servidor
 const getContacts = async () => {
 const contacts = await fetchContacts();
 setContacts(contacts);
 };
 useEffect(() => {
 getContacts();
 }, []);
 return (
    
 <div>
    <div> <img className="logo" src="src\assets\Agro-Fast_plain.svg"></img></div>
 <h1>Agro-fast Phonebook</h1>
 <ContactForm fetchContacts={getContacts}
currentContact={currentContact} setCurrentContact={setCurrentContact}
/>
 <ContactList contacts={contacts} fetchContacts={getContacts}
setCurrentContact={setCurrentContact} />
 </div>
 );
};
export default App;