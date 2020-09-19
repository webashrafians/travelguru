import React from 'react';
import './Home.css';
import fakeData from '../../fakeData/fakeData'
import PlaceDetails from '../PlaceDetails/PlaceDetails';
const Home = () => {
    const allTourPlace = fakeData;  
    return (
        
        <div>          
            <div className='main-area'>
                <div className='home-page-description'>
                    <h3>COX'S BAZAR</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, a dignissimos magnam dicta alias facilis eaque asperiores eos corporis in!</p>           
                </div>                         
                <div className='home-page-area'>
                    {
                        allTourPlace.map(place => <PlaceDetails key={place.placeId} place={place}></PlaceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;