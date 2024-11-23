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
  
  return (
    <div className="mt-16 flex flex-wrap gap-6 justify-between">

        {products?.map((item) => (
           <ProductCart 
           key={item.id}
           productImg={item.thumbnail}
           productName={item.title}
           price={item.price}   
           />
        ))}
     </div>
  )
}
