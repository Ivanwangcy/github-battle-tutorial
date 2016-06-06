import React, {PropTypes} from 'react';

function Results (props) {
  return (
    <div>Results! </div>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}
export default Results;
