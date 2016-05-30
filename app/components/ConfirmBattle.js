import React, {Component, PropTypes} from 'react';

function puke (object) {
  return <pre>{JSON.stringify(object, null, "\t")}</pre>; // 格式化输出
}
function ConfirmBattle (prop) {
  return (
    prop.isLoading === true ?
    <div>Loding</div> :
    <div>Confirm Battle! : {puke(prop.playersInfo)}</div>
  );
}

ConfirmBattle.PropTypes = {
  'isLoading': PropTypes.bool.isRequired
}

export default ConfirmBattle;
