
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

export default function ProductCart(Props) {

  const discountPrice = (
    Props.price -
    Props.discountPercentage * (Props.price / 100)
  ).toFixed(2)
  
  return (
    <Link
    to={`/products/${Props.id} `} 
    className=" group w-[calc(50%-8px)] sm:w-[calc(32%)] lg:w-[calc(25%-10px)] xl:w-[calc(25%-28px)] h-auto mt-5 rounded mx-auto " >
    
     {/* <div id="product-cart" className="w-64 relative" > */}
 
       <div  className="bg-[#F5F5F5] w-full">
 
         <div className="flex justify-between">
         <div id="discount" className="bg-primary text-white  rounded w-14 h-7 text-center ml-3 mt-3">
           -{Math.round(Props.discountPercentage)}%
         </div>
 
         <div id="icons" className="text-end  mr-3 mt-3 flex flex-col gap-3">
          <div><IoMdHeartEmpty /></div>
        
          <div><FaRegEye /></div>
         </div>
         </div>
         
 
         <div id="product-img" className="flex justify-center items-center w-full m-auto mb-6 min-h-[147px] sm:min-h-[170px] md:min-h-[180px] lg:min-h-[190px] xl:min-h-[230px]" >
         <img src={Props.productImg} alt="" className="w-44 h-40 group-hover:scale-110 transition-all duration-300"/>
         </div>
 
       </div>
 
       <div id="product-detail" className="pl-2" >
       <h1 className="pt-2 pb-2 font-normal  sm:font-medium text-sm sm:text-base text-start">{Props.productName}</h1>
       <div className=" flex gap-2 sm:gap-3 pt-[6px] sm:pt-2"> 
       <span className="text-red-600  text-sm sm:text-base font-medium">${discountPrice}</span>
       <span className="line-through text-gray-500 text-sm sm:text-base font-medium">${Props.price}</span>
       </div>
       
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