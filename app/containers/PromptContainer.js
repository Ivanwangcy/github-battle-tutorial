import React , { Component } from 'react';

class PromptContainer extends Component {
  // static contextTypes = {
  //   router: React.PropTypes.object.isRequired
  // };

  // static {
  //   contextTypes : {
  //     router: React.PropTypes.object.isRequired
  //   }
  // }
  constructor (props, context) {
    super(props);
    // this.contextTypes = {
    //   router: React.PropTypes.object.isRequired
    // };
    this.state = {
      username: ''
    };
    console.log(context);
    console.log(props.location.search);
  }

  onUpdateUser (event) {
    this.setState({
        username: event.target.value
      });
  }

  onSubmitUser(event) {
    event.preventDefault();
    let username = this.state.username;
    this.setState({
      username: ''
    });

    // console.log(this.props.location);
    console.log(this.props.params);
    console.log(this.props.routeParams);

    if(this.props.routeParams.playerone){
      console.log("sdfasdffffffff");
    }else {
      this.context.router.push('/playertwo/' + this.state.username);
    }
  }

  render () {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={ this.onSubmitUser.bind(this) }>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Github Username"
                type="text"
                onChange={ (event) => this.onUpdateUser(event) }
                value={this.state.username}
                />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Continue
              </button>
            </div>
          </form>
        </div>
      </div>
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
