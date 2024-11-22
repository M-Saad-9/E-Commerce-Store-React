import axios from "axios";
import Carts from "../component/Carts";
import { useState } from "react";


export default function Products() {
  const API_KEY = 'https://dummyjson.com/products'
   const [products,setProducts] = useState(null)
  
  const getProductData = async () => {
    const response = await axios(API_KEY)
    console.log(response.data.products);
    setProducts(response?.data?.products)
  }
  getProductData()
  
  return (
    <div className="mt-16 ">
      <div id="wrp" className="flex flex-wrap">

      
      {/* {products?.map((item)=> {

      })} */}
      <Carts />
      </div>
    </div>
  )
}
