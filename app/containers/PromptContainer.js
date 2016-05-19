import React , { Component, PropTypes } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component {
  constructor (props, context) {
    super(props);
    this.state = {
      username: ''
    };
    console.log(context);
    console.log(props.location.search);
    console.log(props.location.query);
  }

  /**
   * [handleUpdateUser usnername Change 事件]
   * @method handleUpdateUser
   * @param  {[type]}         event [description]
   * @return {[type]}               [description]
   */
  handleUpdateUser (event) {
    this.setState({
        username: event.target.value
      });
  }

  /**
   * [handleSubmitUser submit username event]
   * @method handleSubmitUser
   * @param  {[type]}         event [description]
   * @return {[type]}               [description]
   */
  handleSubmitUser(event) {
    event.preventDefault();
    let username = this.state.username;
    this.setState({
      username: ''
    });

    if(this.props.routeParams.playerone){
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerone: this.props.routeParams.playerone,
          playertwo: this.props.username
        }
      })
    }else {
      this.context.router.push('/playertwo/' + this.state.username);
    }
  }

  render () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser.bind(this)}
        onUpdateUser={this.handleUpdateUser.bind(this)}
        header={this.props.route.header}
        username={this.state.username}
        />
    );
  }
}


/**
 * [contextTypes 类的实例属性]
 * @type {上下文 router 对象}
 */
PromptContainer.contextTypes = {
      router: React.PropTypes.object.isRequired
    };

export default PromptContainer;
