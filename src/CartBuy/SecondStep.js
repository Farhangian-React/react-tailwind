import React,{useContext,useState,useEffect} from "react";
import {MultiStep} from '../Shared/Cart-Context';
import { ToastContainer, toast } from "react-toastify";
import {PageTitle} from '../Title/PageTitle';
import Box from '@mui/material/Box';
import {Grid,Typography} from "@mui/material";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import { Textarea } from '@mui/joy';
import MenuItem from '@mui/material/MenuItem';
import { Select, Option } from "@material-tailwind/react";
export default function SecondStep() {
const [currentstep,setCurrentstep]=useContext(MultiStep); 
const [fromostan, setFromostan] = useState([]);
const [fromCities, setFromCities] = useState([]);
const [dataselactor,setDataselactor]=useState([]);


  const getData=()=>{
    fetch('https://servers-nahall.onrender.com/features' )
.then(res => res.json())
.then((result)=> {
setDataselactor(result);

},
    (error) => {
      alert('error');
    }
    )
   }
  
    useEffect( ()=>{
      getData();
     
  
    },[]);

   
   const handleFromostan = (e) => {
     
 
    const ostan = dataselactor.find(

      (ostan) => ostan.name === e.target.value
    );

    setFromostan([ostan]);
    setFromCities(ostan.cities);



  };
  const handleFromcities = (e) => {

    const cit = fromCities.find(
      (cit) => cit.city === e.target.value
    );

  };

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
return(
    <>
     <PageTitle title='نهال شاپ / سبد خرید  ' description=' نهال شاپ '/>
  
     <div className='tost'>
     <ToastContainer />  
    </div>

  

<div dir="rtl" class="p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <h2 class="font-semibold text-xl text-gray-600 my-5"> ثبت و انتخاب آدرس</h2>

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
         

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">نام و نام خانوادگی </label>
                <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
              </div>

              <div class="md:col-span-5">
                <label for="email">آدرس ایمیل </label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
              </div>

              <div class="md:col-span-3">
                <label for="address"> آدرس</label>
                <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
              </div>

              <div class="md:col-span-2">
                <label for="city">شماره تماس</label>
                <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
              </div>

              <div class="md:col-span-2 mt-6">
                <label for="country">انتخاب استان</label>
                <select onChange={handleFromostan} class="h-10 w-full bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
              
                {dataselactor.map((country, key) => (
         
   
            <option  value={country.name} key={key} > {country.name}</option>
              ))}

                </select>
              </div>
              <div class="md:col-span-2 mt-6">
                <label for="country">انتخاب شهر</label>
                <select onChange={handleFromcities} class="h-10 w-full px-1 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
              
                {fromCities.map((city, key) => (
         
   
            <option className="px-3"  value={city.city} key={key} > {city.city}</option>
              ))}

                </select>
              </div>
            

              <div class="md:col-span-1 mt-6">
                <label for="zipcode">کد پستی</label>
                <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
              </div>

           

  
      
              <div class="md:col-span-5 flex justify-between">
                <button onClick={()=>setCurrentstep(3)} type='submit' className="button1 text-white  py-1 px-1 rounded-lg" >
                  <span className='formbutton'> ثبت سفارش  </span>
                </button>
         
               <button onClick={()=>setCurrentstep(1)}  type='submit' className=" button1 text-white py-1 px-1 rounded-lg" >
                    <span className='formbutton'> بازگشت </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" class="md:absolute bottom-0 right-0 p-4 float-right">
    </a>
  </div>
</div>

  
</>
)
}