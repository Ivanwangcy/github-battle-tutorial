import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ConfirmBattle from './comonents/ConfirmBattle';

class ConfirmBattleContainer extends ConfirmBattle {
  constructor() {
    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }

  componentDidMount() {
    var query = this.props.location.query;

    console.log(query);
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.loading}
        playersInfo={this.state.playersInfo}
      />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ConfirmBattleContainer;
