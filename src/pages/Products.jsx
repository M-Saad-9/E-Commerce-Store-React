
import { useState } from "react";
import Carts from "../component/Carts";
import useProduct from "../Hooks/useProduct";


export default function Products({darkMode}) {
  const {products, isLoading, error} = useProduct()

  const [searchTerm, setSearchTerm] = useState("")
  // console.log(searchTerm);
  
  const searchProduct = () => {
    const result = products?.filter((item)=>{
      return item.title.toLowerCase().includes(searchTerm)
    })
    return result || [];
  }
  const searchResult = searchProduct()
  
  return (
    <div className={`conatiner-x product transition-colors duration-300 ${darkMode ? "bg-slate-900" : ""}  ${darkMode ? "text-white" : ""} `}>

      <div className="py-8 pb-5">
      <input
        type="search"
        name="price"
        id="price"
        onChange={(event) => {
          setSearchTerm(event.target.value?.toLowerCase())
        }}
        className="block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm/6"
        placeholder="Enter Your product Name"
      />
      </div>
      

      {products === null ? "Loading...." : null}
     {isLoading ? <div className="text-primary text-center">Loading...</div> : ""}
     <div className="text-primary text-center">{error}</div>

      <div className=" flex flex-wrap gap-2  xl:gap-7 sm:py-4 md:py-6 lg:py-10  pb-10 sm:pb-12 md:pb-16 lg:pb-24 xl:pb-28">
             {searchResult?.map((item) => (
               <Carts
               key={item.id}
               id={item.id}
               productImg={item.thumbnail}
               productName={item.title}
               price={item.price}   
               discountPercentage={item.discountPercentage}
               rating={item.rating}
               />
             ))}
           </div>

      {/* <div className="flex flex-wrap gap-2  xl:gap-7 sm:py-4 md:py-6 lg:py-10  pb-10 sm:pb-12 md:pb-16 lg:pb-24 xl:pb-28">
        {searchResult?.map((item) => (
           <div className=" h-auto flex-shrink-0 ">
            <ProductCart 
           key={item.id}
           id={item.id}
           productImg={item.thumbnail}
           productName={item.title}
           price={item.price}   
           discountPercentage={item.discountPercentage}
           rating={item.rating}
           />
         </div>
       ))}
       </div> */}
     </div>
  )
}
