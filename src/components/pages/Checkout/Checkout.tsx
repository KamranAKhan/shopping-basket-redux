import React from 'react';
import CheckoutStepper from '../../widgets/CheckoutStepper';

import { useSelector }  from 'react-redux';
import { CartType, CartRootState } from '../../../interfaces/Props';

function Checkout(){

    const cart: Array<CartType> = useSelector((state: CartRootState) => { 
        return state.cartCounter.cart
    });    

    return (
        <div>            
            <CheckoutStepper/>
        </div>        
    )
}


export default Checkout;