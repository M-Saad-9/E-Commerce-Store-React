import Frame from "../assets/Frame619.png"
import useProduct from "../Hooks/useProduct"
import Carts from "./Carts"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function SellingProduct() {
    const { products, isLoading, error } = useProduct("limit=8&skip=50")

    return (
        <div className="mt-16 mb-16">
            <div className="flex items-end justify-between">
                <div >
                    <img src={Frame} alt="" />
                    <h1 className="font-semibold text-4xl ">Explore Our Products</h1>
                </div>
                <div className="gap-3 h-14 flex items-end">
                    <FaArrowLeft />
                    <FaArrowRight />
                </div>
            </div>
            <div className="  justify-center flex flex-wrap gap-2  xl:gap-7 sm:py-4 md:py-6 lg:py-10  pb-10 sm:pb-12 md:pb-16 lg:pb-24 xl:pb-28">
                {products?.slice(0, 10)?.map((item) => (
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