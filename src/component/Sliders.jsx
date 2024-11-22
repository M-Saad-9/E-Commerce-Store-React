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
import Carts from "./Carts"
import frame from "../assets/Frame625.png"
import timeImg from "../assets/time.png";



export default function Slider() {
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

      <div className="flex">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation,  Scrollbar, Autoplay, A11y]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        // navigation
        // Pagination
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Carts />
        </SwiperSlide>
        <SwiperSlide>
          <Carts />
        </SwiperSlide>

        <SwiperSlide>
          <Carts />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
     <div className="flex justify-center mt-20">
     <button className="w-56 h-14 bg-[#db4444] rounded
                 font-medium text-white"><a href="../pages/Products.jsx">View All Products</a></button>
     </div>
     </>
    )
}