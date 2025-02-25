import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import "../pages/pages.css";

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
    
    <div className="flex flex-col my-12">
     <div className='bordershadow flex flex-col justify-center items-center mx-auto my-5 '  >
  <p className='text-[20px] text-center text-[#371303] px-5 pb-3 font-bold  '> محصولات فروشگاه نهال</p>
      </div>
      <div  data-aos="fade-right" dir="rtl" className=" grid grid-cols-4 md:hidden gap-8  mx-auto my-10 
      bg-white ">
       <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[130px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdRRnIXTsawD_0UkCHXvz9uyq2Osm1MwQpQ&s" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/allbag"}  > <p className="text-sm hover:text-[#281e5d] text-[#ba4008] md:py-2 font-bold">کیف </p>
       </NavLink> </div>

        <div data-aos="zoom-out-right" className="   flex flex-col justify-center items-center h-[130px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={80} height={80} src="https://img.clipart-library.com/2/clip-suitcases/clip-suitcases-18.jpg" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/suitcase"}  > <p className="text-sm hover:text-[#281e5d] text-[#ba4008] md:py-2 font-bold">چمدان </p>
       </NavLink> </div>
        <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[130px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={80} height={80} src="https://static.vecteezy.com/system/resources/previews/021/919/917/non_2x/women-s-shoes-with-heels-wedding-accessory-in-cartoon-style-illustration-isolated-on-white-vector.jpg" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/allshose"}  > <p className="text-sm hover:text-[#281e5d] text-[#ba4008] md:py-2 font-bold">کفش </p>
        </NavLink></div>
        <div data-aos="zoom-out-right" className="   flex flex-col justify-center items-center h-[130px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjEEHriFlzX0c2DFUWOWITHZKJzFZWt6ybg&s" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
       <NavLink to={"/allack"}  > <p className="text-sm hover:text-[#281e5d] text-[#ba4008] md:py-2 font-bold">اکسسوری </p></NavLink>
        </div>
        </div>




       <div  data-aos="fade-right" dir="rtl" className="hidden md:grid  gap-8 md:col-span-2  md:grid-cols-4 lg:hidden  mx-auto my-20 
        md:h-auto bg-white ">
       <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[230px]  mb-5" >       
         <div  className=" flex flex-row justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={150} height={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdRRnIXTsawD_0UkCHXvz9uyq2Osm1MwQpQ&s" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/allbag"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">کیف ها</p>
       </NavLink> </div>

        <div data-aos="zoom-out-right"  className="   flex flex-col justify-center items-center h-[230px]  mb-5" >       
         <div  className=" flex flex-row justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={150} height={150} src="https://img.clipart-library.com/2/clip-suitcases/clip-suitcases-18.jpg" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/suitcase"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">چمدان ها</p>
       </NavLink> </div>
        <div data-aos="flip-left"  className="   flex flex-col justify-center items-center h-[230px]  mb-5" >       
         <div  className=" flex flex-row justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={150} height={150} src="https://static.vecteezy.com/system/resources/previews/021/919/917/non_2x/women-s-shoes-with-heels-wedding-accessory-in-cartoon-style-illustration-isolated-on-white-vector.jpg" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/allshose"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">کفش ها</p>
        </NavLink></div>
        <div data-aos="zoom-out-right" className="   flex flex-col justify-center items-center h-[230px]  mb-5" >       
         <div  className=" flex flex-row justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={150} height={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjEEHriFlzX0c2DFUWOWITHZKJzFZWt6ybg&s" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
       <NavLink to={"/allack"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">اکسسوری ها</p></NavLink>
        </div>
        
      </div>
    



        <div  data-aos="fade-right" dir="rtl" className="hidden lg:grid grid-cols-4 gap-8  mx-auto my-20 
        md:h-auto bg-white ">
       <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[290px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={280} height={220} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdRRnIXTsawD_0UkCHXvz9uyq2Osm1MwQpQ&s" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/allbag"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">کیف ها</p>
       </NavLink> </div>

        <div data-aos="zoom-out-right"  className="   flex flex-col justify-center items-center h-[290px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={280} height={220} src="https://img.clipart-library.com/2/clip-suitcases/clip-suitcases-18.jpg" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/suitcase"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">چمدان ها</p>
       </NavLink> </div>
        <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[290px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={280} height={220} src="https://static.vecteezy.com/system/resources/previews/021/919/917/non_2x/women-s-shoes-with-heels-wedding-accessory-in-cartoon-style-illustration-isolated-on-white-vector.jpg" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        <NavLink to={"/allshose"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">کفش ها</p>
        </NavLink></div>
        <div data-aos="zoom-out-right"  className="   flex flex-col justify-center items-center h-[290px] mb-5" >       
         <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={280} height={220} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjEEHriFlzX0c2DFUWOWITHZKJzFZWt6ybg&s" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
       <NavLink to={"/allack"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">اکسسوری ها</p></NavLink>
        </div>
        </div>
</div>
    </>
  );
}

export default Banner;