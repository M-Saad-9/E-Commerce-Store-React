import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <>
  
    <Banner />
    <div className="conatiner-x">
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
    
    <Routes>
    <Route path="/"  element={<Home darkMode={darkMode}/>} />
    <Route path="/about"  element={<About />} />
    <Route path="/contact"  element={<Contact />} />
    <Route path="/products"  element={<Products darkMode={darkMode} />} />
    </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
