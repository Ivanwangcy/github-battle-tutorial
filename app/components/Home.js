import React, { Component } from 'react';
import ReactRouter, { Link } from 'react-router';
import transparentBg from '../styles/index';


class Home extends Component {
  render() {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>Github Battle</h1>
        <p className='lead'>Some fancy motto</p>
        <Link to='playerone'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </div>
    );
  }
}

export default Home;
