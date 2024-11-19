import frame from "../assets/Frame560.png";

function LeftSide() {
    return(
        <div className="hidden md:flex height w-64 center p-2 border-r-2 border-black">
            <ul className="flex flex-col gap-3">
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>
        </div>
    )
}

function RightSide() {
    return(
        <div className="height width flex items-center">        
             <div className="border-2  bg-black text-white w-full" >
                <img src={frame} alt="" />
                {/* <div className="text-5xl">
                <h1>Up to 10% </h1>
                <h1>off Voucher</h1>
                </div> */}
             </div>  
        </div>
    )
}



export default function Hero(){
    return(
        <div className="mb-8 flex gap-3 justify-around mt-5 ml-6 mr-6">
            <LeftSide />
            <RightSide />
        </div>
    )
}