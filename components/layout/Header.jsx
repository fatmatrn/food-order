import { useState } from "react"
import Logo from "../ui/Logo"
import {FaUserAlt,FaShoppingCart,FaSearch}  from "react-icons/fa"

import Search from "../ui/Search";

//h-full:height=100%
const Header = () => {
  const [isSearchModal, setisSearchModal] = useState(false)
  return (
    <div className="h-[5.5rem] bg-secondary">
        <div className="container text-white mx-auto flex justify-between
        items-center h-full">
           <Logo/>
        <nav>
        <ul className="flex gap-x-2">
              <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer" >
                <a  href="#">Home </a>
              </li>
              <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer" >
                <a  href="#">Menu</a>
              </li>
              <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer" >
                <a  href="#">About</a>
              </li>
              <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer" np>
                <a  href="#">Book Table</a>
              </li>
            </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
        <a href="#"><FaUserAlt className="hover:text-primary transition-all"/></a>
        <a href="#"><FaShoppingCart className="hover:text-primary  transition-all"/></a>
        <button onClick={()=>setisSearchModal(true)}><FaSearch className="hover:text-primary  transition-all"/></button>  
        <a href="#" className=""><button className="btn-primary">Order Online</button></a>
        </div>
       
    </div>
   {
    isSearchModal && 
   <Search setisSearchModal={setisSearchModal}/>
   }
    </div>
  )
}

export default Header