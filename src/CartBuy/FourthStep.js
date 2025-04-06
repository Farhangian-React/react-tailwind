import React,{useContext} from "react";
import {MultiStep} from '../Shared/Cart-Context';
export default function FourthStep() {
const [currentstep,setCurrentstep]=useContext(MultiStep);    
return(
    <>
    <div>

  <p className="text-3xl text-fuchsia-500"> FourthStep</p>
    </div>
    <div dir="rtl" className='flex flex-row justify-around  w-[80%]  my-5 mx-auto'>
                <button onClick={()=>setCurrentstep(5)} type='submit' className="button1 text-white  py-1 px-1 rounded-lg" >
                  <span className='formbutton'> ثبت سفارش  </span>
                </button>
         
               <button onClick={()=>setCurrentstep(3)}  type='submit' className=" button1 text-white py-1 px-1 rounded-lg" >
                    <span className='formbutton'> بازگشت </span>
                </button>
                </div>
</>
)
}