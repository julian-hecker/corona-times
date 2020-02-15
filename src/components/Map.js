import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
// https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications

const mapStyles = {
    width: '100%',
    height: '100%',
    maxHeight: '400px'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={4}
                style={mapStyles}
                initialCenter={{
                    lat: 45.0000,
                    lng: -75.0000
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_KEY
})(MapContainer);
