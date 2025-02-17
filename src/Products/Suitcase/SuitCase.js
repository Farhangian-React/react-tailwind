import * as React from 'react';
import TopNavbar from '../../Topnav/TopNavbar';
import CardSuitCase from './CardSuitCase';
import Footer from '../../pages/Footer';
import {PageTitle} from '../../Title/PageTitle';
export default  function SuitCase() {
  return (
<>
<PageTitle title=' چمدان و ساک دستی ' description='  چمدان و ساک دستی  '/>
   <TopNavbar/> 
 
        
        
          <CardSuitCase  itemsPerPage={6}/>
        
          <Footer/>
   </>
   );}    
  


