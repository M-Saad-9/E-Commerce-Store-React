import React, { useState } from 'react'
// import service1 from "../assets/Services.png";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useSWR from "swr";
import { IoMdHeartEmpty } from "react-icons/io";

export default function ProductDetails() {
  const param = useParams()
  const { data, error, isLoading } = useSWR(`https://dummyjson.com/products/${param.id}`, axios)
  const [selectImg, setSelectImg] = useState(null);
  const [quantity, setQuantity] = useState(1)
  console.log(data);
  const productdetail = data?.data
  return (
    <>
      <div className='product  flex flex-col md:flex-row gap-5 mt-20 mb-20 justify-center'>
        <div className="productimg md:w-[55%] flex gap-3">
          {productdetail?.images?.length > 1 ?
            <div className='w-[150px] h-full  flex flex-col gap-3 '>
              {productdetail?.images.map((img, i) => (
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
          <div className='flex gap-2'>
            <p>({productdetail?.rating} Reviews)</p>
            <p class="text-gray-700 ml-2">|</p>
            <p>{productdetail?.stock ?
              <span className='text-[#00FF66]'>In Stock </span>
              : <span className='text-red-600'>Out of Stock </span>}</p>
          </div>
          <p className='font-normal text-base text-[24px] text-primary'>{`$${productdetail?.price * quantity || 0}`}</p>
          <p className='  text-xs'>{productdetail?.description}</p>

          <hr />

          <div className='flex gap-3 items-center mt-4 lg:mt-5'>
            <div className='w-32 sm:w-40 md:w-32 lg:w-40 h-10 sm:h-11 md:h-10 lg:h-11 border border-gray-400 rounded flex '>
              <button className=' w-[40%] text-3xl border-r border-r-gray-400'
                onClick={() => {
                  if (quantity <= 1) return;
                  setQuantity(quantity - 1)
                }}>-</button>
              <p className=" w-[50%] text-center text-xl font-medium pt-2">{quantity}</p>
              <button class="w-[40%] bg-primary text-3xl text-white"
                onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button class="w-32 sm:w-44 md:w-32 lg:w-44 h-10 sm:h-11 md:h-10 lg:h-11 bg-primary rounded text-white">Buy Now</button>
            <IoMdHeartEmpty className="text-3xl hover:text-primary"/>
          </div>

        </div>
      </div>

    </>
  )
}
