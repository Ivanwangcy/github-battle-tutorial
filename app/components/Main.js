import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/main.css';

// function App (){
//   return (<div>Heele</div>);
// }
//
// <App />

export default class Main extends Component {
  render() {
    return (
      <div className='main-container'>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={2500}
          transitionLeaveTimeout={2500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        {/*{this.props.children}*/}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
