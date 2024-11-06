import productImg1 from "../assets/product-img1.png"
import productImg2 from "../assets/product-img2.png"
import productImg3 from "../assets/product.img3.png"
import starImg from "../assets/Frame.png"

function ProductCart(Props) {
  return (
    <div id="product-container">
     <div id="product-cart" className="w-64 border-2 relative" >
 
       <div  className="bg-[#F5F5F5] ">
 
         <div className="flex justify-between mb-3">
         <div id="discount" className="bg-red-700 text-white  rounded w-14 h-7 text-center ml-3 mt-3">
           {Props.discount}%
         </div>
 
         {/* <div id="icons" className="text-end  mr-3 mt-3">
           hh
         </div> */}
         </div>
         
 
         <div id="product-img" className="flex justify-center items-center w-48 h-48 m-auto mb-6" >
         <img src={Props.productImg} alt="" className="w-44 h-40"/>
         </div>
 
       </div>
 
       <div id="product-detail" >
       <h1 className="pt-2 pb-2">{Props.productName}</h1>
       <p className="text-red-600 ">${Props.price}</p>
       <img src={starImg} alt="" className="pt-1 pb-1"/>
       </div>
      
       
     </div>
 
    </div>
   )
}

export default function Carts() {
  return(
    <div className="p-3 flex gap-4">
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
    </div>
  )
}

// relative

// 