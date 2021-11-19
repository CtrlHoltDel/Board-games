const CommControls = ({ toggleOrder, currOrder, searchUsers }) => {
  const onChange = (e) => {
    searchUsers(e.target.value);
  };

  return (
    <div className="users-control">
      <button onClick={toggleOrder}>
        <span
          style={{
            fontWeight: !currOrder && "bold",
            color: !currOrder ? "orange" : "#dddddd",
          }}
        >
          Newest First
        </span>{" "}
        /{" "}
        <span
          style={{
            fontWeight: currOrder && "bold",
            color: currOrder ? "orange" : "#dddddd",
          }}
        >
          Oldest First
        </span>
      </button>
      <label
        for="user-search"
        style={{
          fontSize: ".9rem",
          textDecoration: "underline",
          marginTop: "4px",
        }}
      >
        Search Users
      </label>
      <input id="user-search" type="text" onChange={onChange} />
    </div>
  );
};

export default CommControls;
