import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
  const { cart, clearCart } = useContext(dataContext);

  // Calcular el total teniendo en cuenta la cantidad de cada producto
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // Convertir el total a formato de separadores de miles y puntos decimales
  const priceTotal = total.toLocaleString();
  const handlePay = () => {
    
    alert(`Pagando total: $${priceTotal}`);
    clearCart(); //Limpia el carrito cuando se paga el producto
  };

  return ( 
    <div className="cartTotal">
      <h3>Total a Pagar: ${priceTotal}</h3>
      <button onClick={handlePay}>Pagar</button>
    </div>
  );
};

export default CartTotal;
