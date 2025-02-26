import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Slide } from 'react-slideshow-image';
export default function BigBanner() {
  const [photo,setPhoto]=useState(1);
  const [type,setType]=useState(1);

  useEffect(()=> {
    const interval = setInterval(()=>{
      change();
     
    },3000);
      return()=>{
        clearInterval(interval);};},[photo,type]);
        const change=()=>{
          if(photo === 3 && type === 3){
            setPhoto(1);
            setType(1);
            return;
          }
          setPhoto((prev) => prev+1);
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
     const img=[{q:"https://cdnfa.com/shikomod/dfb3/files/normal/9046247.webp"},
     {q:"https://cdnfa.com/shikomod/dfb3/files/normal/9046245.webp"},
     {q:"https://cdnfa.com/shikomod/dfb3/files/normal/9046246.webp"}]
        
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
                  <div  className='flex md:hidden bg-white  h-[300px] -mt-[90px]' >
                  <div  data-aos="fade-right"
                 className='flex md:hidden shh relative w-full h-[300px] rounded-sm  mb-9
                 bg-contain bg-center bg-no-repeat
                 
                 ' style={{
                  backgroundImage: `url(${returnPhotoURL()})`
                }} >

                  </div></div>
               
   
  </>

  );
      }