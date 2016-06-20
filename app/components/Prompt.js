import React, { Component, PropTypes } from 'react';
import styles from '../styles/index';
import MainContainer from './MainContainer';

function Prompt(props){
  return (
      <MainContainer>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={ props.onSubmitUser }>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Github Username"
              type="text"
              onChange={ props.onUpdateUser }
              value={props.username}
              />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
      </MainContainer>
  );
}

Prompt.PropTypes = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  };

export default Prompt;
