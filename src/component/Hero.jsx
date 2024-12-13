import frame from "../assets/Frame560.png";

export default function Hero() {
    return(
        <div className="mb-8 pt-5 flex justify-center gap-7">
        <div className="none md:flex height w-64 center p-2 border-right border-black">
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
         <div className="w-full md:width flex items-center ">        
         <div className="bg-black text-white w-full" >
            <img src={frame} alt="" />
         </div>  
    </div>
    </div>
    )
}



//function Hero(){
//     return(
        
//             <LeftSide />
        
//     )
// }

//  ml-2 mr-2 ml:ml-6 ml:mr-6