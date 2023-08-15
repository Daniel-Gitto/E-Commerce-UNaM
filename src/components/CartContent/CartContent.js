import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import "./CartContent.css";
import Navbar from '../Navbar/Navbar';
const CartContent = () => {
  const {cart} = useContext(dataContext);
  return cart.length > 0 ? (
    <>
    <Navbar />
    <CartElements/>
    <CartTotal/>
    </> 
  ): (
    <>
    <Navbar />
    <h2 className="cart-message-center">Tu Carrito está Vacío</h2>
    </>
  );
};

export default CartContent;