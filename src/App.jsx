import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
  
    <Banner />
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
    {/* <div className="conatiner-x"> */}
    
    
    <Routes>
    <Route path="/"  element={<Home darkMode={darkMode}/>} />
    <Route path="/about"  element={<About />} />
    <Route path="/contact"  element={<Contact darkMode={darkMode}/>} />
    <Route path="/login"  element={<Login darkMode={darkMode}/>} />
    <Route path="/signup"  element={<Signup darkMode={darkMode}/>} />
    <Route path="/products"  element={<Products darkMode={darkMode} />} />
    <Route path="/products/:id"  element={<ProductDetails darkMode={darkMode}/>} />
    </Routes>
    {/* </div> */}
    <Footer />
    </>
  )
}

export default App
