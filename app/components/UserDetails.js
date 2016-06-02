import React, {PropTypes} from 'react';

function UserDetails(user){
  return (
    <div>
      {!!user.score && <li className="list-group-item"><h3>Score: {user.score}</h3></li>}
      {<li className="list-group-item"><img src={user.info.avatar_url} className="img-rounded img-responsive"/></li>}
      {!!user.info.name && <li className="list-group-item"><h3>Name: {user.info.name}</h3></li>}
      {<li className="list-group-item"><h3>UserName: {user.info.login}</h3></li>}
      {!!user.info.location && <li className="list-group-item"><h3>Location: {user.info.location}</h3></li>}
      {!!user.info.company && <li className="list-group-item"><h3>Company: {user.info.company}</h3></li>}
      {<li className="list-group-item"><h3>Followers: {user.info.follwers}</h3></li>}
      {<li className="list-group-item"><h3>Followering: {user.info.follwering}</h3></li>}
      {<li className="list-group-item"><h3>Public Repos: {user.info.public_repos}</h3></li>}
      {!!user.info.blog && <li className="list-group-item"><a href="user.info.blog">Blog: {user.info.blog}</a></li>}
    </div>
  )
}

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    location: PropTypes.string,
    company: PropTypes.string,
    follwers: PropTypes.number.isRequired,
    follwering: PropTypes.number.isRequired,
    public_repos: PropTypes.number.isRequired,
    blog: PropTypes.string
  })
}

export default UserDetails;
