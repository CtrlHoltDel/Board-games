import { useState } from "react";
import buttonLoad from "../../image/button_load.svg";

const LoginForm = ({ onSubmit, loading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <div className="lfi l-form-cont">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ email, password, setEmailError, setPasswordError });
        }}
      >
        <label htmlFor="lfi__username">Email</label>
        <input
          type="text"
          id="lfi__username"
          className="lfi__username"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="ls-error">{emailError}</p>
        <label htmlFor="lfi__password">Password</label>
        <input
          type="password"
          id="lfi__password"
          className="lfi__password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="ls-error">{passwordError}</p>
        <button>
          {loading ? (
            <img className="button-load" src={buttonLoad} alt="" />
          ) : (
            <p className="load-text">Log in</p>
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
