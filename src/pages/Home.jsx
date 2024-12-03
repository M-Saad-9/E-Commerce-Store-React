import Category from "../component/Category";
import Hero from "../component/Hero";
import SellingProduct from "../component/SellingProduct";
import Slider from "../component/Sliders";


export default function Home() {
  return (
   <>
    <Hero />
    <Slider />
    <hr />
    <Category />
    <hr />
    <SellingProduct />
    <hr />
    </>
  )
}

