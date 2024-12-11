import { Swiper, SwiperSlide } from "swiper/react";
import { 
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import frame from "../assets/Frame625.png"
import timeImg from "../assets/time.png";
import Carts from "./Carts";


import useProduct from "../Hooks/useProduct";
import { Link } from "react-router-dom";


export default function Slider() {
    const {products, isLoading, error} = useProduct("limit=5&skip=39")
  
    return (
      <>
    <div className="mt-16">
      <div className="mb-10">
        <img src={frame} alt="" />
        <div className="flex gap-20">
          <h1 className="font-semibold text-4xl flex items-end">Flash Sales</h1>
          <div className="w-80 h-14">
          <img src={timeImg} alt="" />
          </div>
        </div>
      </div>
      {isLoading ? <div className="text-primary text-center">Loading...</div> : ""}
      <div className="text-primary text-center">{error}</div>
      <div className="flex">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Scrollbar, Autoplay, A11y]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        // navigation
        // Pagination,
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          1024: {
            slidesPerView: 4, // Large screens
          },
          768: {
            slidesPerView: 3, // Tablet screens
          },
          480: {
            slidesPerView: 2, // Mobile screens
          },
        }}
  
      >


        {products?.slice(0,5).map((item) => (
             <SwiperSlide key={item.id}>
             <>
         <div id="product-container" className="">
         <div className="flex gap-4 justify-center">
             <Carts
               productImg={item.thumbnail}
               discount={-40}
               productName={item.title}
               price={item.price}
             />
         </div>
         </div>
         
          </>
             </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>

     <div className="flex justify-center mt-10 mb-16">
      {/* <div className="w-56 h-14 bg-[#db4444] rounded
                 font-medium text-white"> */}
        <Link to="/products" 
        className="font-medium rounded bg-primary center text-white h-14 w-56 mx-auto my-16">
          View All Products
        </Link>
      </div>
     {/* </div> */}
     </>
    )
}