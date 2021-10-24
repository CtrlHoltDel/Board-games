import { useState } from 'react';
import SignUp from './SignUpForm';
import LoginForm from './LoginForm';
import '../../styles/login/login.css';

const Login = ({ setUser }) => {
  const [logSignToggle, setLogSignToggle] = useState(true);

  const onSubmit = ({ username, email, password }) => {
    console.log(username, email, password);
  };

  const toggleLoginSignup = () => {
    setLogSignToggle((bool) => !bool);
  };

  return (
    <div className="ls-container">
      <div className="ls-container__inner">
        <div className="ls-container__inner__logo">
          <h1 className="ls-container__inner__logo__title">ROARED GAMES</h1>
        </div>
        <div className="ls-container__inner__mobonlyheader">Roared Games</div>
        <div className="ls-container__inner__form">
          <p className="lp-header">
            {logSignToggle ? 'Sign In' : 'Join Roared Games'}
          </p>
          {logSignToggle ? (
            <SignUp onSubmit={onSubmit} logSignToggle />
          ) : (
            <LoginForm onSubmit={onSubmit} />
          )}
          <button className="ls-toggle">
            <p onClick={toggleLoginSignup}>
              {logSignToggle ? 'Already have an account? Log in' : 'Join'}
            </p>{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
