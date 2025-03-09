import * as React from 'react';
import TopNavbar from '../../Topnav/TopNavbar';
import CardAllShos from './CardAllShos';
import Footer from '../../pages/Footer';
import {PageTitle} from '../../Title/PageTitle';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../Bag/Bag.css";
export default  function AllShose() {
   useEffect(() => {
         AOS.init({
           disable: "phone",
           duration: 700,
           easing: "ease-out-cubic",
         });
         
       }, [])
 return (
<>
<PageTitle title=' کفش ها/ محصولات نهال شاپ' description=' کفش ها  '/>
   <TopNavbar/> 
       
   <div data-aos="flip-left" className='svg flex justify-center items-center self-center  w-screen h-[250px] md:h-[300px] mx-auto '>
   <div data-aos="zoom-out-right"  className='blurstyle rounded-2xl flex flex-col justify-end self-center w-full h-1/3   '> 
<p className='textblursh text-[26px] md:text-[30px] lg:text-[36px] font-bold text-white text-center  '>   همه ی کفش ها</p>
<p className="textblursh text-sm md:text-md lg:text-lg text-white text-center mt-2"> محصولات / کفش</p>
</div> 
</div>      
        
          <CardAllShos  itemsPerPage={6}/>
        
          <Footer/>
   </>
   );}    
  


