import React, {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { GoSignIn } from "react-icons/go";
import { GrBasket } from "react-icons/gr";
import NavbarMenuItem from './NavbarMenuItem';
import { FaAngleDown } from "react-icons/fa6";
import {
  ListItem,
  List,
  
} from "@material-tailwind/react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import lego from "../img/bag.png";
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const drawerWidth = 340;
function TopNavbar() {
  const [open, setOpen] = React.useState(false);
  const [isLoading,setIsLoading]=useState(true);
  const [id,setId]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState({});
  const navigate=useNavigate();
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  
  const [anchorE3, setAnchorE3] = React.useState(null);
  const open3 = Boolean(anchorE3);
  const handleClick3= (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };


  const isvalidate1 = ()=>{
    let isvalid =true;
    let errmesage={};
    if(fname === null || fname === ""){  
      isvalid = false;
errmesage.fname="لطفا نام را وارد کنید";
    }
    if(lname === null || lname === ""){
      
      isvalid = false;
errmesage.lname="لطفا نام خانوادگی را وارد کنید";
    }
    if(email === null || email === ""){
      
      isvalid = false;
errmesage.email="لطفا آدرس ایمیل را وارد کنید";
    }
    if(password === null || password === ""){
      
      isvalid = false;
errmesage.password="لطفا رمز را وارد کنید";
    }else
    if(password.length<6){
      isvalid = false;
      errmesage.password="رمز باید حداقل ۶ کاراکتر باشد";

    }
    if(!isvalid){
      toast.warning(errmesage);
    }
    setError(errmesage);
    return isvalid;
  }

  const handlesubmit1=(e)=>{
  
e.preventDefault();

if(isvalidate1()){
  let result={id,fname,lname,email,password};
//console.log(result);
fetch("https://serverjson-project.onrender.com/nahallusers",{
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method:"POST",
  body:JSON.stringify(result)
}).then((res)=>{
toast.success(" عضویت با موفقیت صورت گرفت") ; 
}).catch((err)=>{
  toast.error("");
})
   
        }
    }


  const isvalidate = ()=>{
    let isvalid =true;
    let errmesage={};
    if(id === null || id === ""){  
      isvalid = false;
errmesage.id="لطفا نام کاربری را وارد کنید";
    }
    
    if(password === null || password === ""){
      
      isvalid = false;
errmesage.password="لطفا رمز را وارد کنید";
    }else
    if(password.length<6){
      isvalid = false;
      errmesage.password="رمز باید حداقل ۶ کاراکتر باشد";

    }
    if(!isvalid){
      toast.warning(errmesage);
    }
    setError(errmesage);
    return isvalid;
  }

  const handlesubmit=(e)=>{
e.preventDefault();
if(isvalidate()){
fetch("https://serverjson-project.onrender.com/nahallusers/"+id).then((res)=>{
  return res.json();
}).then((resp)=>{
  if(Object.keys(resp).length===0){
    toast.error("لطفا نام کاربری  را صحیح وارد کنید");
  }
  else{
    if(resp.password === password){
      toast.success("ورود با موفقیت");
    navigate("/");
    }
    else{
      toast.error("  لطفا ابتدا عضو شوید ");
    }
  }
  setIsLoading(false);
}).catch((err)=>{
toast.error("ورود ناموفق");
setIsLoading(false);
});
  }
}
const loading=()=>{
  isLoading ? 
  <Backdrop
  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
  open
>
<CircularProgress color="inherit" />
</Backdrop>
:
navigate("/")
}
 
 
   const handleDrawerOpen = () => {
     setOpen(true);
   };
 
   const handleDrawerClose = () => {
     setOpen(false);
   }; 

 return (
  <>
  

<nav dir='rtl' className='  relative flex justify-between w-screen bg-white h-[60px]  drop-shadow-lg pt-3  px-10  '>
<div dir='ltr' className="w-2/3">
	<form className="flex items-center">   
        <label for="simple-search" className="sr-only">Search</label>
        <div dir='rtl' className="relative w-full ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-10 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" className=" bg-neutral-200 border border-gray-100
             text-gray-900 text-sm rounded-lg
             hover:border-2 hover:border-orange-500 block w-full pl-10 p-2.5" placeholder="جستجو ..." required />
        </div>
        <button  type="submit" class=" hidden md:flex p-2.5 ml-2 text-sm font-medium text-gray-600 bg-neutral-200 rounded-lg border border-r-red-800-700 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg></button>
    </form>
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>
<div className=" hidden md:flex  justify-between pr-4 py-0 h-8 ">
<div   className=' flex border-2 border-gray-300  py-4 mt-1 rounded hover:border-2 hover:border-orange-500 px-2'>
<NavLink to={"/signup"}  style={{display:"flex",textAlign:"center", cursor:"pointer", alignItems:"center",fontWeight:600}}
>
<GoSignIn className='flex lg:w-5 lg:h-5 mx-2 font-black' />
<span className="text-sm font-black">
 ورود / ثبت نام
</span>
</NavLink>
</div>
<div className='mt-0'>
<a
className="block cursor-pointer shrink-0 rounded-lg p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-black hover:border hover:bg-red-300"
>
<GrBasket className='font-black w-5 h-5  hover:text-orange-500' />
</a>
</div>
</div>
<div className=" md:hidden  justify-center px-1 py-2 h-8 ">
<div  className=' flex   py-0 mt-1  '>
<NavLink to={'/signup'} style={{display:"flex",textAlign:"center", cursor:"pointer", alignItems:"end",fontWeight:600}}
>
<GoSignIn className='font-black flex lg:w-5 lg:h-5 mx-2  hover:text-orange-500' />
<span className="font-black text-sm ">
 ورود 
</span>
</NavLink>
<a className='pr-4'
>
<GrBasket className='font-bold w-5 h-5  hover:text-orange-500 ' />
</a>
</div>
</div>
</nav>
   <nav dir='ltr' className='sticky top-0 hidden md:flex   z-20 mt-0 w-screen bg-white h-[70px] mx-auto   '>
   <NavbarMenuItem/>
</nav>
<nav dir="rtl" className= " flex  border-b-red-600 md:hidden w-screen bg-white h-[60px] px-10  justify-between items-center ">
<div className="   flex items-center ">
<button  onClick={handleDrawerOpen} className="inline-flex items-center justify-center p-2 rounded-md text-gray-900  hover:bg-orange-500 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <IoClose className="block h-6 w-6" aria-hidden="true"  />
      ) : (
        <IoMenu className="block h-6 w-6" aria-hidden="true" />
      )}
    </button>
</div>
<Drawer
sx={{
width: drawerWidth,
flexShrink: 0,
'& .MuiDrawer-paper': {
width: drawerWidth,
},
}}
variant="persistent"
anchor="right"
open={open}
dir='ltr'
>
<DrawerHeader >
  <div className=' flex justify-between w-full '>
 
<IconButton onClick={handleDrawerClose} sx={{py:0 ,':hover':{bgcolor:"white"}}} >
<IoClose className="block h-6 w-6 text-black hover:text-orange-500 "  />
</IconButton> <div>
<a href="/">
<div className="flex justify-center mx-0">
<img src={lego} width={80} height={20}/>
</div>
</a>
</div>
</div>
</DrawerHeader>
<Divider />
<div className='flex flex-col justify-start'>

      <Button
      width="340px"
        id="basic-button"
        aria-controls={open1 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        onClick={handleClick1}
        sx={{color:"black",width:"340px",alignSelf:"start",display:"flex",justifyContent:"space-between",direction:"rtl",px:3,fontSize:"18px"}}
    
      > 
   
        کفش
         <FaAngleDown className='mt-2 '/>
          </Button>
    
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open1}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
       
        }}  
        sx={{ml:2}}
      >
        <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}>همه ی کفش ها</MenuItem></NavLink>
        <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}>کالج</MenuItem></NavLink>
        <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}>صندل</MenuItem></NavLink>
        <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}>مجلسی</MenuItem></NavLink>
        <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}> بوت</MenuItem></NavLink>
        <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}>اسپورت</MenuItem></NavLink>
      </Menu>
      
      <Button
      width="340px"
        id="basic-button"
        aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}
        sx={{color:"black",width:"340px",alignSelf:"start",display:"flex",justifyContent:"space-between",direction:"rtl",px:3,fontSize:"18px"}}
    
      > 
   
        کیف
         <FaAngleDown className='mt-2 '/>
          </Button>
    
      <Menu
        id="basic-menu"
        anchorEl={anchorE2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ml:2}}
      >
       <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}>همه ی کیف ها</MenuItem></NavLink>
       <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}>کیف دستی</MenuItem></NavLink>
       <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}>کیف دوشی</MenuItem></NavLink>
       <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}>کوله پشتی</MenuItem></NavLink>
       <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}> کیف پول</MenuItem></NavLink>
       <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}>اسپورت</MenuItem></NavLink>
      </Menu>
      
      <Button
      width="340px"
        id="basic-button"
        aria-controls={open3 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open3 ? 'true' : undefined}
        onClick={handleClick3}
        sx={{color:"black",width:"340px",alignSelf:"start",display:"flex",justifyContent:"space-between",direction:"rtl",px:3,fontSize:"18px"}}
    
      > 
   
        اکسسوری
         <FaAngleDown className='mt-2 '/>
          </Button>
    
      <Menu
        id="basic-menu"
        anchorEl={anchorE3}
        open={open3}
        onClose={handleClose3}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ml:2}}
      >
         <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose3}>همه ی اکسسوری ها</MenuItem></NavLink>
         <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose3}>عینک</MenuItem></NavLink>
         <NavLink><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose3}>عطر و ادکلن</MenuItem></NavLink>
       
      </Menu>
