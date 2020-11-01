import React, { useContext, useState } from 'react';

import { Grid, Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import SnackbarAlert from '../../widgets/SnackbarAlert';

import { makeStyles } from '@material-ui/core/styles';

import { useNavigate } from 'react-router-dom';

// import { CartContext } from '../../state_management/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, UpdateFromCart } from '../../../state_management/cartSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto 0 auto'
    },
    buttonGotoProducts: {
        "&:hover": {
            backgroundColor: '#ffffff',
            color: '#b32727',
            border: '1px solid #b32727'
        },
        margin: theme.spacing(1),
        backgroundColor: '#b32727',
        fontSize: 14,
        textTransform: 'none',
        padding: '10px 40px'
    },
    cartGridLeft: {

    },
    cartPaper: {
        marginBottom: 30,
        padding: '5px 0 15px 0'
    },
    cartProductInfo: {
        padding: '0 25px'
    },
    cartProductImage: {
        padding: '8px 7px 1px 7px'
    },
    cartProductName: {
        "&>span": {
            float: 'right',
            fontSize: 24
        },
        paddingTop: 10,
        fontSize: 17
    },
    cartPriceTagRight: {

    },
    cartseletedSizeLabel: {
        fontSize: 14
    },
    cartseletedSizeDropdown: {
        fontSize: 14,
        width: 100
    },
    cartSizeSection: {
        float: 'left',
        width: 100,
        marginRight: 15
    },
    buttonRemove: {
        "&:hover": {
            backgroundColor: '#ffffff',
            color: '#b32727',
            border: 'none',
            boxShadow: 'none',
            textDecoration: 'underline'
        },
        "& span": {
            marginRight: 4
        },
        backgroundColor: '#ffffff',
        marginTop: 15,
        textTransform: 'none',
        color: '#b32727',
        border: 'none',
        boxShadow: 'none',
        padding: 0
    },
    cartSummaryHeading: {
        marginTop: 0
    },
    summarySubTotals: {
        "& p": {
            fontSize: 15
        }
    },
    summaryPriceRight: {
        float: 'right'
    },
    summaryTotal: {
        fontSize: 16,
        borderTop: '1px solid #cccccc',
        borderBottom: '1px solid #cccccc',
        marginBottom: 25,
        "& p": {
            fontSize: 18
        }
    },
    summaryTotalPriceRight: {
        float: 'right',
        fontWeight: 600,
    },
    checkoutButtonArea: {
        justifyContent: 'center',
        textAlign: 'center'
    },
    checkoutButton: {
        "&:hover": {
            backgroundColor: '#ffffff',
            color: '#b32727',
            border: '1px solid #b32727'
        },
        margin: theme.spacing(1),
        backgroundColor: '#b32727',
        fontSize: 14,
        textTransform: 'none',
        // width: '100%',
        padding: '10px 40px',
        justifyContent: 'center',
        color: '#ffffff',        

    }

}));

