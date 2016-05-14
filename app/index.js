import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  render(){
    return (
      <div>
        Hello World! Hello {this.props.year}! Hello {this.props.name}!
      </div>
    );
  }
}

ReactDOM.render(
  <Hello name="Ivan" year={2016} />,
  document.getElementById('app')
);
