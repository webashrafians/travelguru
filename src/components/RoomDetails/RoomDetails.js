import React from 'react';
import './RoomDetails.css';
import roomDetails from '../../fakeData/roomFakeData';
import RoomDescription from '../RoomDescription/RoomDescription';
import HotelGoogleMap from '../HotelGoogleMap/HotelGoogleMap';

const RoomDetails = () => {
    const allroomdetails = roomDetails;
    return (
        <div>
            <h4 align="center">Stay in Cox's Bazar</h4>
            <div className='room-area'>
                <div className='room-details'>
                    {
                        allroomdetails.map(room => <RoomDescription room={room}></RoomDescription>)
                    }
                </div>
                <div className='hotel-map'>
                    <HotelGoogleMap></HotelGoogleMap>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;