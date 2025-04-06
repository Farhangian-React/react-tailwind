import * as React from 'react';
import { useEffect } from 'react';
import TopNavbar from '../Topnav/TopNavbar';
import CardShegeft from './CardShegeft';
import Footer from '../pages/Footer';
import {PageTitle} from '../Title/PageTitle';
import AOS from "aos";
import "aos/dist/aos.css";

export default  function PageShegeft() {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
        
      }, [])
  return (
<>
<PageTitle title='محصولات شگفت انگیز'  description='محصولات شگفت انگیز'/>
   <TopNavbar/> 
   <div data-aos="flip-left" className='svg flex justify-center items-center self-center  w-screen h-[250px] md:h-[300px] mx-auto '>
   <div data-aos="zoom-out-right"  className='blurstyle rounded-2xl flex flex-col justify-end self-center w-full h-1/3   '> 
   <p className='textblurb text-[20px] md:text-[26px] lg:text-[32px] font-bold text-white text-center  '> محصولات شگفت انگیز  </p>
</div> 
</div> 
   
          <CardShegeft  itemsPerPage={6}/>
        
          <Footer/>
   </>
   );}    
  


