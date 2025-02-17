import React from "react";
import bag1 from "../img/images.jpg";
import bag2 from "../img/cham.webp";
import bag3 from "../img/shose.jpg";
import bag4 from "../img/atr2.webp";
import orcolor from "../img/vecteezy_abstract-gradient-background-with-wavy-lines_51138763.jpg";
import { NavLink } from "react-router-dom";
import "../pages/pages.css";

function Banner() {
  return (
    <>
    
    <div className="flex flex-col mt-5">
     <div className='bordershadow flex flex-col justify-center items-center mx-auto my-5 '  >
  <p className='text-[20px] text-center text-[#371303] px-5 pb-3 font-bold  '> محصولات فروشگاه نهال</p>
      </div>
       <div dir="rtl" className="grid grid-cols-1 gap-8 md:col-span-4 sm:grid-cols-2 md:grid-cols-4 w-4/5 md:w-4/5 mx-auto my-20 
        md:h-[400px] bg-white ">
       <div className=" flex flex-col justify-center items-center h-[360px] mb-5" >       
         <div  className=" flex flex-row md:flex-col justify-center items-center h-full bg-cover bg-center 
          bg-no-repeat"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  ",backgroundImage: `url(${orcolor})`}}    >
          <img width={250} height={150} src={bag1} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/about"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">کیف ها</p>
       </NavLink> </div>

        <div className=" flex flex-col justify-center items-center h-[360px] mb-5">       
        <div  className=" flex flex-row md:flex-col justify-center items-center h-full bg-cover bg-center 
          bg-no-repeat"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  ",backgroundImage: `url(${orcolor})`}}    >
          <img width={250} height={160} src={bag2} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/about"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">چمدان ها</p>
       </NavLink> </div>
        <div className=" flex flex-col justify-center items-center h-[360px] mb-5">       
        <div  className=" flex flex-row md:flex-col justify-center items-center h-full bg-cover bg-center 
          bg-no-repeat"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  ",backgroundImage: `url(${orcolor})`}}    >
          <img width={250} height={160} src={bag3} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/about"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">کفش ها</p>
        </NavLink></div>
        <div className=" flex flex-col justify-center items-center h-[360px] mb-5">       
        <div  className=" flex flex-row md:flex-col justify-center items-center h-full bg-cover bg-center 
          bg-no-repeat"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  ",backgroundImage: `url(${orcolor})`}}    >
          <img width={250} height={160} src={bag4} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
       <NavLink to={"/about"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">اکسسوری ها</p></NavLink>
        </div>
        
      </div>
</div>
    </>
  );
}

export default Banner;