import React from 'react';
import { Link } from 'react-router-dom';
import "./AboutMe.css"
import Navbar from '../Navbar/Navbar';


function AboutMe() {
  return (
    <>
    <Navbar />
    <div className="aboutme">

      <div className="about-title">
        <h1>"Misiotrónica: Tecnología de Excelencia"</h1>
      </div>
      <div className='parrafo'>
        <p>"Somos una apasionada tienda especializada en tecnología, con una sólida experiencia en ventas y servicios de insumos informáticos y electrónicos. Nuestro principal objetivo es lograr un crecimiento sostenible a lo largo del tiempo, buscando aumentar nuestros ingresos y expandir nuestra presencia en el mercado de manera estratégica, manteniendo siempre un enfoque en la rentabilidad y la calidad de nuestros productos y servicios.</p>
        <p>Contamos con más de una década de experiencia en el rubro, lo que nos ha permitido desarrollar habilidades sólidas en el campo de la electrónica, brindando soluciones y servicios de primera calidad. Nuestro compromiso es asegurar que nuestros clientes adquieran productos de excelencia, adaptados a sus necesidades y deseos.</p>
        <p>Estamos aquí para ayudarte en cualquier consulta o duda que puedas tener sobre nuestros productos. No dudes en ponerte en contacto con nosotros para obtener más información o asesoramiento personalizado.</p>
        <p>Gracias por considerarnos como tu proveedor de confianza en el mundo de la tecnología. Esperamos poder brindarte una experiencia excepcional en cada interacción que tengas con nuestra tienda."</p>
      </div>

    </div>

    <div className='contact-container'>
      <Link to="/contact">

      <button className='contact-button'>Contacto</button>

      </Link>
    </div>
      </>
  );
}

export default AboutMe;
