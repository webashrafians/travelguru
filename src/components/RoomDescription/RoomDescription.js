import React from 'react';
import ratingLogo from '../../images/Icon/star_1_.png';

const RoomDescription = (props) => {
    const {roomImage, name, totalRoom, details1, details2, rating, price, totalPrice} = props.room;
    return (
        <div className="room-area">
            <img height="150px" src={roomImage} alt=""/>
            <div className='room-description'>
                <h5>{name}</h5>
                <p>{totalRoom}</p>
                <p>{details1}</p>
                <p>{details2}</p>
                <div className='room-area-rating-price'>
                    <img src={ratingLogo} alt="" width="20px" height="20px"/>
                    <p>{rating}</p>
                    <p>{price}</p>
                    <p>{totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default RoomDescription;