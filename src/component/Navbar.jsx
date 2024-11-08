import logo from "../assets/logo1.png"
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaUserTie } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";


export default function Navbar(){
    const isLoggedIn = true;

    return (

        <div className="h-20 border-2 flex justify-around items-center">
           <div className="center">
           <img src={logo} alt="" className="w-10 center h-10"/>
           <span className="text-2xl font-bold">Fashion<label className="text-primary">Cart</label></span>
           </div>

           <div className="h-9 w-60 px-2 rounded center bg-[#F5F5F5]">
            <input type="search" 
            placeholder="What are you looking for?"
            className="bg-transparent w-full outline-none text-sm font-bold" />
            <CiSearch className="text-2xl"/>
           </div>

           <div className="center gap-8">

           <ul className="flex gap-3 " >
            <li className="hover:text-red-600 hover:underline">Home</li>
            <li className="hover:text-red-600 hover:underline">About</li>
            <li className="hover:text-red-600 hover:underline">Contact Us</li>

    
            {!isLoggedIn ? <li className="hover:text-red-600 hover:underline">Login</li> : null}
           </ul>

           <div className="flex items-center text-2xl gap-3">
           <IoMdHeartEmpty />
           <FiShoppingCart />

           <div className="w-8 h-8 bg-primary center rounded-full px-2 text-white">
           <FaUserTie className=""/>
           </div>
           </div>
           </div>
        </div>
    )
} 