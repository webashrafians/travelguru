import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';
import './Booking.css';
import tourPlace from '../../fakeData/fakeData';
import SelectPlace from '../SelectPlace/SelectPlace';

const Booking = (props) => {

    const {bookingName } = useParams();
    const selectPlace = tourPlace.find(place => place.name.toString() === bookingName.toString());
    console.log('First Click', selectPlace);


    return (
        <div className='booking-area-style'>
            <div className='place-description-style'>
                <SelectPlace selectPlace={selectPlace}></SelectPlace>
            </div>
            <div className='booking-form-style'>
                <BookingForm place={selectPlace.name}></BookingForm>
            </div>
        </div>
    );
};

export default Booking;