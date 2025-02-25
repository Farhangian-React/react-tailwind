import * as React from 'react';
import  {useContext,useState} from 'react';
import { CartContext} from '../Shared/Cart-Context';
import { useEffect } from 'react';
import Rating from '@mui/material/Rating';
import 'react-slideshow-image/dist/styles.css'
import "./d.css"
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

 export  const SlideSHegeftangiz= ({data})=>  {

  const [cartItems,setCartItems]=useContext(CartContext);
  const[datacomment,setDatacomment]=useState([]);

  const sumscore=(item)=>{
    let total=0;
    let aver=0;
 datacomment.map(i=>{
  if(i.idcomment === item.id){
    aver ++;
    total += i.score; 
  }
  });
   return total /aver;
 }
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





const getData1=()=>{
  fetch("https://serverjson-project.onrender.com/Allcommentsnahall")
  .then((res)=>
     res.json())
     .then((data)=>{
    setDatacomment(data);
    }
     )
  .catch(err=>console.log(err));
}
useEffect(()=>{ 
  getData1();
},[])

    return (
      <>
      <div className="inline sm:hidden mx-2 py-5 w-[95%]   px-2 h-[400px] mt-20  ">
        <Slide  slidesToScroll={1} slidesToShow={1} indicators={false}   >
         {data.map((item)=> (
           <NavLink to={"./buy"}>  <div
           onClick={()=>{
            setCartItems([item]);
           }}
           key={item.id} className='flex justify-center items-center mx-auto px-0 backdrop-blur-lg rounded-3xl '>
             <div  className='bg-transparent relative w-[85%] h-[380px]  rounded-lg shadow-xl
             transition delay-150 duration-300 ease-in-out hover:h-[450px] overflow-hidden 
             ' >   
<div 
                 className='shh relative w-full h-[340px] rounded-sm 
                 bg-cover bg-center bg-no-repeat
                   before:absolute before:w-full before:h-[60px] before:bottom-[-12px] before:rounded-3xl before:bg-transparent
                 ' style={{
                  backgroundImage: `url(${item.img})`,borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "
                }} >  
                  </div>
                  
                  <div dir="rtl" className='relative top-[-40px] z-10 py-2 px-5 transition delay-150 duration-300 ease-in-out mt-5'>
                  
 <p className='text-sm text-start text-gray-800 font-bold'> {item.title1}</p> 
                   <Rating
         sx={{color:"#f5cd00",fontSize:"14px",alignItems:"start"}}
        name="simple-controlled"
        value={sumscore(item)}
      />
      
     
              

      { item.off !== "" ?<div className='flex flex-col justify-center'>
<div  dir="rtl" className='flex justify-between items-baseline border-b-2 border-gray-500 pb-1'>
<div className='flex justify-center items-center rounded-full bg-orange-500 h-[20px] w-[40px] '>
<p className='text-xs text-white font-bold text-center'>  {convertToPersian(item.off)}%</p>
</div>
<div   className='flex flex-col'>

<p className='text-lg text-center text-indigo-800 font-bold'> 
{addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
</p>
</div>

</div>
<p className='text-xs text-gray-600 text-center line-through decoration-gray-600  '>{item.price}</p>
</div>
:<p className='text-lg text-center text-indigo-800 font-bold  '>{item.price}</p>}
                   </div>
              </div>
            </div>
            </NavLink>
          ))} 
        </Slide>
      </div>
      <div className="hidden sm:inline lg:hidden mx-15 py-5  w-5/8 px-5 h-[400px]  mt-20">
        <Slide  slidesToScroll={1} slidesToShow={2} indicators={false}   >
         {data.map((item)=> (
          <NavLink to={"./buy"}>  <div
          onClick={()=>{
            setCartItems([item]);
           }} key={item.id} className='flex justify-center items-center mx-auto px-0 backdrop-blur-lg rounded-3xl '>
            <div  className='bg-transparent relative w-[95%] h-[370px]  rounded-lg shadow-xl
             transition delay-150 duration-300 ease-in-out hover:h-[450px] overflow-hidden 
             ' >
               <div 
                 className='shh relative w-full h-[340px] rounded-sm 
                 bg-cover bg-center bg-no-repeat
                   before:absolute before:w-full before:h-[60px] before:bottom-[-12px] before:rounded-3xl before:bg-transparent
                 ' style={{
                  backgroundImage: `url(${item.img})`,borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "
                }} >  
                  </div>    
                 <div dir="rtl" className='relative top-[-40px] z-10 py-8 px-5 transition delay-150 duration-300 ease-in-out'>
                   <p className='text-sm text-start text-gray-800 font-bold'> {item.title1}</p> 
                   <Rating
         sx={{color:"#f5cd00",fontSize:"14px",alignItems:"start"}}
        name="simple-controlled"
        value={sumscore(item)}
      />
              

              { item.off !== "" ?<div className='flex flex-col justify-center'>
<div  dir="rtl" className='flex justify-between items-baseline border-b-2 border-gray-500 pb-1'>
<div className='flex justify-center items-center rounded-full bg-orange-500 h-[20px] w-[40px] '>
<p className='text-xs text-white font-bold text-center'>  {convertToPersian(item.off)}%</p>
</div>
<div   className='flex flex-col'>

<p className='text-lg text-center text-indigo-800 font-bold'> 
{addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
</p>
</div>

</div>
<p className='text-xs text-gray-600 text-center line-through decoration-gray-600  '>{item.price}</p>
</div>
:<p className='text-lg text-center text-indigo-800 font-bold '>{item.price}</p>}
                   </div>
              </div>
              
            </div>
            </NavLink>
          ))} 
        </Slide>
      </div>
     
      <div className="hidden lg:inline xl:hidden mx-10 py-5  w-5/8 px-5 h-[400px]  mt-20 ">
        <Slide  slidesToScroll={1} slidesToShow={3} indicators={false}   >
        {data.map((item)=> (
          <NavLink to={"./buy"}>  <div
          onClick={()=>{
            setCartItems([item]);
           }} key={item.id} className='flex justify-center items-center mx-auto px-0 backdrop-blur-lg rounded-3xl '>
            <div  className='bg-transparent relative w-[95%] h-[370px]  rounded-lg shadow-xl
             transition delay-150 duration-300 ease-in-out hover:h-[450px] overflow-hidden 
             ' >

               

<div 
                 className='shh relative w-full h-[340px] rounded-sm 
                 bg-cover bg-center bg-no-repeat
                   before:absolute before:w-full before:h-[60px] before:bottom-[-12px] before:rounded-3xl before:bg-transparent
                 ' style={{
                  backgroundImage: `url(${item.img})`,borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "
                }} >  
                  </div>
                   
                 <div dir="rtl" className='relative top-[-40px] z-10 py-8 px-5 transition delay-150 duration-300 ease-in-out'>
                   <p className='text-sm text-start text-gray-800 font-bold'> {item.title1}</p> 
                   <Rating
         sx={{color:"#f5cd00",fontSize:"14px",alignItems:"start"}}
        name="simple-controlled"
        value={sumscore(item)}
      />
              

              { item.off !== "" ?<div className='flex flex-col justify-center'>
<div  dir="rtl" className='flex justify-between items-baseline border-b-2 border-gray-500 pb-1'>
<div className='flex justify-center items-center rounded-full bg-orange-500 h-[20px] w-[40px] '>
<p className='text-xs text-white font-bold text-center'>  {convertToPersian(item.off)}%</p>
</div>
<div   className='flex flex-col'>

<p className='text-lg text-center text-indigo-800 font-bold'> 
{addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
</p>
</div>

</div>
<p className='text-xs text-gray-600 text-center line-through decoration-gray-600  '>{item.price}</p>
</div>
:<p className='text-lg text-center text-indigo-800 font-bold  '>{item.price}</p>}
                   </div>
              </div>
              
            </div>
            </NavLink>
          ))} 
        </Slide>
      </div>
      <div className="hidden xl:inline mx-10 py-5  w-5/8 px-5 h-[400px]  mt-20">
        <Slide  slidesToScroll={1} slidesToShow={4} indicators={false}   >
        {data.map((item)=> (
          <NavLink to={"./buy"}>  <div
          onClick={()=>{
            setCartItems([item]);
           }} key={item.id} className='flex justify-center items-center mx-auto px-0 backdrop-blur-lg rounded-3xl '>
            <div  className='bg-transparent relative w-[95%] h-[370px]  rounded-lg shadow-xl
             transition delay-150 duration-300 ease-in-out hover:h-[450px] overflow-hidden 
             ' >

<div 
                 className='shh relative w-full h-[340px] rounded-sm 
                 bg-cover bg-center bg-no-repeat
                   before:absolute before:w-full before:h-[60px] before:bottom-[-12px] before:rounded-3xl before:bg-transparent
                 ' style={{
                  backgroundImage: `url(${item.img})`,borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "
                }} >  
                  </div>

                    
                 <div dir="rtl" className='relative top-[-40px] z-10 py-8 px-5 transition delay-150 duration-300 ease-in-out'>
                   <p className='text-sm text-start text-gray-800 font-bold'> {item.title1}</p> 
                   <Rating
         sx={{color:"#f5cd00",fontSize:"14px",alignItems:"start"}}
        name="simple-controlled"
        value={sumscore(item)}
      />
              

              { item.off !== "" ?<div className='flex flex-col justify-center'>
<div  dir="rtl" className='flex justify-between items-baseline border-b-2 border-gray-500 pb-1'>
<div className='flex justify-center items-center rounded-full bg-orange-500 h-[20px] w-[40px] '>
<p className='text-xs text-white font-bold text-center'>  {convertToPersian(item.off)}%</p>
</div>
<div   className='flex flex-col'>

<p className='text-lg text-center text-indigo-800 font-bold'> 
{addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
</p>
</div>

</div>
<p className='text-xs text-gray-600 text-center line-through decoration-gray-600  '>{item.price}</p>
</div>
:<p className='text-lg text-center text-indigo-800 font-bold  '>{item.price}</p>}
                   </div>
              </div>
              
            </div>
            </NavLink>
          ))} 
        </Slide>
      </div>
      </>
    )
}



