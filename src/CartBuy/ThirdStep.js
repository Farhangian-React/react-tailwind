import React,{useContext} from "react";
import {MultiStep} from '../Shared/Cart-Context';
export default function ThirdStep() {
const [currentstep,setCurrentstep]=useContext(MultiStep);  
return(
    <>
    <div>

  <p className="text-3xl text-gray-800"> ThirdStep</p>
    </div>
    <div dir="rtl" className='flex flex-row justify-around  w-[80%]  my-5 mx-auto'>
                <button onClick={()=>setCurrentstep(4)} type='submit' className="button1 text-white  py-1 px-1 rounded-lg" >
                  <span className='formbutton'> ثبت سفارش  </span>
                </button>
         
               <button onClick={()=>setCurrentstep(2)}  type='submit' className=" button1 text-white py-1 px-1 rounded-lg" >
                    <span className='formbutton'> بازگشت </span>
                </button>
                </div>
</>
)
}