import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

class ConfirmBattleContainer extends Component {
  constructor(prop, context) {
    super(prop);
    this.state = {
      isLoading: true,
      playersInfo: []
    }
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
    console.log("Component initial");
  }

  componentWillMount() {
    console.log("Component will Mount");
  }

  componentDidMount() {
    console.log("component did Mount");
    var query = this.props.location.query;
    console.log(query);

    githubHelpers.getPlayersInfo([query.playone, query.playtwo])
    .then( (players) => {
        console.log("PLAYERS", players);
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }
    );
  }

  componentWillReceiveProps () {
    console.log("Component will Recevie Props");
  }

  componentWillUnmount() {
    console.log("Component will Unmount");
  }

  handleInitiateBattle() {
    console.log(this.state);
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo}
      />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ConfirmBattleContainer;
