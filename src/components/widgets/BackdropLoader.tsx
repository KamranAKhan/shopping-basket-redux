import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function BackdropLoader(props:any) {    
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.isLoader);
  const handleClose = () => {
    setOpen(false);
    props.setIsLoader(false);
  };  

  setTimeout(()=>{
      setOpen(false);
      props.setIsLoader (false);
  }, 700)

  return (
    <div>      
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}