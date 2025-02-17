
import lego from "../img/bag.png";
import {NavLink} from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import {

  List,
  
} from "@material-tailwind/react";
function Footer() {
  return (
    <>
      <div className="bg-white p-5 text-center rounded-2xl border-t-2 border-gray-200">
    
<footer class="bg-white">
  <div dir="lrt" class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="hidden lg:flex flex-col  justify-center items-center">
      <img width={150} height={150} src={lego} alt="logo" />
        <p class="max-w-xs mt-4 text-sm text-gray-800">
          نمایندگی رسمی کیف و کفش نهال با بیشترین تنوع و جدیدترین مدل ها و ارسال به سراسر کشور
        </p>
        <div class="flex mt-8 space-x-6 text-gray-600">
        <List  
            className='flex flex-row justify-center  self-end'
            >     
                <NavLink ><FaFacebook className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3  hover:text-orange-500  hover:-translate-y-2 " /></NavLink>
                <NavLink ><FaInstagramSquare className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3  hover:text-orange-500 hover:-translate-y-2" /></NavLink>
                <NavLink  ><FaTelegram  className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800 mr-3  hover:text-orange-500 hover:-translate-y-2" /></NavLink>
                <NavLink  ><FaWhatsappSquare  className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3  hover:text-orange-500 hover:-translate-y-2"/></NavLink>
                <NavLink  ><FaLinkedin   className="ease-out duration-300 transition-all h-8 w-8 text-indigo-800  mr-3 hover:text-orange-500 hover:-translate-y-2"/></NavLink>
              </List>
             
        </div>
      </div>
      <div dir="rtl" class="grid grid-cols-1 gap-8 md:col-span-2 sm:grid-cols-2 md:grid-cols-2 ">
        <div className=" flex flex-col justify-center items-center sm:items-start">
          <p class="font-medium text-right py-3">
            NAHAL SHOPE
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-700 text-center sm:text-right ">
            <a class="hover:text-[#ba4008]" href> درباره ی ما </a>
            <a class="hover:text-[#ba4008]" href>   تاریخچه ی برند </a>
            <a class="hover:text-[#ba4008]" href> تماس با ما </a>
            <a class="hover:text-[#ba4008]" href> نحوه ی ارسال </a>
          </nav>
        </div>
        <div className=" flex flex-col justify-center items-center sm:items-start">
          <p class="font-medium text-right py-3">
            پرفروش ترین ها
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-700 text-center sm:text-right ">
            <a class="hover:text-[#ba4008]" href> همه ی کیف ها  </a>
            <a class="hover:text-[#ba4008]" href> کفش ها  </a>
            <a class="hover:text-[#ba4008]" href> اکسسوری  </a>
            <a class="hover:text-[#ba4008]" href> چمدان و ساک </a>
          </nav>
        </div>
        <div className=" flex flex-col justify-center items-center sm:items-start">
          <p class="font-medium text-right py-3">
           مطالب وبلاگ
          </p>
          <nav class="flex flex-col mt-4 space-y-4 text-sm text-gray-700 text-center sm:text-right ">
            <a class="hover:text-[#ba4008]" href>  روش ی انتخاب یک کیف دستی خوش ساخت </a>
            <a class="hover:text-[#ba4008]" href>  ویژگی های کیف‌های دستی لوکس </a>
            <a class="hover:text-[#ba4008]" href> اشتباهات رایج در خرید کیف چرمی زنانه </a>
            <a class="hover:text-[#ba4008]" href> نکاتی برای کمک به انتخاب کیفی که به کمر شما آسیب نمی‌رساند</a>
          </nav>
        </div>
        <div className=" flex flex-col lg:hidden justify-center items-center">
      <img width={150} height={150} src={lego} alt="logo" />
        <p class="max-w-xs mt-4 text-sm text-gray-800">
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
