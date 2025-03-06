import React, {useContext,useState} from 'react';
import {CardData} from '../../Shared/Cart-Context';
import {CardDataShow} from '../../Shared/Cart-Context';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoMdAdd } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaFilter } from "react-icons/fa6";
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
 
export default  function FilterSh(){
  
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
  const [checked1, setChecked1] = useState(false); 
  const [checked2, setChecked2] = useState(false); 

  const [index, setIndex] = React.useState(0);
  const [index1, setIndex1] = React.useState(null);
  
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

return (
  <>
    <div className='w-[350px] hidden lg:flex flex-col justify-start '>
    <div dir="rtl" className='flex justify-start rounded-sm mt-3 mr-1 h-[50px]    bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100'>
<p className='px-2 pt-2 text-xl text-right text-indigo-900 font-black'>  نوع نمایش 
</p>
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
<FormControlLabel control={<Checkbox checked={checked1} value={"جدیدترین "}  onChange={sortArrayMaxtoMin} />} label=" جدیدترین " />
<FormControlLabel  control={<Checkbox checked={checked2} value={"پرفروش ترین  "}  onChange={sortArrayMintoMax} />} label="   پرفروش ترین" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"تخفیف دار   "}  onChange={sortArrayMintoMax} />} label="   تخفیف دار" />
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
<FormControlLabel control={<Checkbox checked={checked1} value={"طلایی"}  onChange={sortArrayMaxtoMin} />} label="قهوه ای" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"آبی پاستیلی"}  onChange={sortArrayMintoMax} />} label="آبی تیره"/>
<FormControlLabel control={<Checkbox checked={checked1} value={"مشکی"}  onChange={sortArrayMaxtoMin} />} label="مشکی" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"صورتی"}  onChange={sortArrayMintoMax} />} label="طوسی" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"آبی"}  onChange={sortArrayMintoMax} />} label="آبی" />
<FormControlLabel control={<Checkbox checked={checked1} value={"فیروزه ای"}  onChange={sortArrayMaxtoMin} />} label=" سفید" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"آبی روشن"}  onChange={sortArrayMintoMax} />} label=" صورتی" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"شیری"}  onChange={sortArrayMintoMax} />} label="شیری" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"کرم"}  onChange={sortArrayMintoMax} />} label="کرم" />
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
<div dir="rtl" className='flex justify-start rounded-sm mt-3 mr-1 h-[50px]    bg-gradient-to-r from-orange-100 via-indigo-100 to-orange-100'>
<p className='px-2 pt-2 text-xl text-right text-indigo-900 font-black'>  نوع نمایش 
</p>
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
<FormControlLabel control={<Checkbox checked={checked1} value={"جدیدترین "}  onChange={sortArrayMaxtoMin} />} label=" جدیدترین " />
<FormControlLabel  control={<Checkbox checked={checked2} value={"پرفروش ترین  "}  onChange={sortArrayMintoMax} />} label="   پرفروش ترین" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"تخفیف دار   "}  onChange={sortArrayMintoMax} />} label="   تخفیف دار" />
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
<FormControlLabel control={<Checkbox checked={checked1} value={"طلایی"}  onChange={sortArrayMaxtoMin} />} label="قهوه ای" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"آبی پاستیلی"}  onChange={sortArrayMintoMax} />} label="آبی تیره"/>
<FormControlLabel control={<Checkbox checked={checked1} value={"مشکی"}  onChange={sortArrayMaxtoMin} />} label="مشکی" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"صورتی"}  onChange={sortArrayMintoMax} />} label="طوسی" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"آبی"}  onChange={sortArrayMintoMax} />} label="آبی" />
<FormControlLabel control={<Checkbox checked={checked1} value={"فیروزه ای"}  onChange={sortArrayMaxtoMin} />} label=" سفید" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"آبی روشن"}  onChange={sortArrayMintoMax} />} label=" صورتی" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"شیری"}  onChange={sortArrayMintoMax} />} label="شیری" />
<FormControlLabel  control={<Checkbox checked={checked2} value={"کرم"}  onChange={sortArrayMintoMax} />} label="کرم" />
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
</>

 )}
