import React, {Component, PropTypes} from 'react';

function ConfirmBattle (prop) {
  return (
    prop.isLoading === true ?
    <div>Loding</div> :
    <div>DidMount</div>
  );
}

ConfirmBattle.PropTypes = {
  'isLoading': PropTypes.string.isRequired
}

export default ConfirmBattle;
