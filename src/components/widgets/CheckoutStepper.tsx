import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import DoneIcon from '@material-ui/icons/Done';
import SnackbarAlert from '../widgets/SnackbarAlert';

//import { CartContext } from '../../state_management/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../state_management/cartSlice';
import { ShoeDetailsType, CartType, CartRootState } from '../../interfaces/Props';

const useStyles = makeStyles((theme) => ({    
    root: {     
        "& .MuiStepIcon-root.MuiStepIcon-completed": {
            backgroundColor: '#b32727',
            color: '#ffffff'
        },
        "& .MuiStepIcon-root.MuiStepIcon-active":{
            color: '#b32727'
        },
        "& .MuiStepIcon-text":{
            color: '#ffffff'
        },
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    paperStepper: {
        padding: '25px',
        marginBottom: 30
    },
    stepper1Form: {
        marginBottom: 30
    },
    stepperTextInput: {
        width: '100%',
        padding: '5px 0'
    },
    halfTextSectionLeft:{
        float: 'left',
        width: '48%',        
    },
    halfTextSectionRight:{
        float: 'right',
        width: '48%',        
    },
    stepper3Form: {
        marginBottom: 30,
        height: 200
    },
    mainContent: {
        marginTop: 10
    },
    buttonNext: {
        "&:hover": {
            backgroundColor: '#9a2626',
            color: '#ffffff'            
        },
        margin: theme.spacing(1),
        backgroundColor: '#b32727',
        fontSize: 14,
        textTransform: 'none',        
        padding: '10px 20px'
    },
    buttonBack: {},
    billingPaper: {
        "& h4": {
            marginTop: 0
        },        
        padding: 20,
        marginBottom: 30
    },
    progressBar: {
        textAlign: "center",
        fontWeight: 600,
        margin: '40px 0',
        "& .MuiCircularProgress-colorPrimary":{
            height: '60px !important',
            width: '60px !important'
        }        

    },
    orderConfirmation:{
        textAlign: "center",
        fontWeight: 600,
        margin: '40px 0',
        "& h1": {
            marginTop: 0
        }
    },
    orderConfirmationIcon: {
        color: 'green',
        fontSize: 100
    },
    firstColumn:{
        width: 100,
        fontWeight: 500,
        fontSize: 15,
        [theme.breakpoints.up('sm')]: {
            width: 120
        }
    },
    circularProgress: {
        color: '#b32727'
    }

    
}));



export default function CheckoutStepper() {
    const classes = useStyles();

    // const { cart, deleteFromCart } = useContext(CartContext);
    const dispatch = useDispatch();
    const cart: Array<CartType> = useSelector((state: CartRootState) => {
        return state.cartCounter.cart;
    });

    const [activeStep, setActiveStep] = useState(0);    
    const [isCardPayment, setIsCardPayment] = useState(true);
    const [paymentProgress, setPaymentProgress] = useState(0);
    const [paymentProgressAddition, setPaymentProgressAdddtion] = useState(0);
    const [isPaymentProceed, setPaymentProceed] = useState(false);
    const [isPaymentFinished, setIsPaymentFinished] = useState(false);
    const [addToCartStatus, setAddToCartStatus] = useState(false);

    // fields used in stepper
    // Shipping & Billing
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [cityTown, setCityTown] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [email, setEmail] = useState('');

    // Card Details
    const [nameOnCard, setNameOnCard] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expireMonthYear, setExpireMonthYear] = useState('');
    const [cvvCode, setCvvCode] = useState('');

    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    
    var currentDate = new Date();
    var numberOfDaysToAdd = 3;
    currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd); 

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // Stepper Steps Starts
    const gotoBilling = () => {
        if(firstName !== '' && lastName !== '' && address1 !== '' && cityTown !== '' && postalCode !== '' && email !== '')
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        else
            setAddToCartStatus(true);
    }
    
    const gotoPayment = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const placeOrder = () => {        
        if(nameOnCard !== '' && cardNumber !== '' && expireMonthYear !== '' && cvvCode !== ''){
            setPaymentProceed(true);
            setPaymentProgress(0);  
            setPaymentProgressAdddtion(20);                               
        }            
        else
            setAddToCartStatus(true);
    }
    // Stepper Steps Ends


    const changePaymentOption = () => {
        setIsCardPayment(!isCardPayment);
    }  

    const emptyCardAfterPayment = () => {
        for(let i=0; i <cart.length; i++)
        dispatch(deleteFromCart(cart[i].id));
    }

    if(isPaymentFinished)
        emptyCardAfterPayment();

    // for payment progress bar
    React.useEffect(() => {
        if(isPaymentFinished) return;
        if(paymentProgress === 100) { 
            setIsPaymentFinished(true);               
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setPaymentProgressAdddtion(0);
        } 

        const timer = setInterval(() => {
            setPaymentProgress((paymentProgress) => (paymentProgress >= 100 ? 0 : paymentProgress + paymentProgressAddition));
        }, 800);

        return () => {
          clearInterval(timer);
        };          
        
      }, [isPaymentFinished, paymentProgress, paymentProgressAddition]);

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step >
                    <StepLabel>SHIPPING</StepLabel>
                    <StepContent>
                        <form className={classes.root} noValidate autoComplete="off" >
                            <Typography className={classes.mainContent}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={8} md={8} lg={5}>
                                        <div className={classes.stepper1Form}>
                                            <TextField id="standard-basic" value={firstName} onChange={(e) => setFirstName(e.target.value)} label="First Name" className={classes.stepperTextInput} required/><br/>                                                                                  
                                            <TextField id="standard-basic" value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last Name" className={classes.stepperTextInput} required/><br/>                                            
                                            <TextField id="standard-basic" value={address1} onChange={(e) => setAddress1(e.target.value)} label="Address Line 1" className={classes.stepperTextInput} required/><br/>                                            
                                            <TextField id="standard-basic" value={address2} onChange={(e) => setAddress2(e.target.value)} label="Address Line 2" className={classes.stepperTextInput} /><br/>
                                            <TextField id="standard-basic" value={cityTown} onChange={(e) => setCityTown(e.target.value)} label="City/Town" className={classes.stepperTextInput} required/><br/>                                            
                                            <TextField id="standard-basic" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} label="Postal Code" className={classes.stepperTextInput} required/><br/>  
                                            <TextField id="standard-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" className={classes.stepperTextInput} required/><br/>                                           
                                        </div>
                                    </Grid>
                                </Grid>                                       
                            </Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button                                        
                                        variant="contained"
                                        color="primary"                                        
                                        className={classes.buttonNext}
                                        onClick={gotoBilling}
                                    >
                                        CONTINUE TO BILLING                                    
                                    </Button>
                                </div>
                            </div>                                                                                                                                              
                        </form>                        
                    </StepContent>
                </Step>
                <Step >
                    <StepLabel>BILLING</StepLabel>
                    <StepContent>
                        <Typography className={classes.mainContent}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={1}></Grid>
                                <Grid item xs={12} sm={10} md={8} lg={5}>
                                    <Paper className={classes.billingPaper}>
                                        <h4>Billing Information</h4>
                                        <table>
                                            <tr>
                                                <td className={classes.firstColumn}>First Name:</td>
                                                <td>{firstName}</td>
                                            </tr>
                                            <tr>
                                                <td className={classes.firstColumn}>Last Name:</td>
                                                <td>{lastName}</td>
                                            </tr>
                                            <tr>
                                                <td className={classes.firstColumn}>Address 1:</td>
                                                <td>{address1}</td>
                                            </tr>
                                            {
                                                address1 !== address2 && address2.length > 0
                                                ?   <tr>
                                                <       td className={classes.firstColumn}>Address 2:</td>
                                                        <td>{address2}</td>
                                                    </tr>
                                                :   <tr>
                                                        <td className={classes.firstColumn}>Address 2:</td>
                                                        <td style={{fontWeight:600, fontSize:15}}>Same as Address 1</td>
                                                    </tr>
                                            }                                            
                                            <tr>
                                                <td className={classes.firstColumn}>City/Town::</td>
                                                <td>{cityTown}</td>
                                            </tr>
                                            <tr>
                                                <td className={classes.firstColumn}>Postal Code:</td>
                                                <td>{postalCode}</td>
                                            </tr>
                                            <tr>
                                                <td className={classes.firstColumn}>Email:</td>
                                                <td>{email}</td>
                                            </tr>
                                        </table>
                                        {/* <p>{firstName}</p>
                                        <p>{lastName}</p>
                                        <p>{address1}</p>                                        
                                        <p>{address2}</p>                                        
                                        <p>{cityTown}</p>                                        
                                        <p>{postalCode}</p>                                        
                                        <p>{email}</p>                                         */}
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Typography>
                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                  </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={gotoPayment}
                                    className={classes.buttonNext}
                                >
                                    
                                    CONTINUE TO PAYMENT
                                    
                                </Button>                                                             
                            </div>
                        </div>
                    </StepContent>
                </Step>
                <Step >
                    <StepLabel>PAYMENT</StepLabel>
                    <StepContent>
                        <Typography className={classes.mainContent}>
                            <Grid container spacing={3}>                                
                                <Grid item xs={12 }sm={8} md={8} lg={4}>                                    
                                <div className={classes.stepper3Form}>                        
                                <form noValidate autoComplete="off">
                                    <label> 
                                        <input type="radio" name="transaction-type" className="transaction-type" 
                                        onChange={()=>changePaymentOption()} 
                                        value={(isCardPayment).toString()} 
                                        checked={isCardPayment}/>
                                        Credit or Debit Card
                                    </label>
                                    <label> 
                                        <input type="radio" name="transaction-type" className="transaction-type" 
                                        onChange={()=>changePaymentOption()} 
                                        value={(!isCardPayment).toString()} 
                                        checked={!isCardPayment}/>
                                        Paypal
                                    </label>
                                    <div>
                                        <TextField id="standard-basic" value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} label="Name on Card" className={classes.stepperTextInput} required/><br/> 
                                        <TextField id="standard-basic" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} label="Card Number" className={classes.stepperTextInput} required/><br/>
                                    </div>                                    
                                    <div className={classes.halfTextSectionLeft}>
                                        <TextField id="standard-basic" value={expireMonthYear} onChange={(e) => setExpireMonthYear(e.target.value)} label="MM/YY" className={classes.stepperTextInput} required/><br/>
                                    </div>
                                    <div className={classes.halfTextSectionRight}>
                                        <TextField id="standard-basic" value={cvvCode} onChange={(e) => setCvvCode(e.target.value)} label="CVV" className={classes.stepperTextInput} required/><br/>                                                                                 
                                    </div>                                    
                                    

                                </form>                                                            
                                </div>
                                </Grid>
                            </Grid>
                        </Typography>
                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                  </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={placeOrder}
                                    className={classes.buttonNext}
                                >
                                    
                                    PLACE YOUR ORDER
                                </Button>
                                {
                                    isPaymentProceed
                                    ?   <div className={classes.progressBar}>
                                            <span>Processing...</span>
                                            <br/>                                    
                                            <CircularProgress variant="static" value={paymentProgress} className={classes.circularProgress}/>                                     
                                        </div>                               
                                    :   <></>
                                }                                  
                            </div>
                        </div>
                    </StepContent>
                </Step>
            </Stepper>
            {
                isPaymentFinished
                ?   <div className={classes.orderConfirmation}>
                        <div >
                            <DoneIcon className={classes.orderConfirmationIcon}/>
                        </div>
                        <h1>Thank You.</h1>
                        <h2>Your order has been placed.</h2>                        
                        <p>Estimated Delivery Date</p>
                        {/* <p>{ (daysOfWeek[new Date().getDay()+3]) + ', ' + (months[new Date().getMonth()]) + ' ' + (new Date().getDate()+3) + ', ' + new Date().getFullYear()}</p> */}
                        <p>{ (daysOfWeek[currentDate.getDay()]) + ', ' + months[currentDate.getMonth()] + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear() }</p>
                    </div>
                :   <></>
            }
            {
                addToCartStatus
                    ? <SnackbarAlert status={addToCartStatus} updateStatus={setAddToCartStatus} msgType={'error'} msg={'Please, Fill out all required fields!'}/>
                    : <></>
            }
        </div>
    );
}
