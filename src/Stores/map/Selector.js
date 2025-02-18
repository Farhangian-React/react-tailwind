import * as React from 'react';
import { useState,useContext,useEffect ,useRef} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {CardDatamapshow} from '../../Shared/Cart-Context';
import { FaLocationDot } from "react-icons/fa6";
import storimage from "../../img/Stores.png"
import "../Stores.css";

export default function Selector() {
  const refbox=useRef();
  const [fromostan, setFromostan] = useState([]);
  const [fromCities, setFromCities] = useState([]);
  const [address,setAddress]=useState([]);
  const [datamapshow,setDatamapshow]=useContext(CardDatamapshow);
  const [dataselactor,setDataselactor]=useState([]);
  const getData=()=>{
    fetch('https://serverjson-project.onrender.com/features' )
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
     
    refbox.current.className="hiden";
    const ostan = dataselactor.find(

      (ostan) => ostan.name === e.target.value
    );
  
     setDatamapshow(dataselactor.filter(i=> i.name === ostan.name));
     console.log(dataselactor.filter(i=> i.name === ostan.name));
    setFromostan([ostan]);
    setFromCities(ostan.cities);



  };
  const handleFromcities = (e) => {

    const cit = fromCities.find(
      (cit) => cit.city === e.target.value
    );
const fff=fromCities.filter((f)=>{return f.city===cit.city;});
  datamapshow.map((t)=>{
   t.cities=fff;
setDatamapshow([t]);
   })
  setAddress(cit.properties);
  };
  return (
    <>
    <div className='flex flex-col justify-start w-full  bg-white my-2 mx-0 md:mx-2 px-0 md:px-2 py-1 h-[300px]
    '
    >
  <div dir="rtl" className='flex flex-row justify-center rounded-xl  bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100 
   py-0 md:py-2 px-0 sm:px-3 md:px-5 mx-0 md:mx-1 '
  >
    <FormControl  dir='rtl' variant="standard" sx={{ my:1,mx:{xs:1,md:5}, minWidth: 120, }}>
        <InputLabel  id="demo-simple-select-standard-label"> انتخاب استان</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        value={fromostan.name}
        onChange={handleFromostan}
          label="انتخاب استان"
          className='selectclass'
        > 
         {dataselactor.map((country, key) => (
          <MenuItem  value={country.name} key={key} sx={{direction:"rtl"}}>  {country.name}</MenuItem>
        ))}
        </Select>
      </FormControl>
      <FormControl variant='standard' sx={{my:1,mx:{xs:1,md:5}, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label" > انتخاب شهر</InputLabel>
        <Select
          value={fromCities.city}
          onChange={handleFromcities}
         label="انتخاب شهر"
      className='selectclass'
        >
            {fromCities.map((city, key) => (
          <MenuItem key={key}  value={city.city} sx={{direction:"rtl"}}>  {city.city}</MenuItem>
        ))} 
        </Select>
      </FormControl>
    </div>
    <div className='flex flex-col justify-start h-[350px] rounded-sm p-2 mx-1 overflow-y-auto'>
    <div  ref={refbox} className=' flex flex-row justify-start bg-contain bg-center 
    bg-no-repeat  h-[220px] mx-auto mt-5 ' style={{
      backgroundImage: `url(${storimage})`,
    }}

     >
     
              <p className='text-center text-lg text-gray-600 my-5' >جهت مشاهده فهرست فروشگاه‌ها، ابتدا استان و شهر مورد نظر خود را انتخاب کنید</p>
             </div>
      {address.map((a)=>
      <div dir="rtl" className='flex flex-row w-full self-start border-b-2  border-gray-200 bg-white '
      >
    <FaLocationDot className='text-lg text-indigo-700 mt-3 mx-3'  /> 
  <p className='text-lg py-1 '>{a.storename} 
  <p className='text-xs py-1 '> {a.address} 
  </p> <p className='text-xs py-1 ' > {a.callnum}
   </p>  
 
 </p>



  </div>
      )}
    </div>
    </div>
    </>
  );
}



 