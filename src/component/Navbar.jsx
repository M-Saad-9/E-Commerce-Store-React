import { CiSearch } from "react-icons/ci";

export default function Navbar(){
    return (
        <div className="h-20 border-2 flex justify-around items-center">
           <span>logo</span>

           <div className="h-9 w-60 px-2 rounded center bg-[#F5F5F5]">
            <input type="search" 
            placeholder="What are you looking for?"
            className="bg-transparent w-full outline-none text-sm font-bold" />
            <CiSearch className="text-2xl"/>
           </div>
           <ul className="flex gap-3">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
           </ul>
        </div>
    )
} 