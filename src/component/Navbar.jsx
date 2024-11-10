import logo from "../assets/logo1.png"
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaUserTie } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";


export default function Navbar(){
    const isLoggedIn = true;
    const [hamBurger,sethamBurger] = useState(false)

    return (

        <div className="h-20 px-3 border-2 relative flex justify-around items-center">
           <div className="center">
           <img src={logo} alt="" className="w-12 center h-12"/>
           <span className="text-2xl font-bold hidden md:flex">Fashion<label className="text-primary">Cart</label></span>
           </div>

           <div className="h-9 w-32 ml:w-60 px-2 m-4 rounded center bg-[#F5F5F5]">
            <input type="search" 
            placeholder="What are you looking for?"
            className="bg-transparent w-full outline-none text-xs ml:text-sm  font-bold" />
            <CiSearch className="text-2xl"/>
           </div>

           <div className="center gap-8">

           <ul className="hidden md:flex gap-3" >
            <li className="hover:text-red-600 hover:underline">Home</li>
            <li className="hover:text-red-600 hover:underline">About</li>
            <li className="hover:text-red-600 hover:underline">Contact Us</li>

    
            {!isLoggedIn ? <li className="hover:text-red-600 hover:underline">Login</li> : null}
           </ul>

           

           {hamBurger && <ul className="md:hidden absolute bg-gray-200 w-full z-10 gap-3 flex flex-col p-6 top-20 left-0" >
            <li className="hover:text-red-600 hover:underline">Home</li>
            <li className="hover:text-red-600 hover:underline">About</li>
            <li className="hover:text-red-600 hover:underline">Contact Us</li>

    
            {!isLoggedIn ? <li className="hover:text-red-600 hover:underline">Login</li> : null}
           </ul>}

        
           

           <div className="flex items-center text-2xl gap-3">
           <button onClick={() => sethamBurger(!hamBurger)} className=" text-2xl md:hidden order-1">
            {hamBurger ? <IoIosCloseCircleOutline /> :  <GiHamburgerMenu />}
           </button>
            {isLoggedIn ? <>
                <IoMdHeartEmpty className="hidden ml:flex"/>
                <FiShoppingCart />
            </> : null}
           

           <div className="w-8 h-8 bg-primary center rounded-full px-2 text-white">
           <FaUserTie className=""/>
           </div>
           </div>

           </div>
        </div>
    )
} 