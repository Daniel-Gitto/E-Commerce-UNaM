import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../Context/DataContext";
import "./Navbar.css";
import logo from "../Navbar/logo/logo2.png";

const Navbar = () => {
  const { cart } = useContext(dataContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calcular la cantidad total de productos en el carrito
  const totalItemsInCart = cart.reduce((acc, product) => acc + product.quantity, 0);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <div className="navbar">
        <div className="nav_logo"> 
        <Link className="Home" to={"/"} ><img src={logo} alt='Misiotronica Logo' className="nav-imag" to></img></Link>
        
        </div>

       

        <div className={`nav_items ${isMenuOpen ? "open" : ""}`}>
       
          <Link className='About' to={"/about"}>Nosotros</Link>
          <Link className='Contact' to={"/contact"}> Contacto</Link>



        </div>

        <div className="nav_toggle" onClick={toggleMenu}>
        
          <span></span>
          <span></span>
          <span></span>
          
        </div>

 
        



       

        
        <Link className="seeCarrito"  to={"/cart"}>
          🛒
          {totalItemsInCart > 0 && (
            <span className="cart-items-total">{totalItemsInCart}</span>
          )}
        </Link>
  </div>
    
  );
};

export default Navbar;



