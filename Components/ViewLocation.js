import React from "react";

import LocationMapView from './LocationMapView';
import GeoUtil from '../utils/geoutil.js';

import {
    useParams
  } from "react-router-dom";

const locationData = require('../data/studylocations.json');



class ViewLocation extends React.Component {



    constructor(props) {
        super(props);

        let {locationId} = props.match.params;

        this.state = {
            locationData: locationData[locationId]
        } 
    
        this.viewDirections = this.viewDirections.bind(this);
    }

    viewDirections() {
        let {lat, long} = this.state.locationData;
        let coords = [lat, long];
        GeoUtil.pullUpDirections(coords);
    }

    render() {

        //TODO render map

        const locationCoords =[this.state.locationData.lat, this.state.locationData.long];

        return (
            <div className = "container-fluid">
                <h1>Viewing {this.state.locationData.location_shorthand}</h1>
                <LocationMapView location = {locationCoords}></LocationMapView>
            
                <button onClick = {this.viewDirections} className = "btn btn-success">View Directions</button>
                <br/>
                <a href = "/#">Go Back</a>
            </div>
        );
    }
}

export default ViewLocation;
