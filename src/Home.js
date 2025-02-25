import React from "react";
import { useEffect,useState } from "react";
import TopNavbar from "./Topnav/TopNavbar";
import Footer from "./pages/Footer";
import {PageTitle} from './Title/PageTitle';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import Box from '@mui/material/Box';
import MapPage from "./Stores/map/MapPage";
import Selector from "./Stores/map/Selector";
import "./Stores/Stores.css";
import "../node_modules/leaflet/dist/leaflet.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import "./pages/pages.css";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-4 w-4 hover:bg-orange-500 hover:text-white hover:scale-125  rounded-full transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
function Home() {
  const [photo,setPhoto]=useState(1);
  const [type,setType]=useState(1);
    const [open, setOpen] = React.useState(0);
   
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(()=> {
    const interval = setInterval(()=>{
      change();},4000);
      return()=>{
        clearInterval(interval);};},[photo,type]);

        const change=()=>{
          if(photo === 4 && type === 4){
            setPhoto(1);
            setType(1);
            return;
          }
          setPhoto((prev) => prev+1);
          setType ((p) => p+1);
        };
        const returnPhotoURL=()=>{
          switch(photo){
            case 1: return "";
            case 2: return "";
            case 3: return "";
            case 4: return "";
            case 5: return "";
            default: return null;
          }
       
        }; 
          useEffect(() => {
            AOS.init({
              disable: "phone",
              duration: 700,
              easing: "ease-out-cubic",
            });
            
          }, [])



  return (
    <>
    <PageTitle title='  محصولات نهال شاپ' description='  صفحه ی اصلی  '/>
  <TopNavbar/>
  <div className= 'flex flex-col  justify-center    bg-cover bg-center bg-no-repeat h-[30vh] md:h-[50vh] lg:h-screen mt-2'  style={{
                   backgroundImage: `url("https://media.istockphoto.com/id/185007737/photo/dark-blue-grunge-background.jpg?s=612x612&w=0&k=20&c=YIHLCULIeavPuYWz16ecgycBWdZn7XbB0qMjoi9r9p8=")`,
                 }} >
      
         <Box 
      sx={{
        display:'flex',
        justifyContent:'center',
       position: "relative",
       backgroundImage: `url(${returnPhotoURL()})`,
       backgroundPosition: 'center',
       backgroundSize:'cover',
       backgroundRepeat: 'no-repeat',
       width:'93%',
       mx:"auto",
       mt:"20px",
       mb:"30px",
       height:"85vh",
       borderRadius:"30px"
       }} >
         

       
         <Box  sx={{mt:{xs:50,lg:22} ,mb:20, mx:5,width:{md:'1000px',lg:'1000px'},
         height:'400px',bgcolor:'transparent',opacity:{xs:0.8,lg:0.6}}}>
         
         </Box>
      </Box>
     </div>
       
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
             <NavLink to={"/about"}  > <p className="text-sm hover:text-[#281e5d] text-[#ba4008] md:py-2 font-bold">چمدان </p>
            </NavLink> </div>
             <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[130px] mb-5" >       
              <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
               style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
               <img width={80} height={80} src="https://static.vecteezy.com/system/resources/previews/021/919/917/non_2x/women-s-shoes-with-heels-wedding-accessory-in-cartoon-style-illustration-isolated-on-white-vector.jpg" alt="" className="hover:scale-110 hover:opacity-55" 
                 style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
             </div>
             <NavLink to={"/about"}  > <p className="text-sm hover:text-[#281e5d] text-[#ba4008] md:py-2 font-bold">کفش </p>
             </NavLink></div>
             <div data-aos="zoom-out-right" className="   flex flex-col justify-center items-center h-[130px] mb-5" >       
              <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
               style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
               <img width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjEEHriFlzX0c2DFUWOWITHZKJzFZWt6ybg&s" alt="" className="hover:scale-110 hover:opacity-55" 
                 style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
             </div>
            <NavLink to={"/about"}  > <p className="text-sm hover:text-[#281e5d] text-[#ba4008] md:py-2 font-bold">اکسسوری </p></NavLink>
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
             <NavLink to={"/about"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">چمدان ها</p>
            </NavLink> </div>
             <div data-aos="flip-left"  className="   flex flex-col justify-center items-center h-[230px]  mb-5" >       
              <div  className=" flex flex-row justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
               style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
               <img width={150} height={150} src="https://static.vecteezy.com/system/resources/previews/021/919/917/non_2x/women-s-shoes-with-heels-wedding-accessory-in-cartoon-style-illustration-isolated-on-white-vector.jpg" alt="" className="hover:scale-110 hover:opacity-55" 
                 style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
             </div>
             <NavLink to={"/about"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">کفش ها</p>
             </NavLink></div>
             <div data-aos="zoom-out-right" className="   flex flex-col justify-center items-center h-[230px]  mb-5" >       
              <div  className=" flex flex-row justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
               style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
               <img width={150} height={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjEEHriFlzX0c2DFUWOWITHZKJzFZWt6ybg&s" alt="" className="hover:scale-110 hover:opacity-55" 
                 style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
             </div>
            <NavLink to={"/about"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">اکسسوری ها</p></NavLink>
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
             <NavLink to={"/about"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">چمدان ها</p>
            </NavLink> </div>
             <div data-aos="flip-left" className="   flex flex-col justify-center items-center h-[290px] mb-5" >       
              <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
               style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
               <img width={280} height={220} src="https://static.vecteezy.com/system/resources/previews/021/919/917/non_2x/women-s-shoes-with-heels-wedding-accessory-in-cartoon-style-illustration-isolated-on-white-vector.jpg" alt="" className="hover:scale-110 hover:opacity-55" 
                 style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
             </div>
             <NavLink to={"/about"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">کفش ها</p>
             </NavLink></div>
             <div data-aos="zoom-out-right"  className="   flex flex-col justify-center items-center h-[290px] mb-5" >       
              <div  className=" flex flex-row  justify-center items-center h-full bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100"
               style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
               <img width={280} height={220} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjEEHriFlzX0c2DFUWOWITHZKJzFZWt6ybg&s" alt="" className="hover:scale-110 hover:opacity-55" 
                 style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
             </div>
            <NavLink to={"/about"}  > <p className="text-xl hover:text-[#281e5d] text-[#ba4008] md:py-2 font-black">اکسسوری ها</p></NavLink>
             </div>
             </div>
     </div>
     
      <div className='flex flex-col justify-center self-center w-full bg-slate-50 my-20 h-1/3'>
      <div dir="rtl" className='flex flex-row justify-between mx-auto mt-1 w-full py-3
       bg-white '
     >
      <div className='bordershadow flex flex-col justify-center items-center mx-auto my-10 '  >
       <p className='text-[20px] text-center text-[#371303] px-5 pb-1 font-bold  '>آدرس شعب کیف و کفش نهال  </p>
     </div>
     
      </div>
     
     <div className='flex flex-col lg:hidden justify-center  bg-white my-1 mx-1 px-0 py-1 rounded-sm ' >
     
     
     <Selector/>
     <div className='flex flex-row justify-center w-full h-[300px] mt-2  rounded-sm '>
     <MapPage/>
     </div>
     </div>
     
     <div className='hidden lg:flex flex-col lg:flex-row  justify-center  bg-white my-1 mx-5 px-5 py-1 rounded-sm ' >
     <div className='hidden lg:flex flex-row justify-center w-full h-[300px] mt-2  rounded-sm '>
     <MapPage/>
     </div>
     <Selector/>
     
     </div>
     </div>
        
<div className='relative flex mx-auto w-full md:w-[95%] h-[500px] my-20   '>
        <div className= 'flex flex-col  justify-center   bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100 w-full h-full mt-10 rounded-t-3xl  mx-auto  z-2'>
        <div dir="rtl" className="mx-1 md:mx-10 my-10">
  
  <Accordion className="border-2 border-gray-100 px-3 rounded-lg my-2 "  open={open === 1}
   icon={<Icon id={1} open={open}  />}>
    <AccordionHeader className="font-medium text-neutral-700 text-sm" onClick={() => handleOpen(1)}>مدت زمان تحویل سفارش تهران به چه صورت است؟</AccordionHeader>
    <AccordionBody>
    ⏱️زمان ارسال سفارشات تهران : 👇🏻
(توجه داشته باشید که به دلیل حجم بالای سفارش‌ها در زمان تخفیفات ، ارسال سفارش بین 3 تا
7 روز کاری زمان می برد و تحویل فوری نداریم)

به شما اطمینان میدیم که در تلاشیم تا سریع‌ترین و بهترین سرویس رو به شما ارائه بدیم.

🛵در حالت عادی سفارشات تهران از طریق پیک و 48ساعت کاری به دست شما عزیزان می رسد.

توجه (در زمان تخفیفات) به علت حجم بالای سفارش ها 3 تا نهایتا 7 روز زمان می برد.

قبل از ارسال سفارش ، بازه زمانی تحویل به مشتری از طریق پیامک کاملا اطلاع رسانی می شود و‌ نیاز به پیگیری وضعیت ارسال از شما عزیزان نمی باشد.

بازه زمانی تحویل سفارش به مشتری : ۱۰ صبح تا ۱۸ عصر می باشد، اگر ساعت مناسبی برای شما نیست در قسمت توضیحات یادداشت کنید
که بازه زمانی عصر: ساعت ۱۶ عصر تا ۲۲ شب ارسال شود.

    </AccordionBody>
  </Accordion>
  <Accordion className="border-2 border-gray-100 px-3 rounded-lg my-2" open={open === 2} icon={<Icon id={2} open={open} />}>
    <AccordionHeader className="font-medium text-neutral-700 text-sm" onClick={() => handleOpen(2)}>
    مدت زمان تحویل سفارش شهرستان به چه صورت است؟
    </AccordionHeader>
    <AccordionBody>
    زمان ارسال سفارشات شهرستان : 👇🏼

(توجه داشته باشید که به دلیل حجم بالای سفارش‌ها در زمان تخفیفات ، ارسال سفارش بین ۱۰ تا
۱۲ روز کاری زمان می برد)

به شما اطمینان میدیم که در تلاشیم تا سریع‌ترین و بهترین سرویس رو به شما ارائه بدیم.

🚚ارسال سفارش های شهرستان با پست پیشتاز انجام می شود.

▫️روند ارسال : سفارش های شهرستان 72ساعت کاری بعد از ثبت سفارش شما عزیزان ،آماده و تحویل پست تهران می شود.

⏰بازه زمانی مرسوله های پیشتاز اداره پست هم معمولا بین 3 تا 5 روز کاری می باشد.
(که در نظر گرفتن شلوغی پست ایران، نکته ی مهمی ست که ما به مشتریان عزیزمان یادآور میشویم و در نتیجه بین 7 تا نهایتا 10 روزه به دست شما میرسد.)

(کد رهگیری مرسولات بعد از ارسال به شماره همراه ثبت شده در سفارش، پیامک خواهد شد.)
    </AccordionBody>
  </Accordion>
  <Accordion className="border-2 border-gray-100 px-3 rounded-lg my-2" open={open === 3} icon={<Icon id={3} open={open} />}>
    <AccordionHeader className="font-medium text-neutral-700 text-sm" onClick={() => handleOpen(3)}>
    آدرس جهت خرید حضوری هم دارید؟
    </AccordionHeader>
    <AccordionBody>
    آدرس جهت خرید حضوری :

📍شعبه صبامال :
پایین تر از میدان حر،خ کارگر جنوبی،
مجتمع صبا، طبقه اول واحد ۵۰.

☎️ : 021-65829250



📍شعبه هدیش مال :
پاسداران، میدان هروی ،خ موسوی روبه‌روی خ شمشاد،
هدیش مال، ط همکف دوم، واحد ۵

☎️ : 021-91312119



📍شعبه پاساژ نصر :
خ گیشا ،پاساژ نصر ، طبقه اول، پلاک ۳۵۰.

☎️ : 021-88286873
⏱ساعت کاری هر سه شعبه : هر روز از ۱۰ صبح تا ۱۰ شب
    </AccordionBody>
  </Accordion>
  <Accordion className="border-2 border-gray-100 px-3 rounded-lg my-2" open={open === 4} icon={<Icon id={4} open={open} />}>
    <AccordionHeader className="font-medium text-neutral-700 text-sm" onClick={() => handleOpen(4)}>
    آیا برای خرید لازم است از قبل در وبسایت ثبت‌نام کرده باشم؟
    </AccordionHeader>
    <AccordionBody>
    خیر، شما با انتخاب و اضافه کردن محصولات به سبد خریدتان می‌توانید اطلاعات فردی و ارسالتان را کامل کنید و پرداخت را انجام دهید.
    </AccordionBody>
  </Accordion>
  <Accordion className="border-2 border-gray-100 px-3 rounded-lg my-2" open={open === 5} icon={<Icon id={5} open={open} />}>
    <AccordionHeader className="font-medium text-neutral-700 text-sm" onClick={() => handleOpen(5)}>
    چطور هزینه سفارش را پرداخت کنم؟
    </AccordionHeader>
    <AccordionBody>
    تمامی کاربران می‌توانند از طریق درگاه بانکی با تمام کارت‌های عضو شتاب هزینه سفارش را به صورت اینترنتی پرداخت نمایند.
    </AccordionBody>
  </Accordion>
  </div>
</div> 
        <div className='boxx flex flex-col  justify-center  absolute w-full  mx-auto  z-1  '>
            <div className=' bordershadow flex flex-col justify-center items-center mx-auto my-5 w-[250px] '  >
  <p className='text-[20px] text-center text-[#371303] px-5 pb-1 font-bold  '> سوالات پر تکرار</p>
      </div>
        </div>
        </div>
    
  <Footer/>
     
    </>
  );
}

export default Home;
