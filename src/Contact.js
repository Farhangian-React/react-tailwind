import React from 'react';
import Footer from './pages/Footer';
import TopNavbar from './Topnav/TopNavbar';
import { PageTitle } from './Title/PageTitle';
import { FaLocationDot } from "react-icons/fa6";
import Box from '@mui/material/Box';
import { LuMessagesSquare } from "react-icons/lu";
import { FaPhone } from "react-icons/fa";
import  {useState} from 'react';
import "react-toastify/dist/ReactToastify.css";
import { Textarea } from '@mui/joy';
import {Grid,Typography} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
function Contact() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [callnum,setCallnum]=useState("");
    const [massage,setMassage]=useState("");
    const [comment,setComment]=useState("");
    const [error,setError]=useState({});
      const isvalidate = ()=>{
        let isvalid =true;
        let errmesage={};
        
        if(name === null || name === ""){  
          isvalid = false;
    errmesage.name="لطفا نام و نام خانوادگی خود را وارد کنید";
        }
        if( email === null ||  email === ""){
          isvalid = false;
    errmesage.email="لطفا آدرس ایمیل خود را وارد کنید";
        }
        if( callnum === null || callnum === ""){
          isvalid = false;
    errmesage.callnum="لطفا شماره تماس خود را وارد کنید";
        }
        if(massage === null || massage === ""){
          isvalid = false;
    errmesage.massage="لطفا عنوان پیام خود را وارد کنید";
        }
        if(comment === null || comment === ""){ 
          isvalid = false;
    errmesage.comment="لطفا درخواست خود را وارد کنید";
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
          //console.log(result);
         
      let result={name,email,callnum,massage,comment}
      fetch("https://serverjson-project.onrender.com/Allpopularquestions",{
        method:"POST",
        headers:{"content-type":"aplication/jopes"},
        body:JSON.stringify(result)
    }).then((res)=>{
    toast.success("ثبت درخواست با موفقیت صورت گرفت") ; 
    }).catch((err)=>{
        toast.error("");
    })
              }
          }
    
     
  return (
    <>
    <PageTitle title='نهال شاپ/ فرم تماس با ما  ' description=' نهال شاپ '/>
    <TopNavbar />

    <div className='toast'>
     <ToastContainer />  
    </div>
<div dir='rtl'
 className='bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100  flex justify-start lg:justify-start w-full h-auto flex-col lg:flex-row items-center self-center pt-6 md:mt-3 mx-auto'>

<div className=' w-[95vw] lg:w-[50vw] flex justify-center flex-col self-start mx-auto px-3 py-3'>
    <div className='  flex justify-center self-center w-[300px] md:w-[450px] h-[100px] flex-col border-b-2 border-b-gray-500 px-3 py-3'>  
<div className='flex flex-row justify-center'
>
<p className=' text-[16px] md:text-[20px] lg:text-[26px] font-bold text-gray-700 text-center  '>
فرم تماس با ما
</p></div>
<p className=" text-sm md:text-md lg:text-lg text-gray-700 text-center mt-2">
جهت ارسال نظرات و پیشنهادات و انتقادات    
</p>
</div> 

<form  noValidate onSubmit={handlesubmit}>
<Grid container spacing={2} sx={{mt:1}}>
          <Grid  item xs={12} md={6}   >
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}>  نام و نام خانوادگی  </FormLabel>
              <Input
            color="warning"
            placeholder=' نام و نام خانوادگی '
               
                name="نام"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label=" نام و نام خانوادگی "
                autoFocus
               className='input'
               value={name}
               onChange={(e)=> setName(e.target.value)}
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.name}
              </Typography>
              </Grid>
              <Grid  item xs={12} md={6}    >
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}> آدرس ایمیل </FormLabel>
              <Input
                color="warning"
              placeholder='آدرس ایمیل'
                variant="outlined"
                required
                fullWidth
                defaultValue={null}
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.email}
             </Typography>
             </Grid>
             <Grid  item xs={12} md={6}    >
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}> شماره تماس  </FormLabel>
              <Input
                color="warning"
              placeholder=' شماره تماس'
                variant="outlined"
                required
                fullWidth
                defaultValue={null}
                value={callnum}
                onChange={(e)=> setCallnum(e.target.value)}
              
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.callnum}
             </Typography>
             </Grid>
             <Grid  item xs={12}   >
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}> عنوان پیام</FormLabel>
              <Input
                color="warning"
            type='text'
                variant="outlined"
                required
                placeholder=' عنوان '
                defaultValue={null}
                value={massage}
                onChange={(e)=> setMassage(e.target.value)}
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.massage}
             </Typography>
             </Grid>

           <Grid item xs={12} >
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}>  توضیحات  </FormLabel>
            <Textarea
             color="warning"
                 variant="outlined"
                 required
                 placeholder='پیام '
                 defaultValue={null}
                 value={comment}
                 onChange={(e)=> setComment(e.target.value)}
             rows="50" cols="30"
             sx={{width:"100%",height:"200px"}}
             ></Textarea>

               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               {error.comment}
              
             </Typography>
           
            </Grid>
