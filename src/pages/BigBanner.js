import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
import { Typography } from '@mui/joy';
import { NavLink } from 'react-router-dom';
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
            case 1: return 'https://cadenza.ir/panel//Uploads/5/8/8/985581dd-06df-4b81-ba1d-b1c367d8a932.webp';
            case 2: return 'https://cadenza.ir/panel//Uploads/2/6/3/47241399-ca18-43ca-a01d-78c247dde407.webp';
            case 3: return "https://cadenza.ir/panel//Uploads/3/4/1/90de7fc7-2f2d-446b-bcad-64f620cccc07.webp";
            case 4: return " https://cadenza.ir/panel//Uploads/9/8/2/5b50075f-3520-4ef3-b25d-5f3bf3844be9.webp";
            case 5: return " https://cadenza.ir/panel//Uploads/6/5/2/eb341aa3-e8ff-4c53-8031-f7ffebe50b40.webp";
            default: return null;
          }
       
        }; 
        
  return (
    <>
  
      
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
     
    

    </>
  );
      }