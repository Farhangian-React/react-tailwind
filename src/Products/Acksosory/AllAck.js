import * as React from 'react';
import TopNavbar from '../../Topnav/TopNavbar';
import CardAllA from './CardAllA';
import Footer from '../../pages/Footer';
import {PageTitle} from '../../Title/PageTitle';

export default  function AllAck() {
  return (
<>
<PageTitle title=' اکسسوری ها/ محصولات نهال شاپ' description=' اکسسوری ها  '/>
   <TopNavbar/> 
 
        
   <div data-aos="flip-left" className='svg flex justify-center items-center self-center  w-screen h-[250px] md:h-[300px] mx-auto '>
   <div data-aos="zoom-out-right"  className='blurstyle rounded-2xl flex flex-col justify-end self-center w-full h-1/3   '>
    <p className='textblurb text-[26px] md:text-[30px] lg:text-[36px] font-bold text-white text-center  '>   اکسسوری ها</p>
<p className="textblurb text-sm md:text-md lg:text-lg text-white text-center mt-2"> محصولات / اکسسوری ها</p>
</div> 
</div> 
          <CardAllA  itemsPerPage={6}/>
        
          <Footer/>
   </>
   );}    
  


