import * as React from 'react';
import { useEffect } from 'react';
import TopNavbar from '../../Topnav/TopNavbar';
import CardDoshiB from './CardDoshiB';
import Footer from '../../pages/Footer';
import {PageTitle} from '../../Title/PageTitle';
import AOS from "aos";
import "aos/dist/aos.css";
import "./Bag.css";
export default  function DoshiB() {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
        
      }, [])
  return (
<>
<PageTitle title='محصولات / کیف / کیف دوشی' description=' کیف ها  '/>
   <TopNavbar/> 
   <div data-aos="flip-left" className='svg flex justify-center items-center self-center  w-screen h-[300px] mx-auto '>
<div data-aos="zoom-out-right"  className='blurstyle rounded-2xl flex flex-col justify-end self-center  w-1/2 md:w-1/3 h-1/3 bg-inherit backdrop-blur-lg  '> 
<p className='textblurb text-[24px] md:text-[30px] font-bold text-white text-center  '>  کیف دوشی</p>
<p className="textblurb text-sm text-white text-center mt-2"> محصولات / کیف دوشی</p>
</div> 
</div> 
  
        
          <CardDoshiB  itemsPerPage={6}/>
         
          <Footer/>
   </>
   );}    
  


