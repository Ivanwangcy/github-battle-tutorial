import React, { Component } from 'react';

/**
 * [HelloWorld stateless functional component 无状态组件 简化写法]
 * @method HelloWorld
 * @param  {[type]}   props [传人的属性]
 */
function HelloWorld (props) {
  return (
    <div>Hello {props.name}</div>
  )
}

class Home extends Component {
  render() {
    return (
      <div>
        <HelloWorld name='Ivan'/>
        Hello from Home!
      </div>
    );
  }
}

export default Home;
