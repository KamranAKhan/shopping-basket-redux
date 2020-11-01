import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import GradeIcon from '@material-ui/icons/Grade';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import shoesDetails from '../../../data/ShoesDetails';
import { useNavigate } from 'react-router-dom';

import { CartType, ShoeDetailsType } from '../../../interfaces/Props';
import ShoesDetails from '../../../data/ShoesDetails';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
    mainGrid:{
        marginBottom: 20
    },
    gridParentForRating: {
        position: 'relative'
    },
    ratingCountSection: {
        position: 'absolute',
        top: 20,
        zIndex: 999,
        right: 20,
        background: '#b32727',
        padding: '4px 21px',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px 0px 0px 20px'
    },
    ratingCountIcon: {
        color: '#ffffff'
    },
    ratingCountValue: {
        fontSize: 20,
        fontWeight: 600,
        color: '#ffffff'
    },
    reviewsCountSection: {
        position: 'absolute',
        top: 20,
        zIndex: 999,
        right: 20,
        background: '#b32727',
        padding: '2px 21px 11px 21px',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px 0px 0px 20px',
        width: 75    
    },
    reviewsCountIcon: {},
    reviewsCountValue: {
        position: 'absolute',
        fontSize: 12,
        fontWeight: 400,
        bottom: 5,
        left: 24,
        lineHeight: '0.8em'
    },
    homeCardName: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    GridSeparator: {
        textAlign: 'center',
        margin: '40px 0 15px 0'
    },
    GridSeparatorIcon: {
        fontSize: 44,
        color: '#b32727'
    },
    linkButtons:{
        color: '#b32727',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }

    // cardName: {},
    // cardDesc: {
    //     overflow: 'hidden',
    //     display: '-webkit-box',
    //     webkitLineClamp: 2,
    //     webkitBoxOrient: 'vertical'
    // },


});

export default function HomeContent() {

    const classes = useStyles();
    let navigate = useNavigate();    

    let topRatedShoes = shoesDetails.sort((a:ShoeDetailsType, b:ShoeDetailsType) => b.rating - a.rating).filter((x, ind) => ind < 3);
    let mostReviewedShoes = shoesDetails.sort((a:ShoeDetailsType, b:ShoeDetailsType) => b.reviewsCount - a.reviewsCount).filter((x, ind) => ind < 3);
    
    return (
        <div>
            <h2>Top Rated Products:</h2>
            <Grid container spacing={2}>
                {
                    topRatedShoes.map((shoe, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} className={classes.gridParentForRating} key={index}>
                                <div className={classes.ratingCountSection}>
                                    <GradeIcon className={classes.ratingCountIcon}/><span className={classes.ratingCountValue}>{shoe.rating}</span>
                                </div>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt={shoe.name}
                                            height="300"
                                            image={shoe.images[0]}
                                            title={shoe.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" className={classes.homeCardName}>
                                                {shoe.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" className="home-card-desc">
                                                {shoe.desc}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" className={classes.linkButtons} onClick={()=>navigate('/products/' + shoe.id)}>
                                            Details
                                    </Button>
                                        <Button size="small" color="primary" className={classes.linkButtons} onClick={()=>navigate('/products')}>
                                            Explore Products
                                    </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <div className={classes.GridSeparator}>
                <MoreHorizIcon className={classes.GridSeparatorIcon}/>
            </div>            
            <h2>Most Reviewed Products:</h2>
            <Grid container spacing={2} className={classes.mainGrid}>
                {
                    mostReviewedShoes.map((shoe, ind) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} className={classes.gridParentForRating} key={ind}>
                                <div className={classes.reviewsCountSection}>
                                    <span className={classes.ratingCountValue}>{shoe.reviewsCount}<span className={classes.reviewsCountValue}>reviews</span></span>
                                </div>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt={shoe.name}
                                            height="300"
                                            image={shoe.images[0]}
                                            title={shoe.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" className={classes.homeCardName}>
                                                {shoe.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" className="home-card-desc">
                                                {shoe.desc}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" className={classes.linkButtons} onClick={()=>navigate('/products/' + shoe.id)}>
                                            Details
                                    </Button>
                                        <Button size="small" color="primary" className={classes.linkButtons} onClick={()=>navigate('/products')}>
                                            Explore Products
                                    </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>

    );
}
