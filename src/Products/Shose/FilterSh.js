import React, {useContext,useState} from 'react';
import {CardData} from '../../Shared/Cart-Context';
import {CardDataShow} from '../../Shared/Cart-Context';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoMdAdd } from "react-icons/io";
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaFilter } from "react-icons/fa6";
export default  function FilterSh(){
  
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
  const [checked1, setChecked1] = useState(false); 
  const [checked2, setChecked2] = useState(false); 
  const [checked3, setChecked3] = useState(false); 
  const [checked4, setChecked4] = useState(false); 
  const [checked5, setChecked5] = useState(false);
  const [checkedC1, setCheckedC1] = useState(false);
  const [checkedC2, setCheckedC2] = useState(false);
  const [checkedC3, setCheckedC3] = useState(false);
  const [checkedC4, setCheckedC4] = useState(false);
  const [checkedC5, setCheckedC5] = useState(false);
  const [checkedC6, setCheckedC6] = useState(false);
  const [checkedC7, setCheckedC7] = useState(false);
  const [checkedC8, setCheckedC8] = useState(false);
  const [checkedC9, setCheckedC9] = useState(false);

  const [index, setIndex] = React.useState(0);
  const [index1, setIndex1] = React.useState(null);
    const [index0, setIndex0] = React.useState(null);
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
  const sortArrayMaxtoMin= (e)=>{
    setChecked1(e.target.checked);
    setChecked1(!checked1);
  setDatashow([...data.sort((a, b) =>
    convertToEnglish(b.pricenum) - convertToEnglish(a.pricenum)
  )]);
 
  }

  
  const sortArrayMintoMax= (e)=>{
    setChecked2(e.target.checked);
    setChecked2(!checked2);
    setDatashow([...data.sort((a, b) =>
      convertToEnglish(a.pricenum) - convertToEnglish(b.pricenum)
    )]);
    }
const findnew=(e)=>{
  setChecked3(e.target.checked);
  setChecked3(!checked3);
  setDatashow([...data.filter(i=>i.label === e.target.value )]);
  setDatashow([...data.filter(i=>i.level === "3" ),...data.filter(i=>i.level === e.target.value )]);
}
const findbestseller=(e)=>{
  setChecked4(e.target.checked);
  setChecked4(!checked4);
  setDatashow([...data.filter(i=>i.bestseller === e.target.value )]);
  setDatashow([...data.filter(i=>i.bestseller === "3" ),...data.filter(i=>i.bestseller === e.target.value )]);
  if( checked4 )  {
    setDatashow([...data]);
  }
}
const findoff=(e)=>{
  setChecked5(e.target.checked);
  setChecked5(!checked5);
  setDatashow([...data.filter(i=>i.off !== "" )]);
  if( checked5 )  {
    setDatashow([...data]);
  }
}
const handleChangeC1=(e)=>{
  setCheckedC1(e.target.checked); 
       setCheckedC1(!checkedC1);
       setDatashow([...data.filter(i=>i.color.find(j=>j.c === e.target.value))]);
   
    
}
const handleChangeC2=(e)=>{
  setCheckedC2(e.target.checked); 
       setCheckedC2(!checkedC2);
       setDatashow([...data.filter(i=>i.color.find(j=>j.c === e.target.value))]);
       console.log(datashow);
      
    
    
}
const handleChangeC3=(e)=>{
  setCheckedC3(e.target.checked); 
       setCheckedC3(!checkedC3);
       setDatashow([...data.filter(i=>i.color.find(j=>j.c === e.target.value))]);
      

    
}
const handleChangeC4=(e)=>{
  setCheckedC4(e.target.checked); 
       setCheckedC4(!checkedC4);
       setDatashow([...data.filter(i=>i.color.find(j=>j.c === e.target.value))]);
      
   
    
}
const handleChangeC5=(e)=>{
  setCheckedC5(e.target.checked); 
       setCheckedC5(!checkedC5);
       setDatashow([...data.filter(i=>i.color.find(j=>j.c === e.target.value))]);
      
     
    
}
const handleChangeC6=(e)=>{
  setCheckedC6(e.target.checked); 
       setCheckedC6(!checkedC6);
       setDatashow([...data.filter(i=>i.color.find(j=>j.c === e.target.value))]);
      
   
    
}
const handleChangeC7=(e)=>{
  setCheckedC7(e.target.checked); 
       setCheckedC7(!checkedC7);
       setDatashow([...data.filter(i=>i.color.find(j=>j.c === e.target.value))]);
      
   
    
}
const handleChangeC8=(e)=>{
  setCheckedC8(e.target.checked); 
       setCheckedC8(!checkedC8);
      setDatashow([...data.filter(i=>i.color.find(j=>j.c === e.target.value))]);
      
      
    
}
const handleChangeC9=(e)=>{
  setCheckedC9(e.target.checked); 
       setCheckedC9(!checkedC9);
       setDatashow([...data.filter(i=>i.color.find(j=>j.c === e.target.value))]);
      
     
    
}

return (
  <>
    <div className='w-[350px] hidden lg:flex flex-col justify-start '>
    <div dir="rtl" className='flex justify-between rounded-sm mt-3 mr-1 h-[50px]    bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100'>
<p className='px-2 pt-2 text-xl text-right text-indigo-900 font-black'>  نوع نمایش 
</p>
<FaFilter className='w-6 h-6 text-indigo-900 mt-3 m-2'/>
</div>
<Accordion
      expanded={index === 0}
      onChange={(event, expanded) => {
        setIndex(expanded ? 0 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<IoMdAdd sx={{fontSize:'16px',pl:1.5}} />}>ترتیب نمایش </AccordionSummary>
      <AccordionDetails >
      <FormGroup>
<FormControlLabel control={<Checkbox checked={checked1} value={"گرانترین  "}  onChange={sortArrayMaxtoMin} />} label="گرانترین  " />
<FormControlLabel  control={<Checkbox checked={checked2} value={" ارزانترین"}  onChange={sortArrayMintoMax} />} label=" ارزانترین"/>
<FormControlLabel control={<Checkbox checked={checked3} value={"جدیدترین "}  onChange={findnew} />} label=" جدیدترین " />
<FormControlLabel  control={<Checkbox checked={checked4} value={"پرفروش ترین  "}  onChange={findbestseller} />} label="   پرفروش ترین" />
<FormControlLabel  control={<Checkbox checked={checked5} value={"تخفیف دار   "}  onChange={findoff} />} label="   تخفیف دار" />
</FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 1}
      onChange={(event, expanded) => {
        setIndex(expanded ? 1 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<IoMdAdd sx={{fontSize:'16px',pl:1.5}} />}>رنگ  </AccordionSummary>
      <AccordionDetails >
      <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedC1} value={"قهوه ای"}  onChange={handleChangeC1} />} label="قهوه ای" />
<FormControlLabel  control={<Checkbox checked={checkedC2} value={"آبی تیره"}  onChange={handleChangeC2} />} label="آبی تیره"/>
<FormControlLabel control={<Checkbox checked={checkedC3} value={"مشکی"}  onChange={handleChangeC3} />} label="مشکی" />
<FormControlLabel  control={<Checkbox checked={checkedC4} value={"طوسی"}  onChange={handleChangeC4} />} label="طوسی" />
<FormControlLabel  control={<Checkbox checked={checkedC5} value={"آبی"}  onChange={handleChangeC5} />} label="آبی" />
<FormControlLabel control={<Checkbox checked={checkedC6} value={"سفید"}  onChange={handleChangeC6} />} label=" سفید" />
<FormControlLabel  control={<Checkbox checked={checkedC7} value={"صورتی"}  onChange={handleChangeC7} />} label=" صورتی" />
<FormControlLabel  control={<Checkbox checked={checkedC8} value={"شیری"}  onChange={handleChangeC8} />} label="شیری" />
<FormControlLabel  control={<Checkbox checked={checkedC9} value={"کرم"}  onChange={handleChangeC9} />} label="کرم" />
</FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 2}
      onChange={(event, expanded) => {
        setIndex(expanded ? 2 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<IoMdAdd sx={{fontSize:'16px',pl:1.5}} />}>اندازه  </AccordionSummary>
      <AccordionDetails >
      <FormGroup>
<FormControlLabel control={<Checkbox checked={checked1} value={"۳۶"}  onChange={sortArrayMaxtoMin} />} label="۳۶" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"۳۷"}  onChange={sortArrayMintoMax} />} label="۳۷"/>
<FormControlLabel control={<Checkbox checked={checked1} value={"۳۸"}  onChange={sortArrayMaxtoMin} />} label="۳۸" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"۳۹"}  onChange={sortArrayMintoMax} />} label="۳۹"/>
<FormControlLabel control={<Checkbox checked={checked1} value={"۴۰"}  onChange={sortArrayMaxtoMin} />} label="۴۰" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"۴۱"}  onChange={sortArrayMintoMax} />} label="۴۱"/>
</FormGroup>
      </AccordionDetails>
    </Accordion>
