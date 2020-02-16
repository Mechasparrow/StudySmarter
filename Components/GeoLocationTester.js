import React from 'react';

//Leaflet React
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

//For additional leaflet functions
const L = require('leaflet');

//Data
const data = require('../data/studylocations.json');


class GeoLocationTester extends React.Component {

  constructor(props) {
    super(props);
    let navigationSupported = navigator.geolocation;

    this.state = {
      "navigationSupported": navigationSupported,
      "navData": [45.4, -75.7],
      "studyLocations": data
    }

    this.pullGeoData = this.pullGeoData.bind(this);

    this.pullGeoData();
  }

  pullGeoData() {
    console.log("pull");
    if (this.state.navigationSupported) {

      console.log("supported");

      navigator.geolocation.getCurrentPosition((position) => {

        const {latitude, longitude}  = position.coords;

        this.setState({
          "navData": [latitude, longitude]
        })
      });
    }
  }

  render() {

    const myIcon = L.icon({
        iconUrl: require('../res/book.svg'),
        iconSize:     [38, 95], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    let studyMarkers = this.state.studyLocations.map((location, idx) => {
      return (
        <Marker key = {idx} icon = {myIcon} position = {[location.lat, location.long]} />
      )
    })

    return (
      <div>
        <Map center={this.state.navData} zoom={19}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {studyMarkers}
        </Map>
      </div>
    );

  }

}

export default GeoLocationTester;
