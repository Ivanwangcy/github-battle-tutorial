import React, { Component } from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';

export default class ResultsContainer extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      isLoading: true,
      scores: []
    }
  }

  componentDidMount() {
    console.log(this.props.location.state.playersInfo);
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  }

  render(){
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores} />
    )
  }
}
