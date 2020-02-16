import React from "react";
import ReactDOM from "react-dom";

import HelloMessage from './Components/hello.js';
import NavBar from './Components/nav.js';
import StudyCard from './Components/StudyCard.js';
import GeoLocationTester from './Components/GeoLocationTester.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Mecha"
    }
  }

  render() {

    let studyItems = [{
      name: "Laferre",
      location: "Plaza"
    },
  {
    name: "Catalyst",
    location: "Life Sciences"
  }];
    let studyCards = studyItems.map((item, idx) =>
      <div key = {idx}>
        <StudyCard name = {item.name} location = {item.location}/>
        <br/>
      </div>
    );

    return (
      <div>
        <NavBar></NavBar>
        <GeoLocationTester/>
        <div className = "study-card-list container-fluid">
            {studyCards}
        </div>
      </div>
    )
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
