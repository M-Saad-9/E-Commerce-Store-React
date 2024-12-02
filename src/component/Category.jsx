import img from "../assets/Frame623.png"
import cellPhone from "../assets/Category-CellPhone.png"
import Computer from "../assets/Category-Computer.png"
import SmartWatch from "../assets/Category-SmartWatch.png"
import Camera from "../assets/Category-Camera.png"
import Headphone from "../assets/Category-Headphone.png"
import Gamepad from "../assets/Category-Gamepad.png"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
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


function Carts(Props) {
 return (
     <div className="w-44 flex justify-center items-center box border-2">
        <div className="">
        <div className="w-14  m-auto">
        <img src={Props.img} alt="" className="w-full"/>
        </div>
        <div>
        <h1 className="text-center">{Props.name}</h1>
        </div>
        </div>
    </div>
 )
}
function ProductCategory() {
  return(
    <div className="flex gap-3">
    <Carts img={cellPhone} name={"Phone"}/>
    <Carts img={Computer} name={"Computers"}/>
    <Carts img={SmartWatch} name={"SmartWatch"}/>
    <Carts img={Camera} name={"Camera"}/>
    <Carts img={Headphone} name={"HeadPhones"}/>
    <Carts img={Gamepad} name={"Gaming"}/>
    </div>
  )
}

export default function Category() {
  return (
    <div className="mt-16 mb-16">
      <div className="mb-10">
        <img src={img} alt="" />
        <div className="flex gap-20 justify-between">
          <h1 className="font-semibold text-4xl flex items-end">Browse By Category</h1>
          <div className="gap-3 h-14 flex items-end">
            <FaArrowLeft />
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
         navigation
        // 
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      />
      
        <SwiperSlide>
        <ProductCategory />
        </SwiperSlide>
      
        
      
      <Swiper/>
      </div>
    </div>
  )}
 

