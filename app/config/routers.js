import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="playerone" header="Player One" component={PromptContainer}/>
      <Route path="playertwo/:playerone" header="Player Two" component={PromptContainer}/>
    </Route>
  </Router>
)

export default routes;
