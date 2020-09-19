import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class HotelGoogleMap extends Component {
    render() {
        return (       
            <Map style={{width: '500px'}} google={this.props.google} zoom={14}>
     
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
    
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        
                    </InfoWindow>
                </Map>
        );   
    }
    
};
export default GoogleApiWrapper({
    apiKey: ('AIzaSyAR5k4zF8FugkHufrQmjXLF25fMqirAUQE')
  })(HotelGoogleMap)
