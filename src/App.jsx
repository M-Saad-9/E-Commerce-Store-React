import Banner from "./component/Banner"
import Navbar from "./component/Navbar"
// import Carts from "./component/Carts"
import Slider from "./component/Sliders"
import Hero from "./component/Hero"
import Products from "./pages/Products"
import Category from "./component/Category"
import Home from "./pages/Home"
import About from "./pages/About";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
    <Banner />
    <div className="conatiner-x">
    <Navbar />
    <Home />
    <Products />
    <Routes>
    <Route path="/" index element={<Home />} />
    <Route path="/about" index element={<About />} />
    {/* <Route path="/contact" index element={<Home />} /> */}
    </Routes>
    </div>
    </>
  )
}

export default App
