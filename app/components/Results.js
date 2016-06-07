import React, {PropTypes} from 'react';

function puke (object) {
  return <pre>{JSON.stringify(object, null, "\t")}</pre>; // 格式化输出
}

function Results (props) {
  return (
    <div>{puke(props.playersInfo)} </div>

  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}
export default Results;
