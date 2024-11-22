import Banner from "./component/Banner"
import Navbar from "./component/Navbar"
import Carts from "./component/Carts"
import Slider from "./component/Sliders"
import Hero from "./component/Hero"
import Products from "./pages/Products"

function App() {

  return (
    <>
    <Banner />
    <div className="conatiner-x">
    <Navbar />
    <Hero />
    <Slider />
    {/* <Products /> */}
    </div>
    </>
  )
}

export default App
