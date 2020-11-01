import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({    
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


function PageNotFound() {

    const classes = useStyles();

    const navigate = useNavigate();


    return (
        <div className="page-not-found">
            <div>
                <img src={process.env.PUBLIC_URL + '/logo_black.png'} alt="logo booty"/>
            </div>
            <h1>404 - Page Not Found</h1>
            <Button
                variant="contained"
                color="secondary"
                className={classes.checkoutButton}
                // startIcon={<AddShoppingCartIcon />}
                onClick={() => navigate('/')}
            >
                Go to Home
            </Button>
        </div>
    )


}

export default PageNotFound;