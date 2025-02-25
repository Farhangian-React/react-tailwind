import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
export default function BigBanner() {
  const [photo,setPhoto]=useState(1);
  const [type,setType]=useState(1);
  useEffect(()=> {
    const interval = setInterval(()=>{
      change();},4000);
      return()=>{
        clearInterval(interval);};},[photo,type]);

        const change=()=>{
          if(photo === 4 && type === 4){
            setPhoto(1);
            setType(1);
            return;
          }
          setPhoto((prev) => prev+1);
          setType ((p) => p+1);
        };
        const returnPhotoURL=()=>{
          switch(photo){
            case 1: return "";
            case 2: return "";
            case 3: return "";
            case 4: return "";
            case 5: return "";
            default: return null;
          }
       
        };
        {/*
          https://media.istockphoto.com/id/155154659/photo/seamless-torn-cardboard-edges.jpg?s=2048x2048&w=is&k=20&c=kBP1ER6m760T7db_BIuyy2Ar8cB-19LFeykgOA1p3Mk=

          */} 
        
  return (
    <>
  <div className= 'flex flex-col  justify-center    bg-cover bg-center bg-no-repeat h-[30vh] md:h-[50vh] lg:h-screen mt-2'  style={{
                   backgroundImage: `url("https://cdn.pixabay.com/photo/2016/08/05/09/31/banner-1571858_1280.jpg")`,
                 }} >
      
         <Box 
      sx={{
        display:'flex',
        justifyContent:'center',
       position: "relative",
       backgroundImage: `url(${returnPhotoURL()})`,
       backgroundPosition: 'center',
       backgroundSize:'cover',
       backgroundRepeat: 'no-repeat',
       width:'93%',
       mx:"auto",
       mt:"20px",
       mb:"30px",
       height:"85vh",
       borderRadius:"30px"
       }} >
         

       
         <Box  sx={{mt:{xs:50,lg:22} ,mb:20, mx:5,width:{md:'1000px',lg:'1000px'},
         height:'400px',bgcolor:'transparent',opacity:{xs:0.8,lg:0.6}}}>
         
         </Box>
      </Box>
     </div>
  </>

  );
      }