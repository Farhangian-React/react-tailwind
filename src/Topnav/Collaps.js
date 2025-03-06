import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import { FaAngleDown } from "react-icons/fa6";
import {ListItem,List} from "@material-tailwind/react";
import { RiAdminLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
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
function Collaps() {
  const [open, setOpen] = React.useState(false);
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
   const handleDrawerOpen = () => {
     setOpen(true);
   };
 
   const handleDrawerClose = () => {
     setOpen(false);
   }; 

 return (
  <>
  
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
  <div className=' flex justify-between w-full  '>
 
<IconButton onClick={handleDrawerClose} sx={{py:0 ,':hover':{bgcolor:"white"}}} >
<IoClose className="block h-6 w-6 text-black hover:text-orange-500 "  />
</IconButton> <div>
<a href="/">
<div className="flex justify-center mx-0">
<img src={lego} width={50} height={20}/>
</div>
</a>
</div>
</div>
</DrawerHeader>
<Divider />
<div className='flex flex-col justify-start mr-2'>

      <Button
      width="340px"
        id="basic-button"
        aria-controls={open1 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        onClick={handleClick1}
        sx={{'&:hover':{bgcolor:"white",color:"#ff6633"},color:"black",width:"326px",alignSelf:"start",display:"flex",justifyContent:"space-between",direction:"rtl",px:3,fontSize:"18px",py:1}}
    
      > 
   
        کفش
         <FaAngleDown className=' mt-2 w-3.5 h-3.5 hover:text-orange-500'/>
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
        <NavLink to={"/allshose"}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}>همه ی کفش ها</MenuItem></NavLink>
        <NavLink to={"/kalezhsh"}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}>کالج</MenuItem></NavLink>
        <NavLink to={"/sandalsh"}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}>صندل</MenuItem></NavLink>
        <NavLink to={"/majlesish"}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}>مجلسی</MenuItem></NavLink>
        <NavLink to={"/botsh"}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}> بوت</MenuItem></NavLink>
        <NavLink to={"/sportsh"}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose1}>اسپورت</MenuItem></NavLink>
      </Menu>
      
      <Button
      width="340px"
        id="basic-button"
        aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}
        sx={{'&:hover':{bgcolor:"white",color:"#ff6633"},color:"black",width:"326px",alignSelf:"start",display:"flex",justifyContent:"space-between",direction:"rtl",px:3,fontSize:"18px",py:1}}
    
      > 
   
        کیف
         <FaAngleDown className='mt-2 w-3.5 h-3.5 hover:text-orange-500'/>
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
       <NavLink to={"/allbag"}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}>همه ی کیف ها</MenuItem></NavLink>
       <NavLink to={"/dastib "}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}>کیف دستی</MenuItem></NavLink>
       <NavLink to={"/doshib "}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}>کیف دوشی</MenuItem></NavLink>
       <NavLink to={"/kolehb "}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}>کوله پشتی</MenuItem></NavLink>
       <NavLink to={"/polb"}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}> کیف پول</MenuItem></NavLink>
       <NavLink to={"/sportb "}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose2}>اسپورت</MenuItem></NavLink>
      </Menu>
      
      <Button
      width="340px"
        id="basic-button"
        aria-controls={open3 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open3 ? 'true' : undefined}
        onClick={handleClick3}
        sx={{'&:hover':{bgcolor:"white",color:"#ff6633"},color:"black",width:"326px",alignSelf:"start",display:"flex",justifyContent:"space-between",
        direction:"rtl",px:3,fontSize:"18px",py:1}}
    
      > 
   
        اکسسوری
         <FaAngleDown className='mt-2 w-3.5 h-3.5 hover:text-orange-500 '/>
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
         <NavLink to={"/allack"}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose3}>همه ی اکسسوری ها</MenuItem></NavLink>
         <NavLink to={"/glassa"}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose3}>عینک</MenuItem></NavLink>
         <NavLink to={"/atra"}><MenuItem dir='rtl' sx={{width:"310px"}} onClick={handleClose3}>عطر و ادکلن</MenuItem></NavLink>
       
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
<div className="sticky bottom-0 w-[95%] mx-auto h-[50px]  flex justify-center items-center
 bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100 ">

<NavLink to={"/signup"}  style={{display:"flex",textAlign:"center", cursor:"pointer", alignItems:"center",fontWeight:600}}
>
<LuShoppingCart className='font-black w-7 h-7  hover:text-orange-500 mx-2' />
</NavLink>
<NavLink to={"/signup"}  style={{display:"flex",textAlign:"center", cursor:"pointer", alignItems:"center",fontWeight:600}}
>
<RiAdminLine className='font-black w-7 h-7  hover:text-orange-500 mx-2 ' />

</NavLink>




</div>
</Drawer>

<div>
<a href="/">
<div className="flex justify-center mx-0">
<img src={lego} width={40} height={20}/>
</div>
</a>
</div>
   </>
 )
}

export default Collaps
