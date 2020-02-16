import React from "react";
import ReactDOM from "react-dom";

import NavBar from './Components/nav.js';

//Navigation
import Home from './Components/home.js';
import ViewLocation from './Components/ViewLocation.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {

    return (
      <Router>
        <div>
          <NavBar/>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            
            
            {/* View Location Page */}
            <Route path = "/view-location/:locationId" component = {ViewLocation}/>
            
            {/*Home Page*/}
            <Route path = "/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )

  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
