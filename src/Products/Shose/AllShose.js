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
       
<div data-aos="flip-left" className='svg flex justify-center items-center self-center  w-screen h-[300px] mx-auto '>
<div data-aos="zoom-out-right"  className='blur flex flex-col w-1/2 h-1/3 bg-inherit backdrop-blur-lg  '> 
<p className='text-[26px] md:text-[30px] font-bold text-white text-center  '>   همه ی کفش ها</p>
<p className="text-sm text-white text-center mt-2"> محصولات / کفش</p>
</div> 
</div>      
        
          <CardAllShos  itemsPerPage={6}/>
        
          <Footer/>
   </>
   );}    
  


