import React from "react";
import HorizontalStepper from "./HorizontalStepper"; 
import {PageTitle} from '../Title/PageTitle';
export default function EndBuy() {
    
return(
    <>
    <PageTitle title="نهال شاپ / سبد خرید" description='سبد خرید '/>
   
    <div className="h-[90vh]">

  <HorizontalStepper/>
    </div>
      
</>
)
}