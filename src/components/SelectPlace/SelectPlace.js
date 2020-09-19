import React from 'react';
import './SelectPlace.css';

const SelectPlace = (props) => {
    const {name, Description} = props.selectPlace;
    console.log(props)
    return (
        <div className='select-area-style'>
            <h1>{name}</h1>
            <p>{Description}</p>
        </div>
    );
};

export default SelectPlace;