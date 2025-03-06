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
<div data-aos="zoom-out-right"  className='flex flex-col w-1/5 h-1/3 bg-inherit  '> 
<p className='text-[36px] font-bold text-white text-center  '> کیف دوشی</p>
<p className="text-sm text-white text-center mt-2"> محصولات/ کیف / کیف دوشی</p>

</div>
</div>
        
          <CardDoshiB  itemsPerPage={10}/>
         
          <Footer/>
   </>
   );}    
  


