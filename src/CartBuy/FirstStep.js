import React,{useContext,useState} from "react";
import {MultiStep} from '../Shared/Cart-Context';
import Buttons from '../CartBuy/Buttons';
import { FaRegTrashAlt } from "react-icons/fa";
import {CartBuyContext, CartContext} from '../Shared/Cart-Context';
import { NavLink } from "react-router-dom";
export default function FirstStep() {
const [currentstep,setCurrentstep]=useContext(MultiStep); 
  const [cartItems,setCartItems]=useContext(CartContext);
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext); 
const convertToEnglish=(str)=> {
  let englishNumber =str
  .replace(/۰/g, '0')
  .replace(/۱/g, '1')
  .replace(/۲/g, '2')
  .replace(/۳/g, '3')
  .replace(/۴/g, '4')
  .replace(/۵/g, '5')
  .replace(/۶/g, '6')
  .replace(/۷/g, '7')
  .replace(/۸/g, '8')
  .replace(/۹/g, '9');
return(englishNumber);
}
const convertToPersian=(str)=> {
  let persianNumber =str
  .replace(/0/g, '۰')
  .replace(/1/g, '۱')
  .replace(/2/g, '۲')
  .replace(/3/g, '۳')
  .replace(/4/g, '۴')
  .replace(/5/g, '۵')
  .replace(/6/g, '۶')
  .replace(/7/g, '۷')
  .replace(/8/g, '۸')
  .replace(/9/g, '۹');
return(persianNumber);
}
const addCommas=(nStr)=>{
  if(nStr.length === 7){
    return  nStr.substring(0,1) + "," + nStr.substring(1, 4) + "," + nStr.substring(4, 7);
  }
  if(nStr.length === 8){
    return  nStr.substring(0, 2) + "," + nStr.substring(2, 5) + "," + nStr.substring(5, 8);
  }
  if(nStr.length === 9){
    return  nStr.substring(0, 3) + "," + nStr.substring(3, 6) + "," + nStr.substring(6, 9);
}
}
const totalPrice=addCommas(convertToPersian(cartItemsBuy.reduce((sum,li)=>sum+Number( convertToEnglish(li.pricenum1)-(convertToEnglish(li.pricenum1)*li.off / 100)),0)+""));
    const [opend, setOpend] = useState(false);
    const deletList=(e)=>{
      setCartItemsBuy([...cartItemsBuy.filter(q=>q.id !==e.id)]);
      setOpend(false);
    }

return(
    <>
    <div>

    <div dir="rtl" class="relative overflow-y-scroll h-[50vh]">
    <table class="w-[100%] md:w-[80%] text-sm text-left rtl:text-right text-gray-500  border-2 border-gray-200 mx-auto my-5">
        <thead class="text-sm sm:text-md text-gray-700 font-bold uppercase  bg-white border-b-2 border-gray-200 ">
            <tr>
                <th scope="col" class="px-2 py-3  border-l-2 border-gray-200 text-center">
                    عنوان محصول
                </th>
                <th scope="col" class="px-2 py-3  border-l-2 border-gray-200 text-center">
                  قیمت 
                </th>
                <th scope="col" class="px-2 py-3  border-l-2 border-gray-200 text-center">
                    تعداد
                </th>
                <th scope="col" class="px-2 py-3  border-l-2 border-gray-200 text-center">
                    حذف
                </th>
            </tr>
        </thead>
        <tbody>  

        {cartItemsBuy.map((item) => (
            <tr key={item.id} class=" items-center bg-white border-b border-gray-200 text-indigo-900">
              
                <td class="px-2 py-3 border-l-2 border-gray-200">
                  <img src={item.img} width={100} alt='' className="self-center items-center mx-auto"/>
                </td>
                <td class="px-2 py-3  border-l-2 border-gray-200">
                <p className='text-[14px] sm:text-[16px] text-gray-500   font-bold text-center'   >
            {addCommas(convertToPersian((convertToEnglish(item.pricenum1)-(convertToEnglish(item.pricenum1)*item.off / 100))+''))} تومان 
           </p>
                </td>
                <td class="px-2 py-3 border-l-2 border-gray-200 text-center">
                {<Buttons t={item}  />}
                </td>
                
                <td class="px-2 py-3  border-l-2 border-gray-200 ">
                <FaRegTrashAlt  onClick={()=>deletList(item)}  className='w-4 h-4   text-indigo-800 hover:text-orange-500 mx-auto'/> 
                   </td>
            </tr>
))}
        </tbody>
        <tfoot>
            <tr class="text-[14px] sm:text-md text-gray-700 font-bold uppercase bg-white">
            
                <td class="px-2 py-3   text-start md:text-center ">جمع سبد خرید :</td>
                <td class="px-2 py-3"></td>
                <td class="px-2 py-3  text-start md:text-center">{totalPrice} تومان </td> 
                 <td class="px-2 py-3"></td>
            </tr>
        </tfoot>
    </table>
</div>

    </div>
         <div dir="rtl" className='flex flex-row justify-around w-[100%] md:w-[80%]   mt-10 mx-auto'>
              <button onClick={()=>setCurrentstep(2)} type='submit' className="button1 text-white  py-1 px-1 rounded-lg" >
                <span className='formbutton'> ثبت سفارش  </span>
              </button>
       
               <NavLink to={"/"}> <button  type='submit' className=" button1 text-white py-1 px-1 rounded-lg" >
                  <span className='formbutton'> بازگشت </span>
              </button></NavLink>
              </div>
 
</>
)
}