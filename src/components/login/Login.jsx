import { useState } from 'react';
import SignUp from './SignUpForm';
import LoginForm from './LoginForm';
import '../../styles/login/login.css';
import { logIn, SignUpSubmit } from '../../utils/login';

const Login = ({ setUser }) => {
  const [logSignToggle, setLogSignToggle] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (input) => {
    const { username, email } = input;

    setLoading(true);
    if (logSignToggle) {
      const result = await SignUpSubmit(input);
      console.log(result);
      if (result) setUser({ username, email });
    } else {
      const result = await logIn(input);
      if (result) setUser({ username, email });
    }
    setLoading(false);
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
          <p className="lp-header">{logSignToggle ? 'Sign up' : 'Log in'}</p>
          {logSignToggle ? (
            <SignUp onSubmit={onSubmit} logSignToggle loading={loading} />
          ) : (
            <LoginForm onSubmit={onSubmit} loading={loading} />
          )}
          <div className="login-controls">
            <button className="ls-toggle">
              <p onClick={toggleLoginSignup}>
                {logSignToggle ? 'Already have an account? Log in' : 'Join'}
              </p>
            </button>
            <button className="ls-toggle ls-guest">Login as guest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
