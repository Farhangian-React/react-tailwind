import * as React from 'react';
import TopNavbar from '../../Topnav/TopNavbar';
import CardAllBag from './CardAllBag';
import Footer from '../../pages/Footer';
import {PageTitle} from '../../Title/PageTitle';
export default  function AllBag() {
  return (
<>
<PageTitle title=' کیف ها/ محصولات نهال شاپ' description=' کیف ها  '/>
   <TopNavbar/> 
 
        
        
          <CardAllBag  itemsPerPage={18}/>
        
          <Footer/>
   </>
   );}    
  


