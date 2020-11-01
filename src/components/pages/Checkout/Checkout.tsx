import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutStepper from '../../widgets/CheckoutStepper';

import { useSelector }  from 'react-redux';


function Checkout(){

    const cart = useSelector((state: any) => { 
        return state.cartCounter.cart
    });
    console.log(cart);
    let navigate = useNavigate();

    if(cart.length == 0)
        navigate('/products');

    return (
        <div>            
            <CheckoutStepper/>
        </div>        
    )
}


export default Checkout;