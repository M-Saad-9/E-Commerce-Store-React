import axios from "axios";
import { useEffect, useState } from "react";
import ProductCart from "../component/Carts";


export default function Products() {
  const API_KEY = 'https://dummyjson.com/products'
   const [products,setProducts] = useState([])
  
  const getProductData = async () => {
    const response = await axios(API_KEY)
    console.log(response.data.products);
    setProducts(response?.data?.products)
  }


  useEffect(() => {
    getProductData()
  },[])

  const [searchTerm, setSearchTerm] = useState("")
  console.log(searchTerm);
  
  const searchProduct = () => {
    const result = products?.filter((item)=>{
      return item.title.toLowerCase().includes(searchTerm)
    })
    return result || [];
  }
  const searchResult = searchProduct()
  
  return (
    <div className="mt-16">

      <input
        type="search"
        name="price"
        id="price"
        onChange={(event) => {
          setSearchTerm(event.target.value?.toLowerCase())
        }}
        className="block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm/6"
        placeholder="Enter Your product Name"
      />
      <div className="flex flex-wrap justify-center gap-12">
        {searchResult?.map((item) => (
           <ProductCart 
           key={item.id}
           productImg={item.thumbnail}
           productName={item.title}
           price={item.price}   
           />
        ))}
       </div>
     </div>
  )
}
