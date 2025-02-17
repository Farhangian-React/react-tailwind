
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
import "./Nav.css";
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

function Signin() {
  const [opendialog, setOpendialog] = React.useState(true);
  const [isLoading,setIsLoading]=useState(true);
  const [id,setId]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState({});
  const navigate=useNavigate();
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
      sessionStorage.setItem("id",id);
    navigate("/")
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

   const handleClickOpendialog = () => {
     setOpendialog(true);
   };
 
   const handleClosedialog = () => {
     setOpendialog(false);
   };

 return (
  <>


<Dialog
        open={opendialog}
        keepMounted
        minWidth="sm"
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
        <Box   sx={{width:{xs:"400px"},display:"flex",justifyContent:"start",flexDirection:"column",my:2,
    bgcolor:'white',direction:'rtl'}}
    
    > 
        <p  className='text-xl font-bold text-gray-700 text-center mt-1' >
       ورود به حساب کاربری
        </p>
       
        <form  noValidate onSubmit={handlesubmit}>
          <Grid container spacing={2} sx={{mt:1}}>
            <Grid  item xs={12}   >
              <Input
                defaultValue={null}
            placeholder=' نام کاربری'
                autoComplete="id"
                name="نام"
                variant="outlined"
                required
                fullWidth
                id="id"
                label=" نام کاربری"
                autoFocus
                value={id}
                onChange={(e)=> setId(e.target.value)}
               className='input'
               sx={{fontSize:"18px",}}
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.fname}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Input
              placeholder="رمز"
                variant="outlined"
                required
                fullWidth
                defaultValue={null}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                sx={{fontSize:"18px"}}
              />
               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.password}
             </Typography>
            </Grid>

            <FormControlLabel
             
             control={<Checkbox  value="allowExtraEmails"  />}
             label="مرا بخاطر بسپار"
             sx={{color:"#282828",fontSize:"36px"}}
           />
          
    
       
  </Grid>
 

          
         <div  className='w-full mx-auto flex flex-col justify-center my-5'>
          <button   onClick={loading} className='button1' type='submit' >  <span className='formbutton'> ورود  </span>   </button>

         
          </div> 
          <div className='flex flex-row justify-between'>
           <NavLink to={"/signup"} > <p className='text-xs text-center text-indigo-800 px-1 mt-3 font-bold'>بازگشت به صفحه ی ثبت نام</p> </NavLink>
  <NavLink className="nav"> 

                <p className='text-xs text-center text-indigo-800 px-1 mt-3 font-bold'> 
                یاد آوری رمز عبور
                </p>
                </NavLink></div>
          </form>
       
      </Box> 
        </DialogContent>
      </Dialog>
  </>
      )
    }
    
    export default Signin