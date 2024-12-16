import React, { useState } from 'react'
// import service1 from "../assets/Services.png";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useSWR from "swr";

export default function ProductDetails() {
  const param = useParams()
  const { data, error, isLoading } = useSWR(`https://dummyjson.com/products/${param.id}`, axios)
  const [selectImg, setSelectImg] = useState(null);
  console.log(data);
  const productdetail = data?.data
  return (
    <>
    <div className='product min-h-[600px]  flex flex-col md:flex-row gap-5 mt-20'>
      <div className="productimg md:w-[55%] flex gap-3">
        {productdetail?.images?.length > 1 ?
         <div className='w-[150px] h-full  flex flex-col gap-3 '>
          {productdetail?.images.map((img,i) => (
            <img 
            key={i}
            src={img} alt="" 
            className=' w-[500px] bg-[#F5F5F5]'
             onMouseOver={() => setSelectImg(img)} />
          ))}
        </div> : null}
        <div className=''>
          <img src={selectImg || productdetail?.images[0]} alt="" className='w-[500px] bg-[#F5F5F5]' />
        </div>
      </div>
      <div className="productdetail   md:w-[45%] flex flex-col gap-3">
        <h1 className='font-semibold text-black text-[20px]'>{productdetail?.title}</h1>
        <p className='font-normal text-base text-[20px]'>{`$${productdetail?.price}`}</p>
        <p className=' text-[12px]'>{productdetail?.description}</p>
      </div>
    </div>
    
    </>
  )
}
