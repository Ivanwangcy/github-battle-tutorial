import React, {PropTypes} from 'react';
import styles from '../styles/index';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
// function puke (object) {
//   return <pre>{JSON.stringify(object, null, "\t")}</pre>; // 格式化输出
// }

function Results (props) {
  let [winningIndex, losingIndex] = props.scores[0] > props.scores[1] ? [0,1] : [1,0];

  return (
    // <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <div className='col-sm-12' style={styles.space}>
        <Link to='/playerone'>
          <button className="btn btn-lg btn-danger">start Over</button>
        </Link>
      </div>
    </MainContainer>
    // </div>
  );
}


Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}
export default Results;
