
import React, { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
  const { data, cart, setCart } = useContext(dataContext);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  const buyProducts = (product) => {
    // Buscar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // Si ya está en el carrito, actualiza su cantidad sumándole 1
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Si no está en el carrito, agrégalo con cantidad inicial de 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Filtrar los productos según el término de búsqueda
  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Actualizamos el término de búsqueda al escribir
          
        />
      </div>
      <div className="product-card-container">
        {filteredProducts.map((product) => {
          // Convierte el precio a formato de separadores de miles y puntos decimales
          const productPrice = product.price.toLocaleString();
          return (
            <div className="card" key={product.id}>
              <img src={product.img} alt="imag-product-card" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h2>${productPrice}</h2>
              <button onClick={() => buyProducts(product)}>Agregar al Carrito</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;




