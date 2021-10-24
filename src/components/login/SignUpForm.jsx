import { useState } from 'react';

const SignUp = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="sfi l-form-cont">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ username, email, password });
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
        <label htmlFor="sfi__email">Email</label>
        <input
          type="text"
          id="sfi__email"
          className="sfi__email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="sfi__password">Password</label>
        <input
          type="text"
          id="sfi__password"
          className="sfi__password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
