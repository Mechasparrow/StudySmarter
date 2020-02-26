import React from 'react';

//Leaflet React
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

//For additional leaflet functions
const L = require('leaflet');

class LocationMapView extends React.Component {

  constructor(props) {
    super(props);

    let otherCoords = [];
  
    if (this.props.studyLocations != undefined) {
      otherCoords = this.props.studyLocations.map(function (studyLocation) {
        return [studyLocation.lat, studyLocation.long];
      })
    }
  
    this.state = {
      studyLocationsCoords: otherCoords
    }

    this.locoOpen = this.locoOpen.bind(this);

  }

  
  locoOpen(e) {

    let id = e.target.options.id;
    console.log(id);

    window.location = "/view-location/" + id.toString();

  }

  render() {

    const bookIcon = L.icon({
        iconUrl: require('../res/book.svg'),
        iconSize:     [38, 95], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const defaultIcon = L.icon({
      iconUrl: require('../res/location.svg'),
      iconSize:     [38, 95], // size of the icon
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const coords = [this.props.location[0], this.props.location[1]];

    const icon = (this.props.mode == "whereami" ? defaultIcon : bookIcon);

    const studyMarkers = this.state.studyLocationsCoords.map(function (location, idx) {
      return (
        <Marker onClick = {this.locoOpen} icon = {bookIcon} key = {idx} id = {idx} position = {location} />
      )
    }.bind(this))

    return (

      <div>
        <Map center={coords} zoom={19}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
            <Marker icon = {icon} position = {coords}>
              <Popup>You are here</Popup>
            </Marker>
            {studyMarkers}
        </Map>
      </div>
    );

  }

}

export default LocationMapView;