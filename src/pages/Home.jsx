import Category from "../component/Category";
import Hero from "../component/Hero";
import SellingProduct from "../component/SellingProduct";
import Slider from "../component/Sliders";
import frame  from "../assets/Frame600.png";
import service1  from "../assets/Services.png";
import service2  from "../assets/Services1.png";
import service3  from "../assets/Services2.png";




export default function Home({darkMode}) {
  return (
   <div className={`transition-colors duration-300 ${darkMode ? "bg-slate-900" : ""}  ${darkMode ? "text-white" : ""}`}>
    <Hero />
    <Slider />
    <hr />
    <Category />
    <hr />
    <SellingProduct />
    <hr />

    <div>
      <img src={frame} alt="" />
    </div>

    <div className="flex justify-center flex-wrap gap-10 mt-10 pb-10">
    <div>
     <div className="flex justify-center">
      <img src={service1} alt="" className="w-20 h-20"/>
     </div>

      <h1 className="text-xl">FREE AND FAST DELIVERY</h1>
      <p className="text-sm text-center">Free delivery for all orders over $140</p>
    </div>
    <div>
    <div className="flex justify-center">
      <img src={service2} alt="" className="w-20 h-20"/>
     </div>
    
      <h1 className="text-xl">24/7 CUSTOMER SERVICE</h1>
      <p className="text-sm text-center">Friendly 24/7 customer support</p>
    </div>
    <div className="">
      <div className="flex justify-center">
      <img src={service3} alt="" className="w-20 h-20"/>
      </div>
      
      <h1 className="text-xl">MONEY BACK GUARANTEE</h1>
      <p className="text-sm text-center">We reurn money within 30 days</p>
    </div>
    </div>
    
    </div>
  )
}

