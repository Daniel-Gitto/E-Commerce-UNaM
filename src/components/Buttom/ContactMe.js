import React, { useState } from 'react';
import "./ContactMe.css";
import Navbar from '../Navbar/Navbar';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };
  return (
    <>
    <Navbar />

    <div className='Contact-form'>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>Nombre:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='lastName'>Apellido:</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Correo:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='message'>Mensaje:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Enviar</button>
      </form>
      </div>
      <div className='social-icon'>
        <a className="social-icon" target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/danii-gitto-88430116a/">
        <BsLinkedin />
        </a>
        <a className="social-icon" target= "_blank" rel="noreferrer"  href="https://github.com/Daniel-Gitto">
          <BsGithub />
        </a>
        <a className="social-icon" target="_blank"  rel="noreferrer" href="https://wa.me/5492634248008/">
          <BsWhatsapp />
        </a>
      </div>
      {/*  Esto es para hacer un boton cuadrado con el nombre del boton 

      <div className='social-buttons'>
        <button className="social-button" onClick={() => windows.open(href="https://www.linkedin.com/in/danii-gitto-88430116a", "_blank")}>
        <i className=" fab fa-linkedin"></i> Linkedin
        <button className='social-button' onClick={() => window.open(href="https://github.com/Daniel-Gitto", "_blank")}>
          <i className="fab fa-github"></i> GitHub
        </button>
        <button className='social-button' onClick={() => window.open(href="https://wa.me/5492634248008/", "_blank")}>
          <i className="fab fa-whatsapp"></i> WhatsApp
        </button>
      </div> */}
    </>
  );
}

export default ContactMe;
