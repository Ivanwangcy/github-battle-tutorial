import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div className='main-container'>
        Hello from Main!
        {this.props.children}
      </div>
    );
  }
}
