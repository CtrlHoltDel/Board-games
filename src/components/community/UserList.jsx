import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div className="users-container">
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>Users</h1>
      {users.map((user) => {
        const { username, avatar_url } = user;

        return (
          <Link
            style={{ textDecoration: "none" }}
            to={`/community/${username}`}
          >
            <div className="users-container__card">
              <img src={avatar_url} alt="" />
              <div>{username}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default UserList;
