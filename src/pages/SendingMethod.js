import React from "react"; 
import TopNavbar from '../Topnav/TopNavbar';
import Footer from '../pages/Footer';
import {PageTitle} from '../Title/PageTitle';
export default function SendingMethod() {
    
return(
    <>
    <PageTitle title="نهال شاپ / نحوه ی ارسال" description=' نحوه ی ارسال '/>
    <TopNavbar/>  
    <div className="bg-white flex flex-col mb-20 md:my-12 px-5">
     <div className='bordershadow flex flex-col justify-center items-center mx-auto my-5 '  >
  <p  className='text-lg text-center text-[#371303] px-5 pb-3 font-bold  '>نحوه ی ارسال </p>
      </div>
      <div dir="rtl">
        <p className="text-md py-5 text-gray-800 font-bold">زمان ارسال سفارشات تهران : </p>
        <ul className="list-disc px-5 marker: ">
            <li  className="py-1  text-md text-gray-600 "> سفارشات تهران از طریق پیک و از ۲۴ساعت کاری تا ۷۲ساعت کاری به دست شما عزیزان می رسد.</li>
            <li  className="py-1  text-md text-gray-600">قبل از ارسال سفارش ، بازه زمانی تحویل به مشتری از طریق پیامک کاملا اطلاع رسانی می شود و‌ نیاز به پیگیری وضعیت ارسال از شما عزیزان نمی باشد.</li>
            <li  className="py-1  text-md text-gray-600" >بازه زمانی تحویل سفارش به مشتری : ۱۰ صبح تا ۱۷ عصر می باشد،

اگر ساعت مناسبی برای شما نیست در قسمت توضیحات یادداشت کنید که بازه زمانی عصر: ساعت ۱۶ عصر تا ۲۲ شب ارسال شود.

</li>
        </ul>
      </div>
      <div dir="rtl">
        <p className="text-md py-5 text-gray-800 font-bold">زمان ارسال سفارشات شهرستان :  </p>
        <ul className="list-disc px-5 marker:blue ">
            <li  className="py-1  text-md  text-gray-600">  ارسال سفارش های شهرستان با تیپاکس انجام می شود. </li>
            <li  className="py-1  text-md text-gray-600"> ▫️روند ارسال : سفارش های شهرستان تا ۲۴ساعت کاری بعد از ثبت سفارش شما عزیزان ،آماده و تحویل تیپاکس تهران می شود.</li>
            <li  className="py-1  text-md text-gray-600" >بازه زمانی مرسوله های تیپاکس هم معمولا تا 3 روز کاری می باشد.</li>
            <li  className="py-1  text-md text-gray-600" >(کد رهگیری مرسولات بعد از ارسال به شماره همراه ثبت شده در سفارش، پیامک خواهد شد و نیازی به پیگیری شما عزيزان نیست)</li>
        </ul>
      </div>
      </div>
     <Footer/> 
</>
)
}