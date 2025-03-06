import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { IoClose } from "react-icons/io5";
import DialogTitle from '@mui/material/DialogTitle';
import  {useContext,useState,useRef} from 'react';
import {CartBuyContext, CartContext} from '../Shared/Cart-Context';
import { Grid,Typography,Button, IconButton } from '@mui/material';
import  { Tabs, Tab } from "./Tabs";
import { Select, Option } from "@material-tailwind/react";
import Box from '@mui/material/Box';
import Tooltip from '@mui/joy/Tooltip';
import TopNavbar from '../Topnav/TopNavbar';
import Footer from '../pages/Footer';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { IoMdShare } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { MdAutoAwesomeMotion } from "react-icons/md";
import { MdTimeline } from "react-icons/md";
import { IoList } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import lego from "../img/bag.png";
import { Slide } from 'react-slideshow-image';
import { styled, useTheme } from '@mui/material/styles';
import { LuMessagesSquare } from "react-icons/lu";
import Rating from '@mui/material/Rating';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import { Textarea } from '@mui/joy';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import "../pages/pages.css";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function CartBuyShose() { 
  const [layout, setLayout] = React.useState(undefined);
  const [cartItems,setCartItems]=useContext(CartContext);
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext); 
  const [image,setImage]=useState();
  const [index, setIndex] = React.useState(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [name,setName]=useState("");
  const [comment,setComment]=useState("");
  const [score,setScore]=useState("");
  const [error,setError]=useState({});
  const[commenuser,setCommenuser]=useState([]);
  const boxcommentref=useRef();
  const buttoncommentref=useRef();
  const boxnotcomments=useRef();
  const displycomments11=useRef();
  const [opendialog, setOpendialog] = React.useState(false);
  const handleClickOpendialog = () => {
    setOpendialog(true);
  };
  const handleClosedialog = () => {
    setOpendialog(false);
  };
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
  const displycomment=()=>{
    boxcommentref.current.className="vis";
    displycomments11.current.className="hid";
  }
    const addcomments=()=>{
      if(commenuser.length===0){
  boxnotcomments.current.className="boxnotcomments"
      }
      else{
  boxcommentref.current.className="boxcommentref";
  displycomments11.current.className="disply";
      }
    }  
  const isvalidate = ()=>{
    let isvalid =true;
    let errmesage={};
    if( name === null ||  name === ""){
      isvalid = false;
errmesage.email="لطفا نام خود را وارد کنید";
    }
    if(comment === null || comment === ""){ 
      isvalid = false;
errmesage.comment="لطفا نظر خود را وارد کنید";
    }
    if(score === null || score === ""){ 
      isvalid = false;
errmesage.score="لطفا  امتیاز خود را وارد کنید";
    }
    if(!isvalid){
      toast.warning(errmesage);
    }
    setError(errmesage);
    return isvalid;
  }
  const sumscore=()=>{
     let total=0;
  commenuser.map(i=>{
   return  total += i.score;
   });
    return total / commenuser.length;
  }
useEffect(()=>{
  cartItems.map(i=>{ 
    fetch("https://servers-nahall.onrender.com/Allcommentsnahall")
    .then((res)=>
       res.json())
       .then((data)=>{
    data.map(j=>{
      if(j.idcomment === i.id){
        setCommenuser([...data.filter(j=>j.idcomment === i.id )])
      } 
      return cartItems;
    }
      )
    }
       )
    .catch(err=>toast.error(err))
    return console.log(cartItems);
  });
  cartItems.map(i=>{
    setImage(i.img);
    return console.log(cartItems);
  })  
  },[cartItems])
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(isvalidate()){
      //console.log(result);
      {cartItems.map(i=>{ 
        let idcomment=i.id;
  let result={idcomment,name,score,comment}
  fetch("https://servers-nahall.onrender.com/Allcommentsnahall",{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method:"POST",
    body:JSON.stringify(result)
}).then((res)=>{
toast.success("ثبت دیدگاه با موفقیت صورت گرفت") ; 
}).catch((err)=>{
    toast.error("");
})
      })}
          }
      }
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const addToCart=(p)=>{ 
    setCartItems([p]);  
   if(cartItemsBuy.includes(p)){
    setCartItemsBuy((currState)=>{
   return [...currState]});  
  }
  else{
    setCartItemsBuy((currState)=>{
      return [...currState,p]});
   }
   setOpen(true);
    } 
  return(
    <>
     {cartItems.map(i=>
        <Helmet>
        <link  rel="icon"  href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8sUcl-xSeJ2aDKi3dB9ylFBIxBLCo-JXLg&s' />
        <title>
           نهال شاپ / کفش  / 
        { i.title1}
           </title>
    </Helmet>
     )}
   <TopNavbar/>
   <div>
     <ToastContainer/>  
    </div>
    <Box  sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>
    {cartItems.map(i=>
    <Box container sx={{display:{xs:"flex",md:"none"},flexDirection:"row",bgcolor:'white',mx:{xs:1,md:5},my:2,borderRadius:'10px',direction:'rtl'}}>
      <p className='text-gray-600 text-xs py-1  px-1 ' > کفش /
       </p><p className='text-indigo-800  text-sm '  >{i.title1} </p>
    </Box>
    )}
     {cartItems.map(i=>
    <Box container sx={{display:{xs:"none",md:"flex"},flexDirection:"row",bgcolor:'white',mx:{xs:1,md:5},my:2,borderRadius:'10px',direction:'rtl'}}>
      <p className='text-gray-600 text-sm py-1 px-2' >محصولات / کفش /
       </p><p className='text-indigo-800  text-md'  >{i.title1} </p>
    </Box>
    )}
   <div dir='rtl' class="grid grid-cols-1 gap-5 lg:grid-cols-2 w-[95%] bg-white rounded-xl mx-auto ">
   <Box   sx={{mt:1, mx:{xs:1,lg:3},display:'flex',flexDirection:"column",justifyContent:'start',alignSelf:{xs:"center",lg:"start"},direction:'rtl'}} >
       <Box  sx={{mx:{xs:0,lg:2},mt:{xs:2,lg:4},pt:{lg:1},display:'flex',alignItems:'center',justifyContent:'center'}} >
          <Box 
           sx={{
            display:"flex",
            borderRadius:5,
            backgroundImage:`url(${image})`,
            backgroundPosition: 'center',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            height:{xs:"450px",sm:"650px"},
            width:"600px",
           my:{xs:0}
            }}
          >
            </Box>  
        </Box>
        {cartItems.map(i=>
         <div className="inline md:hidden mx-auto py-5 px-2 w-full  md:w-full  h-[150px] ">
        <Slide  slidesToScroll={1} slidesToShow={3} indicators={false}   >
        {i.imgslid.map(j=>
         <Link onClick={()=>setImage(j.imga)}>
<Box  
       sx={{
        display:"flex",
        borderRadius:5,
        backgroundImage:`url(${j.imga})`,
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        height:"100px",
        width:"90px",
       my:{xs:2,lg:1},p:0
       ,display:'flex',alignItems:'center',justifyContent:'center',mx:1}}> 
        </Box>
        </Link>
          )} 
        </Slide>
        </div>
      )}
      {cartItems.map(i=>
         <div className="hidden md:inline mx-auto py-5 px-10 w-[90%]  md:w-full  h-[150px] ">
        <Slide  slidesToScroll={1} slidesToShow={4} indicators={false}   >
        {i.imgslid.map(j=>
         <Link onClick={()=>setImage(j.imga)}>
<Box  
       sx={{
        display:"flex",
        borderRadius:5,
        backgroundImage:`url(${j.imga})`,
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        height:"100px",
        width:"100px",
       my:{xs:2,lg:1},p:0
       ,display:'flex',alignItems:'center',justifyContent:'center',mx:1}}> 
        </Box>
        </Link>
          )} 
        </Slide>
        </div>
      )}
        </Box> 
        <div dir="rtl" className='bg-white m-2 flex justify-center items-center'>
         {cartItems.map(i=> 
         <Box   sx={{mt:2,py:2,display:'flex', flexDirection:'column',justifyContent:'center' }}> 
            <div className='flex flex-col justify-start items-start  mb-2 mx-2'  > 
         <p  className='text-xs sm:text-sm text-gray-800 md:text-xl  mt-0 text-right font-bold'>{i.title1} </p>
           <Rating
        sx={{fontSize:"16px",py:2,mb:1}}
       name="simple-controlled"
       value={sumscore()}
     />
         </div>
         { i.off !== "" ?
         <div className='flex flex-col justify-start'>
          <div dir="ltr" className=' flex flex-row justify-end ' >
         <div className='flex justify-center items-center rounded-full  h-[20px] w-[120px] mb-2'  > 
         <p className='text-md text-gray-800 text-center  line-through decoration-2 decoration-orange-500'>{i.price} </p></div>
           <div  className='h-[20px] w-[40px] mb-2 flex  justify-center -mt-3'>
          <button    className='button1' type='submit' >  <span className='formbutton'>   {convertToPersian(i.off)}%  </span>   </button>
          </div>
          </div>
            <p className='text-2xl text-indigo-800 mt-3 text-right font-bold'   >
            {addCommas(convertToPersian((convertToEnglish(i.pricenum)-(convertToEnglish(i.pricenum)*i.off / 100))+''))} تومان 
           </p>
           </div>
:<p className='text-lg text-start text-indigo-800 font-bold '>{i.price}</p>}
          {cartItems.map(i=>
          <div  className="flex w-full flex-row justify-center mt-5 ">
            <div className='flex flex-col justify-start w-full mx-3 '>
              <p className='text-sm text-gray-700 text-start font-bold py-2 '> رنگ </p>
        <Select dir="ltr" size="sm" className='align-text-top h-full pb-6 border-2
         border-indigo-800 hover:border-orange-500 rounded-lg ' >
      {i.color.map(j=>   
        <Option>{j.c}  </Option>
         )}
      </Select>
      </div>
      <div className='flex flex-col w-full h-[120px]  mx-3'>
      <p className='text-sm text-gray-700 text-start font-bold py-2'> اندازه </p>
      <Select dir="ltr" size="sm" className='align-text-top h-full pb-6 border-2
       border-indigo-800 hover:border-orange-500 rounded-lg ' >
      {i.size.map(j=> 
        <Option>{j.z}</Option>
        )}
      </Select></div>
    </div>
          )}
           <div className='flex flex-row justify-start my-1 md:my-2 mx-2' >
          <button onClick={()=> addToCart(i)}  className='button1' type='submit' >  <span className='formbutton'>   افزودن به سبد خرید  </span>
          </button>
          </div> 
         <Box sx={{display:'flex',justifyContent:'center',py:4,mb:3,mx:2}}>
         <BsFillInfoCircleFill sx={{mt:0,pr:1.5,fontSize:'18px',color:'#4b4f4f'}}/>
         <p className='text-xs md:text-sm text-gray-600 px-2'> درخواست مرجوع کردن کالا در فروشگاه نهال با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد 
          (در صورت پلمپ بودن، کالا نباید باز شده باشد).</p>
          </Box>
          <Box sx={{m:2, display:'flex',justifyContent:'center'}}>
        <Tooltip color='warning'  title="اضافه به علاقمندی">
      <IconButton sx={{pl:2,color:'black' }}>
        <GrFavorite sx={{fontSize:"32px"}} />
      </IconButton>
    </Tooltip>
    <Tooltip title=" به اشتراک گذاری کالا ">
      <IconButton  sx={{pl:2,color:'black' }}>
         <IoMdShare  sx={{fontSize:"32px"}}/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" اطلاع رسانی شگفت انگیز ">
      <IconButton  sx={{pl:2,color:'black' }}>
         <MdNotificationsActive  sx={{fontSize:"32px"}}/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" نمودار قیمت">
      <IconButton  sx={{pl:2,color:'black' }}>
         <MdTimeline  sx={{fontSize:"32px"}}/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" مقایسه کالا ">
      <IconButton  sx={{pl:2,color:'black' }}>
        <MdAutoAwesomeMotion  sx={{fontSize:"32px"}}/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" افزودن به لیست ">
      <IconButton  sx={{pl:2,color:'black' }}>
   <IoList  sx={{fontSize:"32px"}}/>
         </IconButton>
    </Tooltip>   
    </Box>
           </Box>
         )}
     </div>     
</div>
<div dir='rtl' class=" w-[95%] bg-white rounded-xl mx-auto my-3 ">
<Tabs>
<Tab label="مشخصات محصول">
					<div className="py-4 w-3/4 bg-slate-400">
						<h2 className="text-lg font-medium mb-2">Tab 2 Content</h2>
						<p className="text-gray-700">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							mollitia, molestiae quas vel sint commodi repudiandae consequuntur
							voluptatum laborum numquam blanditiis harum quisquam eius sed odit
							fugiat iusto fuga praesentium optio, eaque rerum! Provident
							similique accusantium nemo autem. Veritatis obcaecati tenetur iure
							eius earum ut molestias architecto voluptate aliquam nihil,
							eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
							tenetur error, harum nesciunt ipsum debitis quas aliquid.
							Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
							laudantium molestias eos sapiente officiis modi at sunt excepturi
							expedita sint? Sed quibusdam recusandae alias error harum maxime
							adipisci amet laborum.
						</p>
					</div>
				</Tab>
				<Tab label="نظرات کاربران">
{cartItems.map(i=>
  <div dir='rtl' class="grid grid-cols-1 gap-8 lg:grid-cols-2 w-[80%] bg-white rounded-xl mx-auto ">
    <div className='bg-white self-center items-center'>
    <div dir="rtl" className='flex flex-row w-[100%] self-center bg-white whitespace-pre-wrap rounded-sm px-3 py-0 -mx-5 my-4 '>
     <LuMessagesSquare className='font-black w-9 h-9 mt-2.5 text-indigo-800   hover:text-orange-500'/> 
      <p className='text-lg font-bold text-slate-700 py-1 px-5' > نظرات کاربران
        <p  className='text-xs pt-1 text-indigo-800 hover:text-orange-500'> {i.title1} </p>
       </p>
    </div>
    <div dir="rtl" className='flex flex-row w-[90%] self-center bg-white whitespace-pre-wrap rounded-sm px-3 py-0 mx-3 my-4' >
    <p className='text-sm font-bold text-slate-700 py-1 px-5' > شما هم می توانید درباره ی این کالا نظر بدهید 
        <p  className='text-xs pt-1 text-slate-700'> برای ثبت نظر لازم است ابتدا وارد حساب کاربری خود شوید </p>
       </p>
    </div>
    <div dir="rtl" className=' mx-3 flex flex-row   self-center w-[100%] px-3 my-4'>
          <button ref={buttoncommentref} onClick={handleClickOpendialog}    className='button1' type='submit' >  <span className='formbutton'>  افزودن نظر  </span>   </button>
   <button ref={buttoncommentref} onClick={addcomments}  className='button1 mr-5' type='submit'  >  <span className='formbutton'> دیدگاه کاربران </span></button>
</div>
</div>
<div className='bg-white flex flex-col justify-start md:justify-center self-start md:self-center h-[400px] overflow-y-scroll'>
  
<Box  ref={boxnotcomments} sx={{display:"none"}}> <Typography variant='h6' sx={{color:"#585858",textAlign:"center",mx:5}}> دیدگاهی برای این محصول ثبت نشده است</Typography> 
       </Box>
     <Box ref={boxcommentref} sx={{ display:"none"}}>
      <div dir="rtl" className='shadowcomments  my-1 w-2/3 '  >
      <p  className='text-lg font-bold text-slate-700 text-center' >دید گاه ها...
      </p>
     </div>
       {commenuser.map(j=> 
  <Typography sx={{direction:"rtl"}}>
      <Typography variant='body2' sx={{mt:3}}>{j.name}</Typography>
      <Rating
        name="simple-controlled"
        value={j.score}
        sx={{fontSize:"14px",my:1}}
      />
      <Typography sx={{fontSize:"16px",color:"#585858"}}>{j.comment}</Typography>
      <Box className='linetinck'></Box>
     </Typography>
       )}     
   </Box>
<Button ref={displycomments11} onClick={displycomment} sx={{display:"none"}} >
  <p className='text-indigo-800 text-sm'>  ادامه ی نظرات...</p></Button> 
</div>
</div>
)}
</Tab>
        </Tabs>
</div>
<Dialog 
 sx={{display:{xs:"flex",sm:"none"},justifyContent:"center"}}
        open={opendialog}
        fullScreen
        keepMounted
        onClose={handleClosedialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{my:0, py:0 }}>
        <div className=' flex justify-between w-full'>
 <IconButton onClick={handleClosedialog} sx={{py:0 ,':hover':{bgcolor:"white"}}} >
 <IoClose className="block h-6 w-6 text-black hover:text-orange-400 "  />
 </IconButton> 
        <NavLink to={"/"}>
      <div className="flex justify-center mx-2">
<img src={lego} width={80} height={30}/>
</div></NavLink> </div>
        </DialogTitle>
        <DialogContent>
          <Box   sx={{width:{xs:"300px",sm:"400px",md:"500px"},display:"flex",justifyContent:"start",flexDirection:"column",my:2,
    bgcolor:'white',direction:'rtl'}}
    >   
    {cartItems.map(i=>
    <Box container sx={{mx:1,py:2,display:'flex',flexDirection:"column",bgcolor:'white',direction:'rtl'}}>
      <Typography  sx={{pl:0.6,py:0,color:"#3d3d3d",fontSize:"18px"}}>    نظر خود را با ما در میان بگذارید 
       </Typography>
       <Typography variant='body2' sx={{pt:0.4,color:"oklch(0.398 0.195 277.366)"}}>  {i.title1} </Typography>
       <Box className='linetinck'></Box>
    </Box>
    )}
         <form  noValidate onSubmit={handlesubmit}>
          <Box sx={{mt:1,mx:3}}>
              <Input
              sx={{fontSize:"16px",
              boxshadow:"rgba(32, 4, 142, 0.65) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(32, 4, 142, 0.65) 0px -2px 6px 0px inset"
            }}
            placeholder='   نام و نام خانوادگی'
                autoComplete="email"
                name='   نام و نام خانوادگی'
                variant="outlined"
                required
                id="firstName"
                label='   نام و نام خانوادگی'
                autoFocus
               className='input'
               value={name}
               onChange={(e)=> setName(e.target.value)}
              />
              <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
                {error.name}
              </Typography>
            <Textarea
            placeholder='نظر خود را وارد نمایید'
                 variant="outlined"
                 required
                 defaultValue={null}
                 value={comment}
                 onChange={(e)=> setComment(e.target.value)}
             rows="50" cols="30"
             sx={{width:"100%",height:"170px",fontSize:"16px",
             boxshadow:"rgba(32, 4, 142, 0.65) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(32, 4, 142, 0.65) 0px -2px 6px 0px inset"}}
             ></Textarea>
               <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
               {error.comment} 
             </Typography>
             <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}> امتیاز شما</FormLabel>
                <Rating
        name="simple-controlled"
        value={score}
        sx={{fontSize:"15px"}}
        onChange={(event, newValue) => {
          setScore(newValue)
          ;
        }}
      />
       <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
               {error.score}
             </Typography>
          <div  className='w-full mx-auto flex flex-col justify-center my-2'>
          <button    className='button1' type='submit' >  <span className='formbutton'> ثبت نظر  </span></button>
          </div> 
          </Box>
        </form>
        </Box> 
        </DialogContent>
      </Dialog>
      <Dialog 
 sx={{width:"90vw",display:{xs:"none",sm:"flex"},justifyContent:"center"}}
        open={opendialog}
        keepMounted
        onClose={handleClosedialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{my:0, py:0 }}>
        <div className=' flex justify-between w-full'>
 <IconButton onClick={handleClosedialog} sx={{py:0 ,':hover':{bgcolor:"white"}}} >
 <IoClose className="block h-6 w-6 text-black hover:text-orange-400 "  />
 </IconButton> 
        <NavLink to={"/"}>
      <div className="flex justify-center mx-2">
