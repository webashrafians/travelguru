import React from 'react';

const TourLocation = (props) => {
    console.log(props)
    const {name, image} = props.place;
    return (
        <div className="tour-place">
            <img src={image} alt="" width="200px"/>
            <h3>{name}</h3>
        </div>
    );
};

export default TourLocation;