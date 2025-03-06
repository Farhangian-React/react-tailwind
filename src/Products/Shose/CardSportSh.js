
import 'react-slideshow-image/dist/styles.css';
import React, {useContext,useState,useEffect, useRef} from 'react';
import {CartContext} from '../../Shared/Cart-Context';
import {CardData} from '../../Shared/Cart-Context';
import {CardDataShow} from '../../Shared/Cart-Context';
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from "react-toastify";
import { NavLink } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import FilterSh from './FilterSh';
import "../Bag/Bag.css";

function Tems({ currentItems,load }) {
  const [cartItems,setCartItems]=useContext(CartContext);
  const[datacomment,setDatacomment]=useState([]);
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
    if(nStr.length === 6){
      return   nStr.substring(0, 3) + "," + nStr.substring(3, 6);
    }
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
  const getData=()=>{
    fetch("https://servers-nahall.onrender.com/Allcommentsnahall")
    .then((res)=>
       res.json())
       .then((data)=>{
      setDatacomment(data);
      }
       )
    .catch(err=>console.log(err));
  }
  useEffect(()=>{ 
    getData();
  },[]) 
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
 return (
  <>
<div dir="rtl" className='flex flex-row justify-center w-[99%] mx-auto bg-white mt-5 '>
<div className='bg-white flex self-center lg:self-start h-screen w-[90%] lg:w-[35%] static lg:sticky top-[80px]'
>
<FilterSh/></div>
   
<div dir="rtl" class="flex justify-center flex-wrap ">
{
  load ? 
  <Backdrop
  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
  open
>
<CircularProgress color="inherit" />
</Backdrop>
:
currentItems && 
  currentItems.map((item) => (
 

    <NavLink to={"/buy"}> 
    
     <div
    onClick={()=>{
     setCartItems([item]);
    }}
    key={item.id} className='flex justify-center items-center mx-auto px-0 backdrop-blur-lg rounded-3xl '>
      <div  className='bg-white relative w-[320px] h-[355px]  rounded-lg shadow-xl
      transition delay-150 duration-300 ease-in-out hover:h-[450px] overflow-hidden mx-3 my-3
      ' >

         
<div  className='shh relative w-full h-[340px] rounded-sm 
            before:absolute before:w-full before:h-[60px] before:bottom-[-12px] before:rounded-2xl before:bg-white
            after:absolute after:right-0 after:bottom-[48px] after:w-[55px] after:h-[55px] after:bg-transparent after:rounded-full  *
        
           bg-cover bg-center bg-no-repeat py-0.5 px-2'  style={{
            backgroundImage: `url(${item.img})`,
          }}>
             {item.off !=="" ?
             <div  className="button1 mt-5 flex flex-row  justify-center items-center h-[31px] w-[33px]"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
        <div className='formbutton w-[33px] h-[30px]'  style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}>
        <p className='text-xs  font-bold text-center'> off</p>
          </div>
        </div>
        :
        <div  className="button1 hidden   justify-center items-center h-[35px] w-[35px]"
        style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
     
      </div>
            }
           </div>    
           <div dir="rtl" className='relative top-[-40px] z-10 py-2 px-5 transition delay-150 duration-300 ease-in-out'>
           
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

  </div>
  </div>
  </>
);
    }

export default function CardSportSh({ itemsPerPage }) {
const [data,setData]=useContext(CardData);
const [datashow,setDatashow]=useContext(CardDataShow);
const [isLoading,setIsLoading]=useState(true);

const getData=()=>{
fetch('https://servers-nahall.onrender.com/Allproductsnahall' ).then((res)=>{
  return res.json();
}).then((result)=>{
  setData(result.filter(i=>i.product === "shos" && i.type === "sport"));
  setDatashow(result.filter(i=>i.product === "shos" && i.type === "sport"));
  console.log(datashow);
  setIsLoading(false);
}).catch((err)=>{
toast.error(" ورود ناموفق داده");
setIsLoading(false);
});
  }


useEffect( ()=>{
  getData();


},[])
 
  const [itemOffset, setItemOffset] = useState(0);
const endOffset = itemOffset + itemsPerPage;
const currentItems = datashow.slice(itemOffset, endOffset);
const pageCount = Math.ceil(datashow.length / itemsPerPage);
const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % datashow.length;
  setItemOffset(newOffset);
};
return (
  <>
    <Tems currentItems={currentItems} load={isLoading}  />
    <ReactPaginate
      breakLabel="..."
      nextLabel=" >>"
      onPageChange={handlePageClick}
      pageRangeDisplayed={7}
      pageCount={pageCount}
      previousLabel="<<"
      renderOnZeroPageCount={null}
      className='pagination'
      pageClassName='paginationli'
      previousClassName='previousStyle'
      nextClassName='nextStyle'
    />
  </>
);
}

