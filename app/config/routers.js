import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="playerone" header="Player One" component={PromptContainer}/>
      <Route path="playertwo/:playerone" header="Player Two" component={PromptContainer}/>
      <Route path="battle" header="Battle" component={ConfirmBattleContainer}/>
    </Route>
  </Router>
)

export default routes;
