import * as React from 'react';
import {useContext} from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { TbShoppingCartCheck } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {MultiStep} from '../Shared/Cart-Context';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(254, 215, 170) 0%,rgb(199, 210, 254) 50%,rgb(254, 215, 170) 100%)',
        
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(254, 215, 170) 0%,rgb(199, 210, 254) 50%,rgb(254, 215, 170) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(254, 215, 170) 0%, rgb(199, 210, 254) 50%, rgb(254, 215, 170) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(254, 215, 170) 0%, rgb(199, 210, 254) 50%, rgb(254, 215, 170) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1:<IconButton ><NavLink > < TbShoppingCartCheck /> </NavLink> </IconButton> ,
    2:<IconButton><NavLink  ><MdOutlineLocalShipping /></NavLink></IconButton>,
    3:<IconButton><NavLink  ><MdOutlinePayments/> </NavLink></IconButton> ,
    4:<IconButton><NavLink  ><FaRegCalendarCheck/> </NavLink></IconButton>,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ['  سبد خرید', ' آدرس ارسال  ', 'پرداخت','ثبت سفارش'];

export default function HorizontalStepper() {
    
       const [currentstep,setCurrentstep]=useContext(MultiStep);
    function submitstep(step){
      switch(step){
        case 1:
        return <FirstStep/>
        case 2:
          return <SecondStep/>
          case 3:
            return <ThirdStep/>
            case 4:
              return <FourthStep/>
      }
    }
    
  return (
    <>
      <Box container sx={{display:"flex", boxShadow:"0px 2px 15px #e0e7ff inset",
      flexDirection:"row",bgcolor:'white',mx:{xs:1,md:5},my:2,borderRadius:'10px',direction:'rtl',px:3,my:10}}>
          <p className='text-indigo-900 text-lg font-bold py-1  px-1 ' >نهال شاپ / سبد خرید
</p>
        </Box>
    <Stack sx={{ width: '100%',direction:'ltr',mx:"auto" ,my:5}} >
    
      <Stepper alternativeLabel activeStep={currentstep - 1} orientation='horizontal' connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step  key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
      <div>
      {submitstep(currentstep)}
       </div>
       </>
  );
}
