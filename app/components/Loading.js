import React, {Component, PropTypes} from 'react';

let styles = {
    content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
    fontSize: '55px'
  }
}

class Loading extends Component {

  static propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
  }

  static defaultProps = {
    text: 'Loading',
    speed: 300
  }

  state = {
    text: this.props.text
  }

  // constructor() {
  //   this.originalText = this.props.text;
  //
  //   this.state = {
  //      text: this.originalText
  //   }
  // }

  componentDidMount() {
    let stopper = this.props.text + '...';
    this.interval = setInterval(() => {
      if(stopper === this.state.text) {
        this.setState({
          text: this.props.text
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p style={styles.content}>{this.state.text}</p>;
  }
}

// Loading.propTypes = {
//   text: PropTypes.string,
//   speed: PropTypes.number
// }

export default Loading;