</div>
<Divider/>
<List  className='flex justify-start text-right'>
  <NavLink to={"/about"}>
<ListItem dir='rtl' disablePadding >
  <ListItemButton sx={{fontSize:"14px", fontWeight:600,'&:hover':{bgcolor:"white",color:"#ff6633"}}}>
   همه ی محصولات
  
  </ListItemButton>
</ListItem></NavLink>
<NavLink to={"/suitcase"}>
  <ListItem dir='rtl'disablePadding >
  <ListItemButton sx={{fontSize:"14px",fontWeight:600,'&:hover':{bgcolor:"white",color:"#ff6633"}}}>
   چمدان و ساک دستی

  </ListItemButton>
</ListItem></NavLink>
<NavLink to={"/feedback"}>
<ListItem dir='rtl'  disablePadding >
  <ListItemButton sx={{fontSize:"14px",fontWeight:600,'&:hover':{bgcolor:"white",color:"#ff6633"}}}>
   محصولات شگفت انگیز

  </ListItemButton>
</ListItem></NavLink>
<NavLink>
<ListItem dir='rtl'  disablePadding >
  <ListItemButton sx={{fontSize:"14px",fontWeight:600,'&:hover':{bgcolor:"white",color:"#ff6633"}}}>
   تماس با ما

  </ListItemButton>
</ListItem></NavLink>

</List>
</Drawer>
<div>
<a href="/">
<div className="flex justify-center mx-2">
<img src={lego} width={60} height={20}/>
</div>
</a></div>
</nav>
   </>
 )
}

export default TopNavbar