<img src={lego} width={80} height={30}/>
</div></NavLink> </div>
        </DialogTitle>
        <DialogContent>
          <Box   sx={{width:{sm:"400px",md:"500px"},display:"flex",justifyContent:"start",flexDirection:"column",my:2,
    bgcolor:'white',direction:'rtl'}}
    >   
    {cartItems.map(i=>
    <Box container sx={{mx:1,py:2,display:'flex',flexDirection:"column",bgcolor:'white',direction:'rtl'}}>
      <Typography  sx={{pl:0.6,py:0,color:"#3d3d3d",fontSize:"18px"}}>    نظر خود را با ما در میان بگذارید 
       </Typography>
       <Typography variant='body2' sx={{pt:0.4,color:"oklch(0.398 0.195 277.366)"}}>  {i.title1} </Typography>
       <Box className='linetinck'></Box>
    </Box>
    )}
         <form  noValidate onSubmit={handlesubmit}>
          <Box sx={{mt:1,mx:3}}>
              <Input
              sx={{fontSize:"16px",
              boxshadow:"rgba(32, 4, 142, 0.65) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(32, 4, 142, 0.65) 0px -2px 6px 0px inset"
            }}
            placeholder='   نام و نام خانوادگی'
                autoComplete="email"
                name='   نام و نام خانوادگی'
                variant="outlined"
                required
                id="firstName"
                label='   نام و نام خانوادگی'
                autoFocus
               className='input'
               value={name}
               onChange={(e)=> setName(e.target.value)}
              />
              <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
                {error.name}
              </Typography>
            <Textarea
            placeholder='نظر خود را وارد نمایید'
                 variant="outlined"
                 required
                 defaultValue={null}
                 value={comment}
                 onChange={(e)=> setComment(e.target.value)}
             rows="50" cols="30"
             sx={{width:"100%",height:"170px",fontSize:"16px",
             boxshadow:"rgba(32, 4, 142, 0.65) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(32, 4, 142, 0.65) 0px -2px 6px 0px inset"}}
             ></Textarea>
               <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
               {error.comment} 
             </Typography>
             <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}> امتیاز شما</FormLabel>
                <Rating
        name="simple-controlled"
        value={score}
        sx={{fontSize:"15px"}}
        onChange={(event, newValue) => {
          setScore(newValue)
          ;
        }}
      />
       <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
               {error.score}
             </Typography>
          <div  className='w-full mx-auto flex flex-col justify-center my-2'>
          <button    className='button1' type='submit' >  <span className='formbutton'> ثبت نظر  </span></button>
          </div> 
          </Box>
        </form>
        </Box> 
        </DialogContent>
      </Dialog>
</Box>
    <Footer/>
    </>
  );
}   
