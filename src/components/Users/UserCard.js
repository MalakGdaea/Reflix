import "./UserCard.css";
function UserCard({ user }) {
  return (
    <div className="user-box" style={{ backgroundColor: user.color }}>
      <span className="user-name">{user.name}</span>
    </div>
  );
}

export default UserCard;
