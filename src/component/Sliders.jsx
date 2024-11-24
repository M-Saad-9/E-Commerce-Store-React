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
import ProductCart from "./Carts";
import productImg1 from "../assets/product-img1.png"
import productImg2 from "../assets/product-img2.png"
import productImg3 from "../assets/product.img3.png"


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
        <>
    <div id="product-container" className="">
<div className="flex gap-4">
        <ProductCart
          productImg={productImg1}
          discount={-40}
          productName={"HAVIT HV-G92 Gamepad"}
          price={120}
        />
        <ProductCart 
          productImg={productImg2}
          discount={-35}
          productName={"AK-900 Wired Keyboard"}
          price={960}
        />
        <ProductCart 
          productImg={productImg3}
          discount={-30}
          productName={"IPS LCD Gaming Monitor"}
          price={370}
        />
      <ProductCart 
          productImg={productImg3}
          discount={-30}
          productName={"IPS LCD Gaming Monitor"}
          price={370}
    />
    </div>
    </div>
    
     </>
        </SwiperSlide>

        <SwiperSlide>
        <>
    <div id="product-container" className="">
<div className="flex gap-4">
        <ProductCart
          productImg={productImg1}
          discount={-40}
          productName={"HAVIT HV-G92 Gamepad"}
          price={120}
        />
        <ProductCart 
          productImg={productImg2}
          discount={-35}
          productName={"AK-900 Wired Keyboard"}
          price={960}
        />
        <ProductCart 
          productImg={productImg3}
          discount={-30}
          productName={"IPS LCD Gaming Monitor"}
          price={370}
        />
      <ProductCart 
          productImg={productImg3}
          discount={-30}
          productName={"IPS LCD Gaming Monitor"}
          price={370}
    />
    </div>
    </div>
    
     </>
        </SwiperSlide>

        <SwiperSlide>
        <>
    <div id="product-container" className="">
<div className="flex gap-4">
        <ProductCart
          productImg={productImg1}
          discount={-40}
          productName={"HAVIT HV-G92 Gamepad"}
          price={120}
        />
        <ProductCart 
          productImg={productImg2}
          discount={-35}
          productName={"AK-900 Wired Keyboard"}
          price={960}
        />
        <ProductCart 
          productImg={productImg3}
          discount={-30}
          productName={"IPS LCD Gaming Monitor"}
          price={370}
        />
      <ProductCart 
          productImg={productImg3}
          discount={-30}
          productName={"IPS LCD Gaming Monitor"}
          price={370}
    />
    </div>
    </div>
    
     </>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
     <div className="flex justify-center mt-20">
     <button className="w-56 h-14 bg-[#db4444] rounded
                 font-medium text-white"><a href="">View All Products</a></button>
     </div>
     </>
    )
}