import React from 'react';
import Box from '@mui/material/Box';
import MapPage from "./map/MapPage";
import Selector from "./map/Selector";
import { PageTitle } from '../Title/PageTitle';
import "./Stores.css";
import { Typography } from '@mui/material';
import "../../node_modules/leaflet/dist/leaflet.css";
export const Stores = () => {
   
  return (
 <>
    <PageTitle title=' فروشگاه های سهیل '   description=' سهیل '/>

 <div className='flex flex-col justify-center self-center w-full bg-slate-50 my-20 h-1/3'>
 <div dir="rtl" className='flex flex-row justify-between mx-auto mt-1 w-full py-3
  bg-white '
>
 <div className='bordershadow flex flex-col justify-center items-center mx-auto my-10 '  >
  <p className='text-[20px] text-center text-[#371303] px-5 pb-1 font-bold  '>آدرس شعب کیف و کفش نهال  </p>
</div>

 </div>

<div className='flex flex-col lg:hidden justify-center  bg-white my-1 mx-1 px-0 py-1 rounded-sm ' >


<Selector/>
<div className='flex flex-row justify-center w-full h-[300px] mt-2  rounded-sm '>
<MapPage/>
</div>
</div>

<div className='hidden lg:flex flex-col lg:flex-row  justify-center  bg-white my-1 mx-5 px-5 py-1 rounded-sm ' >
<div className='hidden lg:flex flex-row justify-center w-full h-[300px] mt-2  rounded-sm '>
<MapPage/>
</div>
<Selector/>

</div>
</div>
 </>
  );
};
export default Stores