<Grid item xs={12} sx={{display:"flex",justifyContent:"center",alignSelf:"center",my:1.5}} >
<button className='button1' type='submit' >  <span className='formbutton'>   ثبت و ارسال </span>   </button>
        </Grid>
          </Grid>
        </form>
        


   </div> 
   <div  className='w-[95vw] lg:w-[50vw] flex justify-center flex-col self-start mx-auto '>
  
       
<div className=' w-[95vw] lg:w-[50vw] flex justify-center flex-col self-start mx-auto px-3 py-3'>
    <div className='flex justify-center self-center w-[300px] md:w-[450px] h-[100px] flex-col border-b-2 border-b-gray-500 px-3 py-3'> 
       <div className='flex flex-row justify-center'
>
<p className=' text-[16px] md:text-[20px] lg:text-[26px] font-bold text-gray-700 text-center  '>
 تماس با ما
</p></div>
<p className=" text-sm md:text-md lg:text-lg text-gray-700 text-center mt-2">
راه های برقراری ارتباط با شرکت سهیل
</p>
</div> 
<div className='flex flex-col justify-start mx-3 mt-3'>
<Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <FaLocationDot className=' text-orange-700 w-5 h-5  mt-2' /> 
      <Typography  sx={{px:2,py:1,color:"#8a8a8a",fontSize:"16px"}}> دفتر مرکزی: تهران، سعادت آباد، میدان کتاب، بلوار کوهستان، نبش گل‌گشت، پلاک 2/1</Typography>
    </Box>
    <Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <FaPhone  className=' text-orange-700 w-5 h-5  mt-2'/> 
      <Typography  sx={{px:2,py:1,color:"#8a8a8a",fontSize:"16px"}}>90008929 (روزهای کاری ساعت 8:30 الی 17)</Typography>
    </Box>
    <Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <LuMessagesSquare  className=' text-orange-700 w-5 h-5  mt-2'/> 
      <Typography  sx={{px:2,py:1,color:"#8a8a8a",fontSize:"16px"}}> info@sohil.com</Typography>
    </Box>
</div>
   </div>
   <div  className="mt-6 md:mt-16 flex flex-row  justify-center items-center h-full"
          style={{borderRadius:"63% 37% 55% 45% / 68% 65% 35% 32%  "}}    >
          <img width={450} height={450} src="https://storyset.com/illustration/online/cuate#FF9210FF&hide=&hide=complete" alt="" className="hover:scale-110 hover:opacity-55" 
            style={{borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "}}/> 
        </div>
        {/*
   <div
   className=' flex flex-row justify-center self-center bg-contain bg-center 
       bg-no-repeat  h-[400px] w-[80vw]  lg:w-[50vw] mx-auto mt-1 ' style={{
         backgroundImage: `url(${imgg})`,
       }}>
        </div>
        */}
   </div>
     </div>
    <Box sx={{width:'100%' }}>
      <Footer/>
    </Box>
      </>
  );
}

export default Contact;
