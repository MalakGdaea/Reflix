import "./UserList.css";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import { BUDGET } from "../../Constants";

export default function UsersList({ users }) {
  return (
    <div className="container">
      <h2>WHO'S WATCHING?</h2>
      <div className="users-container">
        {users.map((user) => {
          let savedUser = localStorage[user.id];
          if (!savedUser) {
            localStorage.setItem(
              user.id,
              JSON.stringify({ budget: BUDGET, rentedMoviesIDs: [] })
            );
          }
          return (
            <Link to={`/catalog/${user.id}`}>
              <UserCard user={user} key={user.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
