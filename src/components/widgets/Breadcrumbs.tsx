


import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useLocation, useNavigate } from 'react-router-dom';


export default function AppBreadcrumbs() {

    let navigate = useNavigate();
    let location = useLocation();
    let currentRoutes = []
    currentRoutes = location.pathname !== '/' ? location.pathname.split('/') : [];
    if (currentRoutes.length > 0)
        currentRoutes.shift();    

    if (currentRoutes.length > 0) {
        return (
            <Breadcrumbs aria-label="breadcrumb" style={{marginBottom: 15}}>
                <Link color="inherit" onClick={() => navigate('/')} style={{cursor:'pointer'}}>
                    Home
                </Link>
                {
                    currentRoutes.length === 1
                        ? <Typography color="textPrimary">{currentRoutes[0]}</Typography>
                        : currentRoutes.map((route, index) => {
                            return (index !== currentRoutes.length - 1
                                ? <Link key={index} color="inherit" style={{cursor:'pointer'}} onClick={() => {
                                    navigate(route)
                                    }} >
                                    {route}
                                </Link>
                                : <Typography key={index} color="textPrimary">{route}</Typography>)
                        })

                }
            </Breadcrumbs>
        );
    }
    else
        return <></>


}

