import React from "react";

import StudyCard from './StudyCard.js';
import LocationMapView from './LocationMapView.js';


const data = require ('../data/studylocations.json');

class Home extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            "navData": true,
            "coords": [38.94072,-92.32363]
        }

        this.grabNavData = this.grabNavData.bind(this);
        //this.grabNavData();
    }

    grabNavData() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let {latitude, longitude} = position.coords;
                this.setState({
                    "navData": true,
                    "coords": [latitude, longitude]
                })
            });
            
        } else {
            this.setState({
                "navData": false
            })
        }        
    }

    render() {
        

        const loco = this.state.coords;
        const urlTest = "https://www.google.com/maps/dir/?api=1&parameters";

        const cards = data.map((item, idx) => {
            console.log(idx);
            return (
                <StudyCard key = {idx} idx = {idx} name = {item.name} orig_location = {loco} location = {item.location_shorthand} />
            )
        })
        
        return (
            <div className = "container-fluid">
                <h1>Welcome</h1>

                <LocationMapView mode = "whereami" location = {loco}/>
                <br/>
                {cards}
            </div>
        );
    }
}

export default Home;
