import axios from 'axios';

let id = "YOUR_CLIENT_ID";
let sec = "YOUR_SECRET_ID";
let param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function(players) {
    // fetch some data from Github
    return axios.all(
      players.map(function (username){
        return getUserInfo(username);
      })
    ).then(function (info){
      console.log("INFO", info);
      return info.map(function (user){
        return user.data;
      })
    })
  }
}

export default helpers;
