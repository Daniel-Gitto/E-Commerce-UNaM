import React from 'react';
import "./NotFoundPage.css";
const NotFoundPage = () => {
  return (
    <div className='not-found'>
      <div className='title'>
        <h1>404 - Página no encontrada</h1>

      </div>
      <div className="paragraph" > 
        <p>Lo sentimos, la página que estás buscando no existe.</p>
      </div>
      
    </div>
  );
}

export default NotFoundPage;
