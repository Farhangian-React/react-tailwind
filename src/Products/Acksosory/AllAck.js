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
 
        
        
          <CardAllA  itemsPerPage={12}/>
        
          <Footer/>
   </>
   );}    
  


