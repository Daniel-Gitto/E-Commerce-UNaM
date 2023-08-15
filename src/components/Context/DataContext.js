import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=> {
        axios("data.json").then((response)=> setData(response.data));
    }, []);
        
    const clearCart = () => {
        setCart([]);
      };

    return <dataContext.Provider value={{data, cart, setCart, clearCart}}>{ children }</dataContext.Provider>;
    

};

export default DataProvider;