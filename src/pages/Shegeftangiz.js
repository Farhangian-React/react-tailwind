import React from "react";
import sh from "../img/sh1.png";
import bg from "../img/bagg.png";
import trbg from "../img/trbag.png";
import ai from "../img/ai.webp";

import { NavLink } from "react-router-dom";
import SlideSHegeftangiz from "../Products/SlideSHegeftangiz";
import "./pages.css";

function Shegeftangiz() {
  return (
    <>


    {/*style={{
          backgroundImage: `url(${orcolor})`,
        }}
      bg-gradient-to-r from-gray-100 via-[#dcc5a7] to-gray-100
      */}

<div className='relative flex mx-auto w-[95%] h-[650px]   '>
        <div className= 'flex flex-col  justify-center bg-indigo-50  w-full h-full mt-6  mx-auto z-2'>
        <SlideSHegeftangiz/> 
</div> 
        <div className='boxx flex flex-col  justify-center  absolute w-full  mx-auto  z-1  '>
        <div  className='bordershadow flex flex-col justify-center items-center mx-auto my-5   '>
<p className='text-[20px] text-center text-[#371303] px-5 pb-1 font-bold  '>   پیشنهاد شگفت انگیز</p></div>
<div dir="rtl" class=" flex flex-row justify-center rounded-md shadow-xs  w-1/2 md:w-3/4 items-center self-center mt-8 mx-auto ">
  <NavLink to={"/about"} ><button type="button" class="ease-out duration-300 transition-all text-black bg-orange-500
   hover:bg-indigo-800 hover:text-white hover:translate-y-2
   font-medium rounded-full text-sm px-2 py-1.5 text-center inline-flex items-center me-5 mb-2">
  <div className="hidden md:flex justify-center rounded-2xl px-2 border-2 border-red-950 ml-2 -mr-4">
<img src={sh} width={30} height={20}/>
</div>
کفش
</button>
   
  </NavLink>
 
  <NavLink to={"/about"} ><button type="button" class="ease-out duration-300 transition-all text-black bg-orange-500
  hover:bg-indigo-800 hover:text-white hover:translate-y-2 font-medium rounded-full text-sm px-2 py-1.5 
  text-center inline-flex items-center   me-5 mb-2">
  <div className="hidden md:flex  justify-center  rounded-2xl px-2 border-2 border-red-950 ml-2 -mr-4">
    
<img src={bg} width={30} height={20}/>
</div>
کیف
</button>
    
  </NavLink> 
  <NavLink to={"/about"} ><button type="button" class="ease-out duration-300 transition-all text-black bg-orange-500
  hover:bg-indigo-800 hover:text-white hover:translate-y-2  font-medium rounded-full text-sm px-2 py-1.5 text-center
   inline-flex items-center  me-5 mb-2">
  <div className="hidden md:flex  justify-center rounded-2xl px-2 border-2 border-red-950 ml-2 -mr-4">
<img src={trbg} width={30} height={20}/>
</div>
چمدان
</button>
  </NavLink>
  <NavLink to={"/about"} ><button type="button" class="ease-out duration-300 transition-all text-black bg-orange-500
   hover:bg-indigo-800 hover:text-white hover:translate-y-2 font-medium rounded-full text-sm px-2 py-1.5 text-center 
   inline-flex items-center  me-5 mb-2">
  <div className="hidden md:flex  justify-center rounded-2xl px-2 border-2 border-red-950 ml-2 -mr-4">
<img src={ai} width={30} height={20}/>
</div>
اکسسوری
</button>
    
  </NavLink>
</div>

        </div>
      </div>
  
 
</>
);
}

export default Shegeftangiz;