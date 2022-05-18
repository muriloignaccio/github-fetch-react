import { useContext } from "react";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { GithubUsersContext } from "../../contexts/GithubUsersContext";

import "./style.css";

export default function UserCard(props) {
  const { removeUser } = useContext(GithubUsersContext);

  function handleDelete() {
    removeUser(props.data.login)
  }

  return (
    <div className="card">
      <div className="card_header">
        <img src={props.data.avatar_url} alt="" />
        <div className="card_info">
          <p className="card_name">{props.data.name}</p>
          <span className="card_username">@{props.data.login}</span>
        </div>
        <button onClick={handleDelete} className="card_delete">
          <FontAwesomeIcon icon={faTrash} size='xl' />
        </button>
      </div>
      <div className="card_body">
        <div className="github_followers">
          <span className="count">{props.data.followers}</span>
          <span className="text">Followers</span>
        </div>
        <div className="github_followers">
          <span className="count">{props.data.following}</span>
          <span className="text">Following</span>
        </div>
        <div className="github_followers">
          <span className="count">{props.data.public_repos}</span>
          <span className="text">Repositories</span>
        </div>
      </div>
    </div>
  )
}