import { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="lfi l-form-cont">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ username, password });
        }}
      >
        <label htmlFor="lfi__username">Username</label>
        <input
          type="text"
          id="lfi__username"
          className="lfi__username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="lfi__password">Password</label>
        <input
          type="text"
          id="lfi__password"
          className="lfi__password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
