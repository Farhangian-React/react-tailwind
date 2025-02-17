import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import "../pages/pages.css"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSizes() {
  const [opendialog, setOpendialog] = React.useState(false);

  const handleClickOpendialog = () => {
    setOpendialog(true);
  };

  const handleClosedialog = () => {
    setOpendialog(false);
  };

  return (
    <React.Fragment>
      <div className='relative flex mx-auto w-[90%] h-[500px]'>
        <div className='bg-indigo-50 flex w-full h-full mt-8  mx-auto z-2'></div> 
        <div className='boxx flex  absolute w-full  mx-auto  z-1  '></div>
      </div>
 
     
      
    </React.Fragment>
  );
}
