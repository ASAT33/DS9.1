import { useState } from 'react'; 
import axios from 'axios'; 
/** 
* Componente de formulario para enviar datos al backend. 
*/ 
const Form = () => { 
const [formData, setFormData] = useState({ 
name: '', 
  
    email: '' 
  }); 
  const [message, setMessage] = useState(''); 
 
  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value }); 
  }; 
 
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try { 
      const response = await axios.post('http://localhost:5000/api/form', 
formData); 
      console.log('Form submitted successfully:', response.data); 
      setMessage(response.data.message);  // Actualiza el estado del mensaje con la respuesta del servidor 
    } catch (error) { 
      console.error('Error submitting form:', error); 
      setMessage('Error submitting form');  // Muestra un mensaje de error si ocurre un problema 
    } 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <div> 
      <img src="/Agro-Fast_plain.svg" alt="Logo" className="link-container" />
      <h1>Registro</h1> 
        <label> 
          Nombre:  
          <input type="text" name="name" value={formData.name} 
onChange={handleChange} /> 
        </label> 
      </div> 
      <div> 
        <label> 
          Correo:  
          <input type="email" name="email" value={formData.email} 
onChange={handleChange} /> 
        </label> 
      </div> 
      <button type="submit">Submit</button> 
      {message && <p>{message}</p>}  {/* Muestra el mensaje del servidor */} 
    </form> 
  ); 
}; 
 
export default Form; 