import Frame from "../assets/Frame620.png"
import useProduct from "../Hooks/useProduct"
import Carts from "./Carts"

export default function SellingProduct() {
  const {products, isLoading, error} = useProduct("limit=5&skip=80")

  return (
    <div className="mt-16 mb-16">
        <div className="flex items-end justify-between">
            <div >
                <img src={Frame} alt="" />
                <h1 className="font-semibold text-4xl ">Best Selling Products</h1>
            </div>
            <div className="bg-[#db4444] p-2 text-white font-medium rounded w-40 h-14 flex items-center justify-center">
            <a  href="">View All</a>
            </div>
        </div>
        {/* flex gap-5 flex-wrap lg:flex-nowrap justify-center mt-12 */}
        <div className=" flex gap-5 flex-wrap lg:flex-nowrap justify-center mt-12">
        {products?.slice(0, 4)?.map((item) => (
          <Carts
          id={item.id}
          key={item.id}
          productImg={item.thumbnail}
          discount={-40}
          productName={item.title}
          price={item.price}
            discountPercentage={item.discountPercentage}
            // rating={item.rating}
          />
        ))}
        </div>
    </div>
  )
}
