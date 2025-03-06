import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import "../pages/pages.css";
import bag from "../img/images.jpg";
import shose from "../img/shose.jpg";
import ch from "../img/cham1.jpg";
import ai from "../img/atr.webp";

function Banner() {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    
  }, [])
  return (
    <>
    
    <div className="flex flex-col mb-10 md:my-12">
     <div className='bordershadow flex flex-col justify-center items-center mx-auto my-5 '  >
  <p className='text-lg text-center text-[#371303] px-5 pb-3 font-bold  '> محصولات فروشگاه نهال</p>
      </div>
      <div  data-aos="fade-right" dir="rtl" className=" grid grid-cols-4 md:hidden gap-8  mx-auto my-10 
      bg-white ">
      
        <NavLink to={"/allbag"}  > 
         <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[105px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={80} height={80} src={bag} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        </div>
       </NavLink> 

      
        <NavLink to={"/suitcase"}  > 
         <div data-aos="zoom-out-right" className="   flex flex-col justify-center items-center h-[105px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={80} height={80} src={ch} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        </div>
       </NavLink> 
      
        <NavLink to={"/allshose"}  >
          <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[105px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={80} height={80} src={shose} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        </div>
        </NavLink>
       
       <NavLink to={"/allack"}  > 
       <div data-aos="zoom-out-right" className="   flex flex-col justify-center items-center h-[105px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={80} height={80} src={ai} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div> 
          </div>
       </NavLink>
     
        </div>




       <div  data-aos="fade-right" dir="rtl" className="hidden md:grid  gap-8 md:col-span-2  md:grid-cols-4 lg:hidden  mx-auto my-20 
        md:h-auto bg-white ">
     
        <NavLink to={"/allbag"}  > 
          <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[230px]  mb-5" >       
         <div  className=" flex flex-row justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={150} height={150} src={bag} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        </div>
       </NavLink> 

       
        <NavLink to={"/suitcase"}  >
         <div data-aos="zoom-out-right"  className="   flex flex-col justify-center items-center h-[230px]  mb-5" >       
         <div  className=" flex flex-row justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={150} height={150} src={ch} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        </div>
       </NavLink> 
      
        <NavLink to={"/allshose"}  > 
          <div data-aos="flip-left"  className="   flex flex-col justify-center items-center h-[230px]  mb-5" >       
         <div  className=" flex flex-row justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={150} height={150} src={shose} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div></div>
        </NavLink>
      
       <NavLink to={"/allack"}  >
         <div data-aos="zoom-out-right" className="   flex flex-col justify-center items-center h-[230px]  mb-5" >       
         <div  className=" flex flex-row justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={150} height={150} src={ai} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        </div>
       </NavLink>
      </div>
    



        <div  data-aos="fade-right" dir="rtl" className="hidden lg:grid grid-cols-4 gap-8  mx-auto my-20 
        md:h-auto bg-white ">
      
        <NavLink to={"/allbag"}  > 
 <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[290px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={280} height={220} src={bag} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
         </div>
       </NavLink>     
        <NavLink to={"/suitcase"}  >
   <div data-aos="zoom-out-right"  className="   flex flex-col justify-center items-center h-[290px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={280} height={220} src={ch} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div> 
        </div>
       </NavLink>
       
        <NavLink to={"/allshose"}  > 
         <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[290px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={280} height={220} src={shose} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        </div>
        </NavLink>
       
       <NavLink to={"/allack"}  > 
        <div data-aos="zoom-out-right"  className="   flex flex-col justify-center items-center h-[290px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={280} height={220} src={ai} alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div> 
       </div>
       </NavLink>
     
        </div>
</div>
    </>
  );
}

export default Banner;