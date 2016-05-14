import React from "react";
import ReactDOM from "react-dom";

/**
 * [USER_DATA Github 用户数据]
 * @type {Array} ｛name, username, image}
 */
let USER_DATA = [
  {
    name: 'Tyler McGinnis',
    username: 'tylermcginnis',
    image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
  },
  {
    name: 'Ruan YiFeng',
    username:'ruanyf',
    image: 'https://avatars3.githubusercontent.com/u/905434?v=3&s=460',
  },
  {
    name: 'Ivan',
    username: 'Ivanwangcy',
    image: 'https://avatars3.githubusercontent.com/u/6278969?v=3&s=460'
  }
];

/**
 * 简介 头像
 */
class ProfilePic extends React.Component {
  render(){
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}/>
  }
}

/**
 * 简介 链接
 */
class ProfileLink extends React.Component {
  render(){
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
   }
}

/**
 * 简介 姓名
 */
class ProfileName extends React.Component {
  render(){
    return <div>{this.props.name}</div>;
  }
}

/**
 * github 个人简介
 */
class Avatars extends React.Component {
  render() {
    console.log(this.props);
    var avatarList = this.props.users.map((value) => {
      return (
        <li key={value.username}>
          <ProfilePic imageUrl={value.image}></ProfilePic>
          <ProfileName name={value.name}></ProfileName>
          <ProfileLink username={value.username}></ProfileLink>
        </li>
      );
    });
    return (
      <ul>
        {avatarList}
      </ul>
    );
  }
}

ReactDOM.render(
  <Avatars users={USER_DATA} />,
  document.getElementById('app')
);
