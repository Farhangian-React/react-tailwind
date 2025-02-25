import * as React from 'react';
import TopNavbar from '../../Topnav/TopNavbar';
import CardAllShos from './CardAllShos';
import Footer from '../../pages/Footer';
import {PageTitle} from '../../Title/PageTitle';
export default  function AllShose() {
  return (
<>
<PageTitle title=' کفش ها/ محصولات نهال شاپ' description=' کفش ها  '/>
   <TopNavbar/> 
 
        
        
          <CardAllShos  itemsPerPage={18}/>
        
          <Footer/>
   </>
   );}    
  


