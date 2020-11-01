import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// cart state
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'    
  }
  
}))(Badge);

export default function CartBadge() {
    
  const cart = useSelector( (state:any)=>{
      console.log(state)
      return state.cartCounter.cart;
  });
  
  console.log(cart);

  let navigate = useNavigate();  

  return (
    <IconButton aria-label="cart" onClick={()=>navigate('/cart')}>
      <StyledBadge badgeContent={cart.length} style={{color: '#ffffff'}}>
        <ShoppingCartIcon style={{color: '#ffffff'}}/>
      </StyledBadge>
    </IconButton>
  );
}
