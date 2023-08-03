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
        <h1>¡Bienvenidos, a nuestra Web Misiotrónica</h1>
      </div>
      <div className='parrafo'>
        <p>Somos una Tienda apasionada en la Tecnología con experiencia en Ventas y servicios de Insumos Informáticos y Electrónicos. Nuestro principal objetivo es lograr un crecimiento sostenible a lo largo del tiempo. Buscamos aumentar nuestros ingresos y expandir nuestra presencia en el mercado de manera estratégica, manteniendo un enfoque en la rentabilidad y la calidad de nuestros productos/servicios</p>
        <p>Tenemos Experiencia de más de 10 años en el rubro, lo que nos ha permitido desarrollar habilidades sólidas en el Rubro de la Electrónica Brindando la mejor solución y servicio para que adquieran un producto de gran calidad.</p>
        <p>Si tienes alguna pregunta o deseas consultarnos sobre algún producto, no dudes en ponerte en contacto con nosotros.</p>
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
