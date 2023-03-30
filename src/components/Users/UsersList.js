import "./UserList.css";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

export default function UsersList({ users }) {
  return (
    <div className="container">
      <h2>WHO'S WATCHING?</h2>
      <div className="users-container">
        {users.map((user) => (
          <Link to="/catalog">
            <UserCard user={user} key={user.id} />
          </Link>
        ))}
      </div>
    </div>
  );
}
