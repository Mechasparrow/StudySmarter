import React from "react";
import ReactDOM from "react-dom";


class HelloMessage extends React.Component {
  render() {
    return (
      <div className = "container-fluid">
        <br/>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

export default HelloMessage;
