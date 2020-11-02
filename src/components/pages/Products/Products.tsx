import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DoneIcon from '@material-ui/icons/Done';
import SnackbarAlert from '../../widgets/SnackbarAlert';
import BackdropLoader from '../../widgets/BackdropLoader';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../state_management/cartSlice';

import shoesList from '../../../data/ShoesList';
import shoesListDetails from '../../../data/ShoesDetails';

import { ShoeDetailsType, CartType, CartRootState } from '../../../interfaces/Props';


const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center'
    },
    paper: {
        "&:hover": {
            // backgroundColor: '#dadada',
            backgroundColor: '#ffffff',
            boxShadow: '0px 3px 3px -2px #b32727, 0px 3px 4px 0px #b32727, 0px 1px 8px 0px #b32727'

        },
        padding: theme.spacing(2),
        textAlign: 'center',
        marginTop: 20,
        color: '#ffffff',
        justifyContent: 'center',
        boxSizing: 'border-box'
    },

    productName: {
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: 18,
        margin: '5px 0 10px 0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    buttonAddedCart: {
        "&:hover": {
            backgroundColor: '#ffffff'
        },
        margin: theme.spacing(1),
        backgroundColor: '#ffffff',
        border: '1px solid #b32727',
        color: '#b32727',
        fontSize: 13

    },
    button: {
        "&:hover": {
            backgroundColor: '#ffffff',
            color: '#b32727',
            border: '1px solid #b32727'
        },
        margin: theme.spacing(1),
        backgroundColor: '#b32727',
        fontSize: 13
    },
    productDetails: {
        paddingTop: 10,
        color: '#000'
    },
    linkItem: {
        textDecoration: 'none',
    },
    linkWrapper: {
        width: '100%',
        position: 'relative'
    },
    priceTag: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        fontSize: 20,
        fontWeight: 600,
        backgroundColor: '#b32727',
        color: '#ffffff',
        borderRadius: '18px 0 0 18px',
        padding: '4px 15px'


    },
    pagination: {
        "&>ul": {
            justifyContent: 'center',
        },
        "& .Mui-selected": {
            "&:hover": {
                backgroundColor: '#ffffff',
                color: '#b32727',
                border: '1px solid #b32727'
            },
            backgroundColor: '#b32727',
        },
        marginTop: 40,
    }

}));



function Products() {


    const classes = useStyles();

    //const { cart, addToCart } = useContext(CartContext);
    const dispatch = useDispatch();
    const cart: Array<CartType> = useSelector((state: CartRootState) => {
        return state.cartCounter.cart;
    });

    const [page, setPage] = React.useState(1);
    const [addToCartStatus, setAddToCartStatus] = useState(false);
    const [loader, setLoader] = useState(true);

    let response = shoesList;
    let itemsPerPage = 9;

    let offset = (page - 1) * itemsPerPage;
    let endOffset = offset + itemsPerPage;

    let data = response.filter((x, i) => i >= offset && i < endOffset);

    const handleAddToCart = (event: React.FormEvent<EventTarget>, id: number) => {
        event.preventDefault();
        let currentProductObj: ShoeDetailsType = shoesListDetails.filter(x => x.id === id)[0];
        let newObj: CartType = {
            desc: currentProductObj.desc,
            id: currentProductObj.id,
            images: currentProductObj.images,
            name: currentProductObj.name,
            price: currentProductObj.price,
            quantity: 1,
            rating: currentProductObj.rating,
            reviewsCount: currentProductObj.reviewsCount,
            selectedSize: currentProductObj.sizes[0],
            sizes: currentProductObj.sizes
        }         
        console.log(newObj);
        dispatch(addToCart(newObj));
        setAddToCartStatus(true);
        console.log(cart);
    }

    const handleAddedNoAction = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
    }

    const paginationHandleChange = (event: React.FormEvent<EventTarget>, value: number) => {
        setPage(value);
        setLoader(true);
    };

    const CheckProductIsInCart = (id: number) => {
        if (cart !== undefined && cart !== null && cart.length > 0) {
            if (cart.filter((x: CartType) => x.id === id).length > 0)
                return true;
            else
                return false;
        }
        else {
            return false;
        }
    }

    return (

        <div className={classes.root}>
            <Grid container spacing={3} >
                {
                    data.map((shoe, ind) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={ind}>
                                <Paper elevation={3} className={classes.paper}>
                                    <Link to={'/products/' + shoe.id} className={classes.linkItem}>
                                        <div className={classes.linkWrapper}>
                                            <span className={classes.priceTag}>${shoe.price}</span>
                                            <img src={shoe.image} style={{ width: '100%' }} alt={shoe.name} />
                                            <div className={classes.productDetails}>
                                                <p className={classes.productName}>{shoe.name}</p>
                                                {
                                                    CheckProductIsInCart(shoe.id)
                                                        ? <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            className={classes.buttonAddedCart}
                                                            startIcon={<DoneIcon />}
                                                            onClick={handleAddedNoAction}
                                                        >
                                                            Added
                                                        </Button>
                                                        :
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            className={classes.button}
                                                            startIcon={<AddShoppingCartIcon />}
                                                            onClick={(e) => handleAddToCart(e, shoe.id)}
                                                        >
                                                            ADD TO CART
                                                        </Button>
                                                }
                                            </div>
                                        </div>
                                    </Link>
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Pagination count={3} page={page} onChange={paginationHandleChange} className={classes.pagination} color="secondary" />
            {
                addToCartStatus
                    ? <SnackbarAlert status={addToCartStatus} updateStatus={setAddToCartStatus} msg={'Product is added into the Cart!'} />
                    : <></>
            }
            {
                loader
                    ? <BackdropLoader isLoader={loader} setIsLoader={setLoader}></BackdropLoader>
                    : <></>
            }
        </div>

    )
}

export default Products;