</div>

<div className='w-[98%] self-center flex flex-col justify-start lg:hidden'>
<Accordion
      expanded={index0 === 0}
      onChange={(event, expanded) => {
        setIndex0(expanded ? 0 : null);
      }}
      sx={{mr:1}}
    > 
        <AccordionSummary className=' bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100' 
         sx={{fontSize:'20px',fontWeight:500,direction:'rtl',color:"#312e81"}} 
         expandIcon={<FaFilter className='w-6 h-6 text-indigo-900 mt-3 m-2'/>}>

  نوع نمایش 

</AccordionSummary>
      
<Accordion
      expanded={index1 === 0}
      onChange={(event, expanded) => {
        setIndex1(expanded ? 0 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<IoMdAdd sx={{fontSize:'16px',pl:1.5}} />}>ترتیب نمایش </AccordionSummary>
      <AccordionDetails >
      <FormGroup>
<FormControlLabel control={<Checkbox checked={checked1} value={"گرانترین  "}  onChange={sortArrayMaxtoMin} />} label="گرانترین  " />
<FormControlLabel  control={<Checkbox checked={checked2} value={" ارزانترین"}  onChange={sortArrayMintoMax} />} label=" ارزانترین"/>
<FormControlLabel control={<Checkbox checked={checked1} value={"جدیدترین "}  onChange={sortArrayMaxtoMin} />} label=" جدیدترین " />
<FormControlLabel  control={<Checkbox checked={checked2} value={"پرفروش ترین  "}  onChange={sortArrayMintoMax} />} label="   پرفروش ترین" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"تخفیف دار   "}  onChange={sortArrayMintoMax} />} label="   تخفیف دار" />
</FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index1 === 1}
      onChange={(event, expanded) => {
        setIndex1(expanded ? 1 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<IoMdAdd sx={{fontSize:'16px',pl:1.5}} />}>رنگ  </AccordionSummary>
      <AccordionDetails >
      <FormGroup>
      <FormControlLabel control={<Checkbox checked={checkedC1} value={"قهوه ای"}  onChange={handleChangeC1} />} label="قهوه ای" />
<FormControlLabel  control={<Checkbox checked={checkedC2} value={"آبی تیره"}  onChange={handleChangeC2} />} label="آبی تیره"/>
<FormControlLabel control={<Checkbox checked={checkedC3} value={"مشکی"}  onChange={handleChangeC3} />} label="مشکی" />
<FormControlLabel  control={<Checkbox checked={checkedC4} value={"طوسی"}  onChange={handleChangeC4} />} label="طوسی" />
<FormControlLabel  control={<Checkbox checked={checkedC5} value={"آبی"}  onChange={handleChangeC5} />} label="آبی" />
<FormControlLabel control={<Checkbox checked={checkedC6} value={"سفید"}  onChange={handleChangeC6} />} label=" سفید" />
<FormControlLabel  control={<Checkbox checked={checkedC7} value={"صورتی"}  onChange={handleChangeC7} />} label=" صورتی" />
<FormControlLabel  control={<Checkbox checked={checkedC8} value={"شیری"}  onChange={handleChangeC8} />} label="شیری" />
<FormControlLabel  control={<Checkbox checked={checkedC9} value={"کرم"}  onChange={handleChangeC9} />} label="کرم" />
</FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index1 === 2}
      onChange={(event, expanded) => {
        setIndex1(expanded ? 2 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<IoMdAdd sx={{fontSize:'16px',pl:1.5}} />}>اندازه  </AccordionSummary>
      <AccordionDetails >
      <FormGroup>
<FormControlLabel control={<Checkbox checked={checked1} value={"۳۶"}  onChange={sortArrayMaxtoMin} />} label="۳۶" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"۳۷"}  onChange={sortArrayMintoMax} />} label="۳۷"/>
<FormControlLabel control={<Checkbox checked={checked1} value={"۳۸"}  onChange={sortArrayMaxtoMin} />} label="۳۸" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"۳۹"}  onChange={sortArrayMintoMax} />} label="۳۹"/>
<FormControlLabel control={<Checkbox checked={checked1} value={"۴۰"}  onChange={sortArrayMaxtoMin} />} label="۴۰" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"۴۱"}  onChange={sortArrayMintoMax} />} label="۴۱"/>
</FormGroup>
      </AccordionDetails>
    </Accordion>

   </Accordion>
</div>
</>

 )}
