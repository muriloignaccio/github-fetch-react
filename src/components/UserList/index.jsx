import UserCard from '../UserCard';
import './style.css';

export default function UserList(props) {
  return (
    <div className="cards_container">
      { props.users.map(user => <UserCard data={user} key={user.node_id}/>) }
    </div>
  );
}