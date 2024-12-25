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
// import Carts from "./Carts";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import ReactStars from "react-stars";


import useProduct from "../Hooks/useProduct";
import { Link } from "react-router-dom";

function ProductCart(Props) {
  const discountPrice = (
    Props.price -
    Props.discountPercentage * (Props.price / 100)
  ).toFixed(2)
  
  return (
    <Link
    to={`/products/${Props.id} `} 
    className="w-64 " >
    
     {/* <div id="product-cart" className="w-64 relative" > */}
 
       <div  className="bg-[#F5F5F5] ">
 
         <div className="flex justify-between mb-3">
         <div id="discount" className="bg-primary text-white  rounded w-14 h-7 text-center ml-3 mt-3">
         -{Math.round(Props.discountPercentage)}%
         </div>
 
         <div id="icons" className="text-end  mr-3 mt-3 flex flex-col gap-3">
          <div><IoMdHeartEmpty /></div>
        
          <div><FaRegEye /></div>
         </div>
         </div>
         
 
         <div id="product-img" className="flex justify-center items-center w-48 h-48 m-auto mb-6" >
         <img src={Props.productImg} alt="" className="w-44 h-40"/>
         </div>
 
       </div>
 
       <div id="product-detail" className="pl-2" >
       <h1 className="pt-2 pb-2">{Props.productName}</h1>
       <div className=" flex gap-2 sm:gap-3 pt-[6px] sm:pt-2"> 
       <span className="text-red-600 ">${discountPrice}</span>
       <span className="line-through text-gray-500">${Props.price}</span>
       </div>
       {/* <p className="text-red-600 ">${Props.price}</p> */}
       <div  className="pt-1 pb-1 flex text-center items-center gap-2  text-xs">
        <ReactStars
          count={5}
          value={Props.rating}
          size={24}
          // color1={"red"}
          color2={"#FFAD33"}
          edit={true}
        />
        
        <span className=" text-gray-500 font-semibold text-base pt-1">({Props.rating})</span>
     
      </div>
       </div>
      
     {/* </div> */}
     </Link>
   )
}

export default function Slider() {
    const {products, isLoading, error} = useProduct("limit=6&skip=39")
  
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
        spaceBetween={10}
        slidesPerView={2}
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
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3, // Tablet screens
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2, // Mobile screens
            spaceBetween: 20,
          },
          320:{
            slidesPerView: 1.5,
            spaceBetween: 10,
          }
        }}
  
      >


        {products?.slice(0,6).map((item) => (
             <SwiperSlide key={item.id}>
             <>
         <div id="product-container " className="">
         <div className="flex gap-4 justify-center">
             <ProductCart
               id={item.id}
               productImg={item.thumbnail}
               discount={-40}
               productName={item.title}
               price={item.price}
               discountPercentage={item.discountPercentage}
               rating={item.rating}
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