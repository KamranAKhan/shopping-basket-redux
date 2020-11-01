import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import shoesDetails from '../../../data/ShoesDetails';

import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DoneIcon from '@material-ui/icons/Done';
import SnackbarAlert from '../../widgets/SnackbarAlert';

// import { CartContext } from '../../state_management/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../state_management/cartSlice';

import { Paper } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto 0 auto'
    },
    formControl: {
        //margin: theme.spacing(1),
        minWidth: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    media: {
        height: 60,
    },
    center: {
        textAlign: 'center'
    },
    marginTop20: {
        marginTop: 20
    },
    buttonAddedCart: {
        "&:hover": {
            backgroundColor: '#ffffff',
            color: '#b32727'
        },
        margin: theme.spacing(1),
        color: '#b32727',
        backgroundColor: '#ffffff',
        fontSize: 14,
        textTransform: 'none',
        width: '100%',
        padding: '10px 0',
        border: '1px solid #b32727'
    },
    button: {
        "&:hover": {
            backgroundColor: '#ffffff',
            color: '#b32727',
            border: '1px solid #b32727'
        },
        margin: theme.spacing(1),
        backgroundColor: '#b32727',
        fontSize: 14,
        textTransform: 'none',
        width: '100%',
        padding: '10px 0'

    },
    buttonFavorite: {
        "&:hover": {
            backgroundColor: '#ffffff',
            color: '#000000',
            border: '1px solid #000000'
        },
        margin: theme.spacing(1),
        backgroundColor: '#000000',
        fontSize: 14,
        color: '#ffffff',
        textTransform: 'none',
        width: '100%',
        padding: '10px 0'
    },
    priceHeading: {
        marginTop: 0,
        marginBottom: 0
    },
    nameHeading: {},
    priceSpan: {
        backgroundColor: '#b32727',
        color: '#ffffff',
        borderRadius: '0 20px 20px 0',
        padding: '5px 20px'
    },
    paperCarouselHeight: {
        minHeight: '100%',
        height: '100%',
        [theme.breakpoints.up('lg')]: {
            height: 560
        }
    }


}));

function ProductDetails() {

    const classes = useStyles();

    // const { cart, addToCart } = useContext(CartContext);
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => {
        return state.cartCounter.cart;
    });

    const [size, setSize] = useState(0)
    const [addToCartStatus, setAddToCartStatus] = useState(false);
    //const [addToFavorite, setAddToFavorite] = useState(false);

    const { productId } = useParams();
    let productDetail: any = shoesDetails.filter(x => x.id === Number(productId))[0];

    const handleSizeChange = (event: any) => {
        setSize(event.target.value);
    }

    const handleAddToCart = () => {
        let newObj = {
            desc: productDetail.desc,
            id: productDetail.id,
            images: productDetail.images,
            name: productDetail.name,
            price: productDetail.price,
            quantity: 1,
            rating: productDetail.rating,
            reviewsCount: productDetail.reviewsCount,
            selectedSize: size,
            sizes: productDetail.sizes
        }                 
        dispatch(addToCart(newObj));
        setAddToCartStatus(true);
    }

    const handleAddToFavorite = (event: any) => {
        event.preventDefault();
        //setAddToFavorite(true);
    }

    const CheckProductIsInCart = (id: number) => {
        if (cart !== undefined && cart !== null && cart.length > 0) {
            if (cart.filter((x:any) => x.id === id).length > 0)
                return true;
            else
                return false;
        }
        else {
            return false;
        }
    }

    const handleAddedNoAction = (event: any) => {
        event.preventDefault();
    }

    return (
        <div>
            <h2>{productDetail.name}</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Carousel autoPlay={true} animation={'fade'} interval={2500} >
                        {
                            productDetail.images.map((item: any, index: number) => {
                                return (
                                    <Paper className={classes.paperCarouselHeight} key={index}>
                                        <img src={item} style={{ maxWidth: '100%' }} alt={productDetail.name + '-img-' + index} />
                                    </Paper>
                                )
                            })
                        }
                    </Carousel>
                </Grid>
                {/* <Grid item xs={0} sm={1}>{' '}</Grid> */}
                <Grid item sm={1}>{' '}</Grid>
                <Grid item xs={12} sm={7}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <h1 className={classes.priceHeading}><span className={classes.priceSpan}>${productDetail.price}</span></h1>
                        </Grid>
                        <Grid item xs={12}>
                            <h2 className={classes.nameHeading}>{productDetail.name}</h2>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Available Sizes</InputLabel>
                                <Select
                                    native
                                    value={size}
                                    onChange={handleSizeChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-native-simple',
                                    }}
                                >
                                    {
                                        productDetail.sizes.map((item: any, index: number) => {
                                            return (
                                                <option value={item} key={index}>{item}</option>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <h2>Description</h2>
                            <p>{productDetail.desc}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <h3>Reviews({productDetail.reviewsCount})</h3>
                            <Rating name="half-rating-read" defaultValue={productDetail.rating} precision={0.1} readOnly />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            {
                                CheckProductIsInCart(productDetail.id)
                                    ? <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.buttonAddedCart}
                                        startIcon={<DoneIcon />}
                                        onClick={handleAddedNoAction}
                                    >
                                        Added
                                    </Button>
                                    : <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<AddShoppingCartIcon />}
                                        onClick={() => handleAddToCart()}
                                    >
                                        Add To Cart
                                    </Button>
                            }

                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.buttonFavorite}
                                startIcon={<FavoriteIcon />}
                                onClick={handleAddToFavorite}
                            >
                                Mark Favorite
                        </Button>
                        </Grid>
                    </Grid>

                    {
                        addToCartStatus
                            ? <SnackbarAlert status={addToCartStatus} updateStatus={setAddToCartStatus} msg={'Product is added into the Cart!'} />
                            : <></>
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductDetails;