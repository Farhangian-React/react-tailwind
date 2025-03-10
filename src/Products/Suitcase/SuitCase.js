import * as React from 'react';
import TopNavbar from '../../Topnav/TopNavbar';
import CardSuitCase from './CardSuitCase';
import Footer from '../../pages/Footer';
import {PageTitle} from '../../Title/PageTitle';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../Bag/Bag.css";
export default  function SuitCase() {
   useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
        
      }, [])
  return (
<>
<PageTitle title=' چمدان و ساک دستی ' description='  چمدان و ساک دستی  '/>
   <TopNavbar/>  
   <div data-aos="flip-left" className='svg flex justify-center items-center self-center  w-screen h-[250px] md:h-[300px] mx-auto '>
   <div data-aos="zoom-out-right"  className='blurstyle rounded-2xl flex flex-col justify-end self-center w-full h-1/3   '> 
<p className='textblursh text-[26px] md:text-[30px] lg:text-[36px] font-bold text-white text-center  '> ساک و چمدان</p>
<p className="textblursh text-sm md:text-md lg:text-lg text-white text-center mt-2"> محصولات / ساک و چمدان</p>
</div> 
</div> 
          <CardSuitCase  itemsPerPage={6}/>
        <p></p>
          <Footer/>
   </>
   );}    
  


