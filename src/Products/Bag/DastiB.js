import * as React from 'react';
import { useEffect } from 'react';
import TopNavbar from '../../Topnav/TopNavbar';
import CardDastiB from './CardDastiB';
import Footer from '../../pages/Footer';
import {PageTitle} from '../../Title/PageTitle';
import AOS from "aos";
import "aos/dist/aos.css";
import "./Bag.css";
export default  function DastiB() {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
        
      }, [])
  return (
<>
<PageTitle title='محصولات / کیف / کیف دستی' description=' کیف ها  '/>
   <TopNavbar/> 
   <div data-aos="flip-left" className='svg flex justify-center items-center self-center  w-screen h-[250px] md:h-[300px] mx-auto '>
   <div data-aos="zoom-out-right"  className='blurstyle rounded-2xl flex flex-col justify-end self-center w-full h-1/3   '> 
<p className='textblurb text-[24px] md:text-[30px] lg:text-[36px] font-bold text-white text-center  '>    کیف دستی</p>
<p className="textblurb text-sm md:text-md lg:text-lg text-white text-center mt-2">  محصولات / کیف دستی</p>
</div> 
</div> 

        
          <CardDastiB  itemsPerPage={6}/>
        
          <Footer/>
   </>
   );}    
  


