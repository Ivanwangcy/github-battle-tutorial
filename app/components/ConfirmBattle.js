import React, {Component, PropTypes} from 'react';
import styles from '../styles/index';
import { Link } from 'react-router';
import UserDetails from './UserDetails';

function puke (object) {
  return <pre>{JSON.stringify(object, null, "\t")}</pre>; // 格式化输出
}
function ConfirmBattle (props) {
  return (
    props.isLoading === true
    ? <p>Loding! </p>
  : <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className='col-sm-8col-sm-offset-2'>
            {/*{puke(props.playersInfo[0])}*/}
          <UserDetailsWrapper header='Player One'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player Two'>
            <UserDetails info={props.playersInfo[1]}/>
          </UserDetailsWrapper>
            {/*{puke(props.playersInfo[1])}*/}
        </div>
      </div>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12' style={styles.space}>
          <button className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
            Initiate Battle!
          </button>
        </div>
        <div className='col-sm-12' style={styles.space}>
          <Link to='/playerone'>
            <button className="btn btn-lg btn-denger">Reselect Players</button>
          </Link>
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
