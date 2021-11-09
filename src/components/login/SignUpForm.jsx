import { useState } from "react";
import buttonLoad from "../../image/button_load.svg";

const SignUp = ({ onSubmit, loading }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <div className="sfi l-form-cont">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            username,
            email,
            password,
            setUsernameError,
            setPasswordError,
            setEmailError,
          });
        }}
      >
        <label htmlFor="sfi__username">Username</label>
        <input
          type="text"
          id="sfi__username"
          className="sfi__username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <p className="ls-error">{usernameError}</p>
        <label htmlFor="sfi__email">Email</label>
        <input
          type="text"
          id="sfi__email"
          className="sfi__email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="ls-error">{emailError}</p>
        <label htmlFor="sfi__password">Password</label>
        <input
          type="text"
          id="sfi__password"
          className="sfi__password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="ls-error">{passwordError}</p>
        <button>
          {loading ? (
            <img className="button-load" src={buttonLoad} alt="" />
          ) : (
            <p className="load-text">Sign up</p>
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
