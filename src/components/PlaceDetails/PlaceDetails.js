import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import PlaceShortDetails from '../PlaceShortDetails/PlaceShortDetails';
import './PlaceDetails.css';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';
// const useStyles = makeStyles({
//     root: {
//       maxWidth: 300,
//     },
//     media: {
//       height: 150,
//     },
//   });

const PlaceDetails = (props) => {
    // const classes = useStyles();
    const {name, shortDescription, images, placeId} = props.place;
    console.log(props.place);

    let isClicked = false;

    const handlePlaceClick = (name) => {
        console.log(name, 'Some One Click');
        isClicked = true;
    }
    return (          
        <div onClick={() => handlePlaceClick(name)} className='home-page-image'>
            <img src={images} alt="" width="200px"/>
            <span className='caption'><h4>{name}</h4></span>
            <Button variant="contained" color="secondary">
                <Link to={`booking/${name}`}>Booking</Link>
                
            </Button>
        </div>   
        // <Card className={classes.root}>
        //     <CardActionArea>
        //         <CardMedia
        //             component="img"
        //             alt="Contemplative Reptile"
        //             height="140"
        //             image={images}
        //             title="Contemplative Reptile"
        //         />
        //         <CardContent>               
        //         <Typography gutterBottom variant="h5" component="h2">
        //             {name}
        //         </Typography>
        //         <Typography variant="body2" color="textSecondary" component="p">
        //             {shortDescription}
        //         </Typography>
        //         </CardContent>
        //     </CardActionArea>
        //     <CardActions>
            // <Button variant="contained" color="secondary">
            //     <Link to={`booking/${name}`}>Booking</Link>
            // </Button>
        //     </CardActions>
        // </Card>
    );
};

export default PlaceDetails;