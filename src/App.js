
import Home from "./components/Home/Home";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import AboutMe from "./components/Buttom/AboutMe";
import ContactMe from "./components/Buttom/ContactMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage.js"; 
 


function App() {
  return  (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path="/cart" element={<CartContent />}/>
          <Route path='/about' element={<AboutMe />}/>
          <Route path='/contact' element={<ContactMe />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
     
   
  );

}

export default App;
