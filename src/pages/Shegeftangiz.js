import React from "react";
import sh from "../img/sh1.png";
import bg from "../img/bagg.png";
import trbg from "../img/trbag.png";
import ai from "../img/ai.webp";
import  {useContext,useState} from 'react';
import { CartContext} from '../Shared/Cart-Context';
import { useEffect } from 'react';
import {CardData} from '../Shared/Cart-Context';
import {CardDataShow} from '../Shared/Cart-Context';

import { NavLink } from "react-router-dom";
import {SlideSHegeftangiz} from "../Products/SlideSHegeftangiz";
import "./pages.css";

function Shegeftangiz() {
  const [cartItems,setCartItems]=useContext(CartContext);
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
  const getData=()=>{
    fetch('https://servers-nahall.onrender.com/Allproductsnahall' )
    .then(res => res.json())
    .then((result)=> {
    setData(result);
    setDatashow(result)
    },
    (error) => {
      alert('error');
    }
    )
   }
   useEffect(()=>{
    getData();
    console.log(data);
  },[])
 
    const handelclick1=()=>{
   
      setDatashow(data.filter(q=> q.product ==="shos"));
    
    }
    const handelclick2=()=>{
      
      setDatashow(data.filter(q=> q.product ==="kif"))
    }
    const handelclick3=()=>{
     
      setDatashow(data.filter(q=> q.product ==="ch"))
    }    
    const handelclick4=()=>{
     
      setDatashow(data.filter(q=> q.product ==="acc"))
    }
 
  return (
    <>


    {/*style={{
          backgroundImage: `url(${orcolor})`,
        }}
      bg-gradient-to-r from-gray-100 via-[#dcc5a7] to-gray-100
      */}

<div className='relative flex mx-auto w-full md:w-[95%] h-[550px]   '>
        <div className= 'flex flex-col  justify-center  bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100 w-full h-full mt-10  rounded-t-3xl  mx-auto  z-2'>
        <SlideSHegeftangiz data={datashow}/> 
</div> 
        <div className='boxx flex flex-col  justify-center  absolute w-full  mx-auto  z-1  '>
        <div  className='bordershadow flex flex-col justify-center items-center mx-auto my-5   '>
<p className='text-[20px] text-center text-[#371303] px-5 pb-1 font-bold  '>   پیشنهاد شگفت انگیز</p></div>
<div dir="rtl" class=" flex flex-row justify-center rounded-md shadow-xs  w-1/2 md:w-3/4 items-center self-center mt-8 mx-auto ">
<button onClick={handelclick1} type="button" class="ease-out duration-300 transition-all text-black bg-orange-500
   hover:bg-indigo-800 hover:text-white hover:translate-y-2
   font-medium rounded-full text-sm px-2 py-1.5 text-center inline-flex items-center me-5 mb-2">
  <div className="hidden md:flex justify-center rounded-2xl px-2 border-2 border-red-950 ml-2 -mr-4">
<img src={sh} width={30} height={20}/>
</div>
کفش
</button>

 
  <button onClick={handelclick2} type="button" class="ease-out duration-300 transition-all text-black bg-orange-500
  hover:bg-indigo-800 hover:text-white hover:translate-y-2 font-medium rounded-full text-sm px-2 py-1.5 
  text-center inline-flex items-center   me-5 mb-2">
  <div className="hidden md:flex  justify-center  rounded-2xl px-2 border-2 border-red-950 ml-2 -mr-4">
    
<img src={bg} width={30} height={20}/>
</div>
کیف
</button> 
<button onClick={handelclick3} type="button" class="ease-out duration-300 transition-all text-black bg-orange-500
  hover:bg-indigo-800 hover:text-white hover:translate-y-2  font-medium rounded-full text-sm px-2 py-1.5 text-center
   inline-flex items-center  me-5 mb-2">
  <div className="hidden md:flex  justify-center rounded-2xl px-2 border-2 border-red-950 ml-2 -mr-4">
<img src={trbg} width={30} height={20}/>
</div>
چمدان
</button><button onClick={handelclick4} type="button" class="ease-out duration-300 transition-all text-black bg-orange-500
   hover:bg-indigo-800 hover:text-white hover:translate-y-2 font-medium rounded-full text-sm px-2 py-1.5 text-center 
   inline-flex items-center  me-5 mb-2">
  <div className="hidden md:flex  justify-center rounded-2xl px-2 border-2 border-red-950 ml-2 -mr-4">
<img src={ai} width={30} height={20}/>
</div>
اکسسوری
</button>

</div>

        </div>
      </div>
  
 
</>
);
}

export default Shegeftangiz;