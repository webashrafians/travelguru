import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import PlaceShortDetails from '../PlaceShortDetails/PlaceShortDetails';
import './PlaceDetails.css';

const PlaceDetails = (props) => {
    // const classes = useStyles();
    const {name, shortDescription, images, placeId} = props.place;
    

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
    );
};

export default PlaceDetails;