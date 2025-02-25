
import lego from "../img/bag.png";
import {NavLink} from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import "./pages.css"
import {

  List,
  
} from "@material-tailwind/react";
function Footer() {
  return (
    <>
      <div className="bg-white p-2 text-center rounded-2xl border-t-2 border-gray-200">
    
<footer class="bg-white">
  <div dir="lrt" class="max-w-screen-xl px-2 py-16 mx-auto sm:px-4 lg:px-6">
      <div dir="rtl" class="hidden md:grid gap-8 md:grid-cols-2  xl:grid-cols-4 items-start mx-2 ">
        <div className="flex flex-col justify-start">
          <p class="font-medium text-center py-3">
            NAHAL SHOPE
          </p> 
           <div className="button2 flex flex-col justify-start items-center sm:items-start
          bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100 rounded-md h-[200px] xl:h-[250px] px-4">
        
          <nav class=" formbutton2 flex flex-col mt-4 space-y-2 text-sm text-gray-700 text-center sm:text-right h-full w-full ">
            <a class="hover:text-[#ba4008]" href> درباره ی ما </a>
            <a class="hover:text-[#ba4008]" href>   تاریخچه ی برند </a>
            <a class="hover:text-[#ba4008]" href> تماس با ما </a>
            <a class="hover:text-[#ba4008]" href> نحوه ی ارسال </a>
          </nav>
        </div>
          </div>
          <div className="flex flex-col justify-start">
          <p class="font-medium text-center py-3"> پرفروش ترین ها
          </p>
          <div className="button2 flex flex-col justify-start items-center sm:items-start
          bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100 rounded-md h-[200px] xl:h-[250px] px-4">   
          <nav class="formbutton2 flex flex-col mt-4 space-y-2 text-sm text-gray-700 text-center sm:text-right h-full w-full ">
            <NavLink to={"/allbag"} class="hover:text-[#ba4008]" > همه ی کیف ها  </NavLink>
            <NavLink to={"/allshose"} class="hover:text-[#ba4008]" > کفش ها  </NavLink>
            <NavLink to={"/allack"} class="hover:text-[#ba4008]" > اکسسوری  </NavLink>
            <NavLink to={"/suitcase"}class="hover:text-[#ba4008]" > چمدان و ساک </NavLink>
          </nav>
        </div>
        </div>
        <div className="flex flex-col justify-start">
          <p class="font-medium text-center py-3"> مطالب وبلاگ
          </p>
          <div className="button2 flex flex-col justify-start items-center sm:items-start
          bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100 rounded-md h-[200px] xl:h-[250px] px-4"> 
          <nav class="formbutton2 flex flex-col mt-4 space-y-4 text-sm text-gray-700 text-center sm:text-right h-full  w-full">
            <a class="hover:text-[#ba4008]" href>    کیف دستی خوش ساخت </a>
            <a class="hover:text-[#ba4008]" href>    کیف‌های دستی لوکس </a>
            <a class="hover:text-[#ba4008]" href> کیف چرمی زنانه </a>
            <a class="hover:text-[#ba4008]" href> کفش مناسب پیاده روی </a>
          </nav>
        </div>
        </div>
        <div className=" flex flex-col justify-center items-center sm:items-center md:mt-6 ">
      <img width={120} height={80} src={lego} alt="logo" className="md:-mt-5 lg:-mt-10" />
        <p class="max-w-xs mt-4 text-sm text-gray-800 text-right">
          نمایندگی رسمی کیف و کفش نهال با بیشترین تنوع و جدیدترین مدل ها و ارسال به سراسر کشور
        </p>
        <div class="flex mt-8 space-x-6 text-gray-600">
        <List  
            className='flex flex-row justify-center  self-end'
            >     
                <NavLink ><FaFacebook className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3  hover:text-orange-500 hover:-translate-y-2 " /></NavLink>
                <NavLink ><FaInstagramSquare className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3  hover:text-orange-500 hover:-translate-y-2" /></NavLink>
                <NavLink  ><FaTelegram  className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3  hover:text-orange-500 hover:-translate-y-2" /></NavLink>
                <NavLink  ><FaWhatsappSquare  className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3  hover:text-orange-500 hover:-translate-y-2"/></NavLink>
                <NavLink  ><FaLinkedin   className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3 hover:text-orange-500 hover:-translate-y-2"/></NavLink>
              </List>
             
        </div>
      </div>
      </div>
  







    <div dir="rtl" class="flex flex-col md:hidden  justify-center items-center mx-0">
      <div className="flex flex-row justify-around">
        <div className=" h-auto flex flex-col justify-start mb-4 mx-1">
          <p class="font-medium text-center py-1">
            NAHAL SHOPE
          </p> 
           <div className="button3 flex flex-col justify-start items-center sm:items-start h-auto  px-0.5">
        
          <nav class=" formbutton3 flex flex-col mt-1 space-y-2 text-sm text-gray-700 text-center sm:text-right h-full w-full ">
            <a class="hover:text-[#ba4008]" href> درباره ی ما </a>
            <a class="hover:text-[#ba4008]" href>   تاریخچه ی برند </a>
            <a class="hover:text-[#ba4008]" href> تماس با ما </a>
            <a class="hover:text-[#ba4008]" href> نحوه ی ارسال </a>
          </nav>
        </div>
          </div>
          <div className="flex flex-col  h-auto justify-start mb-4 mx-1">
          <p class="font-medium text-center py-1"> پرفروش ترین ها
          </p>
          <div className="button3 flex flex-col justify-start items-center sm:items-start h-auto  px-0.5">   
          <nav class="formbutton3 flex flex-col mt-1 space-y-2 text-sm text-gray-700 text-center sm:text-right h-full w-full ">
          <NavLink to={"/allbag"} class="hover:text-[#ba4008]" > همه ی کیف ها  </NavLink>
            <NavLink to={"/allshose"} class="hover:text-[#ba4008]" > کفش ها  </NavLink>
            <NavLink to={"/allack"} class="hover:text-[#ba4008]" > اکسسوری  </NavLink>
            <NavLink to={"/suitcase"}class="hover:text-[#ba4008]" > چمدان و ساک </NavLink>
          </nav>
        </div>
        </div>
        </div>
        <div className="flex flex-col h-auto justify-start my-4">
          <p class="font-medium text-center py-1"> مطالب وبلاگ
          </p>
          <div className="button2 flex flex-col justify-start items-center sm:items-start h-auto  px-0.5"> 
          <nav class="formbutton2 flex flex-col mt-1 space-y-4 text-sm text-gray-700 text-center sm:text-right h-full  w-full">
            <a class="hover:text-[#ba4008]" href>    کیف دستی خوش ساخت </a>
            <a class="hover:text-[#ba4008]" href>    کیف‌های دستی لوکس </a>
            <a class="hover:text-[#ba4008]" href> کیف چرمی زنانه </a>
            <a class="hover:text-[#ba4008]" href> کفش مناسب پیاده روی </a>
          </nav>
        </div>
        </div>
        <div className=" flex flex-col justify-center items-center sm:items-center md:mt-6 ">
      <img width={120} height={80} src={lego} alt="logo" className="md:-mt-5 lg:-mt-10" />
        <p class="max-w-xs mt-4 text-sm text-gray-800 text-right">
          نمایندگی رسمی کیف و کفش نهال با بیشترین تنوع و جدیدترین مدل ها و ارسال به سراسر کشور
        </p>
        <div class="flex mt-8 space-x-6 text-gray-600">
        <List  
            className='flex flex-row justify-center  self-end'
            >     
                <NavLink ><FaFacebook className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3  hover:text-orange-500 hover:-translate-y-2 " /></NavLink>
                <NavLink ><FaInstagramSquare className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3  hover:text-orange-500 hover:-translate-y-2" /></NavLink>
                <NavLink  ><FaTelegram  className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3  hover:text-orange-500 hover:-translate-y-2" /></NavLink>
                <NavLink  ><FaWhatsappSquare  className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3  hover:text-orange-500 hover:-translate-y-2"/></NavLink>
                <NavLink  ><FaLinkedin   className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3 hover:text-orange-500 hover:-translate-y-2"/></NavLink>
              </List>
             
        </div>
      </div>
      </div>
      <p class="mt-8 text-xs text-gray-800">
    © 1384-1402 Copyright:NAHALL -کلیه حقوق محفوظ است
    </p>
    </div>
</footer>
      </div>
    </>
  );
}

export default Footer;
