import React from "react";

import StudyCard from './StudyCard.js';

const data = require ('../data/studylocations.json');

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        let cards = data.map((item, idx) => {
            console.log(idx);
            return (
                <StudyCard key = {idx} idx = {idx} name = {item.name} location = {item.location_shorthand} />
            )
        })
        
        return (
            <div className = "container-fluid">
                <h1>Welcome</h1>
                {cards}
            </div>
        );
    }
}

export default Home;
