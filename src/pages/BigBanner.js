import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Slide } from 'react-slideshow-image';
import "../Products/Bag/Bag.css";
export default function BigBanner() {
  const [photo,setPhoto]=useState(1);
  const [type,setType]=useState(1);
  useEffect(()=> {
    const interval = setInterval(()=>{
      change();},4000);
      return()=>{
        clearInterval(interval);};},[type]);

        const change=()=>{
          if(type === 3){
            setType(1);
            return;
          }
          setType ((p) => p+1);
        };
   
        const returnPhotoURL=()=>{
          switch(photo){
            case 1: return "https://cdnfa.com/shikomod/dfb3/files/normal/9046247.webp";
            case 2: return "https://cdnfa.com/shikomod/dfb3/files/normal/9046245.webp";
            case 3: return "https://cdnfa.com/shikomod/dfb3/files/normal/9046246.webp";
            default: return null;
          }
       
        }
        const returnPhotoURL1=()=>{
          switch(photo){
            case 1: return "https://cdnfa.com/shikomod/dfb3/files/normal/9046247.webp";
            case 2: return "https://cdnfa.com/shikomod/dfb3/files/normal/9046245.webp";
            case 3: return "https://cdnfa.com/shikomod/dfb3/files/normal/9046246.webp";
            default: return null;
          }
       
        }
     const returnType=()=>{
      switch(type){
        case 1: return " لذت یک خرید خوب و راحت ";
        case 2: return "به روزترین و جدیدترین مدل ها";
        case 3: return "   بیشتریت تنوع در رنگ و مدل ";
        default: return null;
      }
    };
  return (
    <>

      

      
<div  data-aos="fade-right"
                 className='hidden md:flex shh relative w-full h-[340px] rounded-sm 
                 bg-cover bg-center bg-no-repeat
                   before:absolute before:w-full before:h-[60px] before:bottom-[-12px] before:rounded-3xl before:bg-transparent
                 ' style={{
                  backgroundImage: `url(${returnPhotoURL()})`
                }} >

                  </div>
                  <div  className='svg flex justify-center items-center self-center  w-screen h-[300px] md:h-[300px] mx-auto md:hidden' >
                  <div data-aos="zoom-out-right"  className='blurstyle rounded-2xl flex flex-col justify-end self-center w-full h-1/3   '> 
<p className='textblurb text-[22px]  font-bold text-white text-center  '> {returnType()} </p>
</div> 
               
   </div>
  </>

  );
      }