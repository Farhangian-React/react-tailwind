
import React, {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from '@mui/joy/Input';
import Grid from "@mui/material/Grid";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { GoSignIn } from "react-icons/go";
import { GrBasket } from "react-icons/gr";
import {Typography} from "@material-tailwind/react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import lego from "../img/bag.png";
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export default function Signup() {
    const [opendialog, setOpendialog] = React.useState(true);
  const [id,setId]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState({});
    const navigate=useNavigate();
    const isvalidate = ()=>{
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
 
    const handlesubmit=(e)=>{
    
e.preventDefault();
let result={id,fname,lname,email,password};
  if(isvalidate()){
//console.log(result);
fetch("https://servers-nahall.onrender.com/nahallusers",{
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:"POST",
      body:JSON.stringify(result)
    }).then((res)=>{
    toast.success(" عضویت با موفقیت صورت گرفت") ; 
    navigate("/signin")
    }).catch((err)=>{
      toast.error("");
    })
       
            }
        }


        const handleClickOpendialog = () => {
            setOpendialog(true);
          };
        
          const handleClosedialog = () => {
            setOpendialog(false);
          };
  return (
    <>

<Dialog
sx={{display:{xs:"flex",sm:"none"},justifyContent:"center",height:"95vh"}}
        fullScreen
        open={opendialog}
        keepMounted
        onClose={handleClosedialog}
        aria-describedby="alert-dialog-slide-description"
      >
          <div>
     <ToastContainer/>  
    </div>
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
  <p  className='text-xl font-bold text-gray-700 text-center my-2' >
       عضویت در سایت نهال
        </p>
      
        <form  noValidate onSubmit={handlesubmit}>
          <Grid container spacing={2} sx={{mt:1}}>
         
            <Grid  item xs={12} sm={6}  >
              <Input
            placeholder='نام'
                autoComplete="fname"
                name="نام"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="نام"
                autoFocus
                value={fname}
                onChange={(e)=> setFname(e.target.value)}
               className='input'
               sx={{fontSize:"18px"}}
              />
              <p className='text-xs text-red-700 mt-1'>
               
                {error.fname}
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
              placeholder='نام خانوادگی'
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lname}
                onChange={(e)=> setLname(e.target.value)}
                sx={{fontSize:"18px"}}
              />
              <p className='text-xs text-red-700 mt-1'>
               
               {error.lname}
             </p>
            </Grid>
            <Grid  item xs={12} sm={6}  >
              <Input
            placeholder='نام کاربری'
                autoComplete="fname"
                name=" نام کاربری"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="نام "
                defaultValue={""}
                value={id}
                onChange={(e)=> setId(e.target.value)}
                sx={{fontSize:"18px"}}
              
              />
         <p className='text-xs text-red-700 mt-1'>
               
                {error.fname}
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
              placeholder="رمز" 
              autoComplete="current-password"
              name="password"
              variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                defaultValue={""}
                value={password}
                type="password"
                sx={{fontSize:"18px"}}
               
               
                onChange={(e)=> setPassword(e.target.value)}
              />
              <p className='text-xs text-red-700 mt-1'>
               
               {error.password}
             </p>
            </Grid>
            <Grid item xs={12}>
     
              <Input
              placeholder='آدرس ایمیل'
                variant="outlined"
                required
                fullWidth
                defaultValue={null}
              
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                sx={{fontSize:"18px"}}
              />
               <p className='text-xs text-red-700 mt-1'>
               
               {error.email}
             </p>
            </Grid>
           
            <Grid item xs={12}>
            <FormControlLabel
             
             control={<Checkbox  value="allowExtraEmails"  />}
             label="ثبت نام و استفاده از سایت نهال به معنی پذیرش قوانین و مقررات آن است."
             sx={{color:"#414141",fontSize:"30px"}}
           />
            </Grid>
          </Grid>
              
          <div  className='w-full mx-auto flex flex-col justify-center my-5'>
          <button    className='button1' type='submit' >  <span className='formbutton'> عضویت  </span>   </button>

         
          </div> 
          <div className='flex flex-row justify-center'>
           <NavLink to={"/signin"} > <p className='text-xs text-center text-indigo-800 px-1 mt-3 font-bold'>بازگشت به صفحه ی ورود</p> </NavLink>
  <NavLink className="nav"> 
                </NavLink></div>
        </form>
     
    </Box>
        </DialogContent>
      </Dialog>
      
<Dialog
sx={{display:{xs:"none",sm:"flex"},justifyContent:"center",width:"90vw"}}
        
        open={opendialog}
        keepMounted
        onClose={handleClosedialog}
        aria-describedby="alert-dialog-slide-description"
      >
          <div>
     <ToastContainer/>  
    </div>
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
  <p  className='text-xl font-bold text-gray-700 text-center my-2' >
       عضویت در سایت نهال
        </p>
      
        <form  noValidate onSubmit={handlesubmit}>
          <Grid container spacing={2} sx={{mt:1}}>
         
            <Grid  item xs={12} sm={6}  >
              <Input
            placeholder='نام'
                autoComplete="fname"
                name="نام"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="نام"
                autoFocus
                value={fname}
                onChange={(e)=> setFname(e.target.value)}
               className='input'
               sx={{fontSize:"18px"}}
              />
              <p className='text-xs text-red-700 mt-1'>
               
                {error.fname}
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
              placeholder='نام خانوادگی'
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lname}
                onChange={(e)=> setLname(e.target.value)}
                sx={{fontSize:"18px"}}
              />
              <p className='text-xs text-red-700 mt-1'>
               
               {error.lname}
             </p>
            </Grid>
            <Grid  item xs={12} sm={6}  >
              <Input
            placeholder='نام کاربری'
                autoComplete="fname"
                name=" نام کاربری"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="نام "
                defaultValue={""}
                value={id}
                onChange={(e)=> setId(e.target.value)}
                sx={{fontSize:"18px"}}
              
              />
         <p className='text-xs text-red-700 mt-1'>
               
                {error.fname}
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
              placeholder="رمز" 
              autoComplete="current-password"
              name="password"
              variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                defaultValue={""}
                value={password}
                type="password"
                sx={{fontSize:"18px"}}
               
               
                onChange={(e)=> setPassword(e.target.value)}
              />
              <p className='text-xs text-red-700 mt-1'>
               
               {error.password}
             </p>
            </Grid>
            <Grid item xs={12}>
     
              <Input
              placeholder='آدرس ایمیل'
                variant="outlined"
                required
                fullWidth
                defaultValue={null}
              
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                sx={{fontSize:"18px"}}
              />
               <p className='text-xs text-red-700 mt-1'>
               
               {error.email}
             </p>
            </Grid>
           
            <Grid item xs={12}>
            <FormControlLabel
             
             control={<Checkbox  value="allowExtraEmails"  />}
             label="ثبت نام و استفاده از سایت نهال به معنی پذیرش قوانین و مقررات آن است."
             sx={{color:"#414141",fontSize:"30px"}}
           />
            </Grid>
          </Grid>
              
          <div  className='w-full mx-auto flex flex-col justify-center my-5'>
          <button    className='button1' type='submit' >  <span className='formbutton'> عضویت  </span>   </button>

         
          </div> 
          <div className='flex flex-row justify-center'>
           <NavLink to={"/signin"} > <p className='text-xs text-center text-indigo-800 px-1 mt-3 font-bold'>بازگشت به صفحه ی ورود</p> </NavLink>
  <NavLink className="nav"> 
                </NavLink></div>
        </form>
     
    </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
