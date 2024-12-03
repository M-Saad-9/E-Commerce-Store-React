import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
  
    <Banner />
    <div className="conatiner-x">
    <Navbar />
    
    <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/about"  element={<About />} />
    <Route path="/contact"  element={<Contact />} />
    <Route path="/products"  element={<Products />} />
    </Routes>
    </div>
    </>
  )
}

export default App
