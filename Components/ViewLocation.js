import React from "react";

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
    }

    render() {

        //TODO render map

        return (
            <div className = "container-fluid">
                <h1>Viewing {this.state.locationData.location_shorthand}</h1>
            </div>
        );
    }
}

export default ViewLocation;
