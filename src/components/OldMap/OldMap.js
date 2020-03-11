import React from "react";
import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";
import chinaPath from "../chinaCoords.js";
// https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications
// https://console.developers.google.com/apis/credentials?project=cewit-corona

const mapStyles = {
  width: "100%",
  height: "400px"
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: chinaPath
    };
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={2}
        style={mapStyles}
        initialCenter={{
          lat: 35,
          lng: 120
        }}
      >
        <Polygon
          path={this.state.path}
          strokeColor={"#ff0000"}
          fillColor={"#ff0000"}
        />
      </Map>
    );
  }
}

const GoogleWrapper = GoogleApiWrapper({
  // apiKey: process.env.REACT_APP_GOOGLE_KEY
  apiKey: "AIzaSyClXTYb5GEEE_9qnO62s1fO6Gyh-BWTSpY"
})(MapContainer);

export default GoogleWrapper;
