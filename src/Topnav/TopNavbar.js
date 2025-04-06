import React,{useContext} from 'react';
import "react-toastify/dist/ReactToastify.css";
import NavbarMenuItem from './NavbarMenuItem';
import { RiAdminLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import Collaps from './Collaps';
import Badge from '@mui/material/Badge';
import {CartBuyContext} from '../Shared/Cart-Context';
function TopNavbar() {
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext); 
 return (
  <>
  

<nav dir='rtl' className=' md:sticky top-0 flex justify-between w-[98%] bg-transparent h-[60px]  drop-shadow-lg pt-3  px-1  mx-auto '>
<div dir='ltr' className="w-2/3">
	<form className="flex items-center">   
        <label for="simple-search" className="sr-only">Search</label>
        <div dir='rtl' className="relative w-full ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-10 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" className=" bg-neutral-200 border border-gray-100
             text-gray-900 text-sm rounded-lg
             hover:border-2 hover:border-orange-500 block w-full pl-10 p-2.5" placeholder="جستجو ..." required />
        </div>
        <button  type="submit" class=" flex p-2.5 ml-2 text-sm font-medium text-gray-600 bg-neutral-200 rounded-lg border border-r-red-800-700 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg></button>
    </form>   
</div>
<div className="flex  justify-between pr-4 py-0 h-8 ">
<NavLink to={"/signup"}  style={{display:"flex",textAlign:"center", cursor:"pointer", alignItems:"center",fontWeight:600}}
>
<RiAdminLine className='font-black w-7 h-6 text-zinc-700  hover:text-orange-500 mx-4 ' />
</NavLink>
<Badge color='warning' badgeContent={cartItemsBuy.length} sx={{color:"white"}}>
<NavLink to={"/endbuy"}  style={{display:"flex",textAlign:"center", cursor:"pointer", alignItems:"center",fontWeight:600}}
>
<LuShoppingCart className='font-black w-7 h-6 text-zinc-700 hover:text-orange-500' />
</NavLink>
  </Badge>
</div>
</nav>
   <nav dir='ltr' className='sticky top-0 hidden md:flex   z-20 mt-0 w-screen bg-white h-[70px] mx-auto   '>
   <NavbarMenuItem/>
</nav>
<nav dir="rtl" className= " flex  border-b-red-600 md:hidden w-screen bg-white h-[60px] px-10  justify-between items-center ">
<Collaps/>
</nav>
   </>
 )
}

export default TopNavbar
