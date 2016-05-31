import React, {Component, PropTypes} from 'react';
import styles from '../styles/index';

function puke (object) {
  return <pre>{JSON.stringify(object, null, "\t")}</pre>; // 格式化输出
}
function ConfirmBattle (prop) {
  return (
    prop.isLoading === true
    ? <p>Loding! </p>
  : <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className='col-sm-8col-sm-offset-2'>
        <div className='col-sm-6'>
          <p className='lead'> Player 1</p>
          PLAYER 1 INFO
        </div>
        <div className='col-sm-6'>
          <p className='lead'> Player 2</p>
          PLAYER 2 INFO
        </div>
      </div>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12' style={styles.space}>
          INITIATE BATTLE BUTTON
        </div>
        <div className='col-sm-12' style={styles.space}>
          LINK TO /PLAYERONE
        </div>
      </div>
    </div>
  );
}

ConfirmBattle.PropTypes = {
  'isLoading': PropTypes.bool.isRequired,
  'onInitiateBattle': PropTypes.func.isRequired,
  'playersInfo': PropTypes.array.isRequired
}

export default ConfirmBattle;
