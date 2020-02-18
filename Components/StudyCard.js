import React from "react";
import GeoUtil from '../utils/geoutil.js';

const locationData = require('../data/studylocations.json');

class StudyCard extends React.Component {

  constructor(props) {
    super(props);

    let fromLoco = this.props.orig_location;
    console.log(fromLoco);

    let loco = locationData[this.props.idx]
    let toLoco = [loco.lat, loco.long];
    console.log(toLoco);

    let distance = Math.ceil(GeoUtil.calculateDistance(fromLoco,toLoco));

    this.state = {
      "distance": distance
    };

  }

  render() {
    return (
      <div className = "card study-card border-primary">
        <div className = "card-header">
          <h1>{this.props.name}</h1>
          <h3>Located {this.state.distance} metres away</h3>
        </div>
        <div className = "card-body">
          <p className = "card-text">Located at {this.props.location}</p>

          <a href = {"/view-location/" + this.props.idx} className = "btn btn-primary">View Location</a>
        </div>
      </div>
    )
  }

}

export default StudyCard;
