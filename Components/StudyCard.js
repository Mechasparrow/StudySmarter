import React from "react";
import ReactDOM from "react-dom";

class StudyCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "card study-card border-primary">
        <div className = "card-header">
          <h1>{this.props.name}</h1>
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
