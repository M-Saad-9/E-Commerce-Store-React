import Frame from "../assets/Frame620.png"
import useProduct from "../Hooks/useProduct"
import Carts from "./Carts"
import { Link } from "react-router-dom";

export default function SellingProduct() {
  const { products, isLoading, error } = useProduct("limit=5&skip=80")

  return (
    <div className="mt-16 mb-16">
      <div className="flex items-end justify-between">
        <div >
          <img src={Frame} alt="" />
          <h1 className="font-semibold text-4xl ">Best Selling Products</h1>
        </div>
        <div className="bg-[#db4444] p-2 text-white font-medium rounded w-40 h-14 flex items-center justify-center">
          <Link to="/products" >View All</Link>
        </div>
      </div>

      <div className=" flex flex-wrap gap-2  xl:gap-7 sm:py-4 md:py-6 lg:py-10  pb-10 sm:pb-12 md:pb-16 lg:pb-24 xl:pb-28">
        {products?.slice(0, 4)?.map((item) => (
          <Carts
            id={item.id}
            key={item.id}
            productImg={item.thumbnail}
            discount={-40}
            productName={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  )
}