function Cart() {

    const classes = useStyles();
    const navigate = useNavigate();

    //const { cart, deleteFromCart, updateFromCart } = useContext(CartContext);
    const dispatch = useDispatch();
    let cart: any = useSelector((state: any) => {
        return state.cartCounter.cart;
    });

    const [isCartUpdated, setIsCartUpdate] = useState(false);
    const [addToCartStatus, setAddToCartStatus] = useState(false);


    console.log("loadedCart", cart);
    const handleSizeChange = (event:any, productId:number) => {
        let cartObj = cart.filter((x:any) => x.id === productId)[0];                

        let newObj = {
            desc: cartObj.desc,
            id: cartObj.id,
            images: cartObj.images,
            name: cartObj.name,
            price: cartObj.price,
            quantity: cartObj.quantity,
            rating: cartObj.rating,
            reviewsCount: cartObj.reviewsCount,
            selectedSize: Number(event.target.value),
            sizes: cartObj.sizes
        }         
        console.log(newObj);                
        dispatch(UpdateFromCart(newObj));
        setIsCartUpdate(true);
    }

    const handleQuantityChange = (event:any, productId:number) => {
        let cartObj = cart.filter((x:any) => x.id === productId)[0];
        let newObj = {
            desc: cartObj.desc,
            id: cartObj.id,
            images: cartObj.images,
            name: cartObj.name,
            price: cartObj.price,
            quantity: Number(event.target.value),
            rating: cartObj.rating,
            reviewsCount: cartObj.reviewsCount,
            selectedSize: cartObj.selectedSize,
            sizes: cartObj.sizes
        }                 
        dispatch(UpdateFromCart(newObj));
        setIsCartUpdate(true);
    }

    const deletProductFromCart = (productId: number) => {
        console.log(productId);
        dispatch(deleteFromCart(productId));
        setAddToCartStatus(true);        
    }

    if (isCartUpdated)
        setIsCartUpdate(false)


    let subtotal = 0;
    let shippingCost = 0;
    let totalAmount = 0;        
    
    for(let i = 0; i < cart.length; i++){
        subtotal += cart[i].price * cart[i].quantity;
    }
    totalAmount = subtotal + shippingCost;

    return (
        <div>
            {
                cart.length > 0
                    ? <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={8}>
                            {
                                cart.map((item: any, index: number) => {
                                    return (
                                        <Paper elevation={3} key={index} className={classes.cartPaper}>
                                            <Grid container >
                                                <Grid item xs={2}>
                                                    <div className={classes.cartProductImage}>
                                                        <img src={item.images[0]} style={{ width: '100%' }} alt={item.name}/>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <div className={classes.cartProductInfo}>
                                                        <h3 className={classes.cartProductName}>{item.name}<span>${item.price}</span></h3>
                                                        {
                                                            isCartUpdated
                                                                ? <div className={classes.cartSizeSection}>
                                                                    <InputLabel htmlFor="age-native-simple" className={classes.cartseletedSizeLabel}>Selected Size</InputLabel>
                                                                    <Select
                                                                        className={classes.cartseletedSizeDropdown}
                                                                        native
                                                                        value={item.selectedSize}
                                                                        onChange={(e) => handleSizeChange(e, item.id)}
                                                                        inputProps={{
                                                                            name: 'size',
                                                                            id: 'age-native-simple',
                                                                        }}
                                                                    >
                                                                        {
                                                                            item.sizes.map((item: any, ind: number) => {
                                                                                return (
                                                                                    <option value={item} key={ind}>{item}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </Select>
                                                                </div>
                                                                : <div className={classes.cartSizeSection}>
                                                                    <InputLabel htmlFor="age-native-simple" className={classes.cartseletedSizeLabel}>Selected Size</InputLabel>
                                                                    <Select
                                                                        className={classes.cartseletedSizeDropdown}
                                                                        native
                                                                        value={item.selectedSize}
                                                                        onChange={(e) => handleSizeChange(e, item.id)}
                                                                        inputProps={{
                                                                            name: 'size',
                                                                            id: 'age-native-simple',
                                                                        }}
                                                                    >
                                                                        {
                                                                            item.sizes.map((item:any, ind:number) => {
                                                                                return (
                                                                                    <option value={item} key={ind}>{item}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </Select>
                                                                </div>
                                                        }
                                                        {
                                                            isCartUpdated
                                                                ? <div>
                                                                    <InputLabel htmlFor="age-native-simple" className={classes.cartseletedSizeLabel}>Quantity</InputLabel>
                                                                    <Select
                                                                        className={classes.cartseletedSizeDropdown}
                                                                        native
                                                                        value={item.quantity}
                                                                        onChange={(e) => handleQuantityChange(e, item.id)}
                                                                        inputProps={{
                                                                            name: 'quantity',
                                                                            id: 'age-native-simple',
                                                                        }}
                                                                    >
                                                                        <option value={1}>1</option>
                                                                        <option value={2}>2</option>
                                                                        <option value={3}>3</option>
                                                                        <option value={4}>4</option>
                                                                        <option value={5}>5</option>
                                                                        <option value={6}>6</option>
                                                                        <option value={7}>7</option>
                                                                        <option value={8}>8</option>
                                                                        <option value={9}>9</option>
                                                                        <option value={10}>10</option>

                                                                    </Select>
                                                                </div>
                                                                : <div>
                                                                    <InputLabel htmlFor="age-native-simple" className={classes.cartseletedSizeLabel}>Quantity</InputLabel>
                                                                    <Select
                                                                        className={classes.cartseletedSizeDropdown}
                                                                        native
                                                                        value={item.quantity}
                                                                        onChange={(e) => handleQuantityChange(e, item.id)}
                                                                        inputProps={{
                                                                            name: 'quantity',
                                                                            id: 'age-native-simple',
                                                                        }}
                                                                    >
                                                                        <option value={1}>1</option>
                                                                        <option value={2}>2</option>
                                                                        <option value={3}>3</option>
                                                                        <option value={4}>4</option>
                                                                        <option value={5}>5</option>
                                                                        <option value={6}>6</option>
                                                                        <option value={7}>7</option>
                                                                        <option value={8}>8</option>
                                                                        <option value={9}>9</option>
                                                                        <option value={10}>10</option>

                                                                    </Select>
                                                                </div>
                                                        }

                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            className={classes.buttonRemove}
                                                            startIcon={<DeleteIcon />}
                                                            onClick={() => deletProductFromCart(item.id)}
                                                        >
                                                            Remove
                                                        </Button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    )
                                })
                            }
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <h2 className={classes.cartSummaryHeading}>Summary</h2>
                            <div className={classes.summarySubTotals}>
                                <p>Subtotal: <span className={classes.summaryPriceRight}>${subtotal.toFixed(2)}</span></p>
                                <p>Delivery charges: <span className={classes.summaryPriceRight}>${shippingCost.toFixed(2)}</span></p>
                            </div>
                            <div className={classes.summaryTotal}>
                                <p>Total: <span className={classes.summaryTotalPriceRight}>${totalAmount.toFixed(2)}</span></p>
                            </div>
                            <div className={classes.checkoutButtonArea}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.checkoutButton}
                                // startIcon={<AddShoppingCartIcon />}
                                    onClick={() => navigate('/checkout')}
                                >
                                    Checkout
                        </Button>
                            </div>

                        </Grid>
                    </Grid>
                    : <Paper style={{ textAlign: 'center', padding: '50px 0' }} elevation={2}>
                        <h1>Your cart is empty!</h1>
                        <p>Please add some products into the cart.</p>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.buttonGotoProducts}
                            onClick={() => navigate('/products')}
                        >
                            Go to Products Page
                        </Button>
                    </Paper>
            }
            {
                addToCartStatus
                    ? <SnackbarAlert status={addToCartStatus} updateStatus={setAddToCartStatus} msgType={'success'} msg={'Product is removed from the cart!'}/>
                    : <></>
            }
        </div>
    )
}

export default Cart;