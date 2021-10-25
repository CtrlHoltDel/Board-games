import { addUser, checkUser } from '../api/actions';

export const logIn = async ({
  username,
  password,
  setUsernameError,
  setPasswordError,
}) => {
  !username ? setUsernameError('Username required') : setUsernameError('');
  !password ? setPasswordError('Password required') : setPasswordError('');

  if (!username || !password) return;

  setUsernameError('');
  setPasswordError('');

  const message = await checkUser(username);
  console.log(message);

  if (message) {
    setUsernameError("Username doesn't exist");
  } else {
    return true;
  }
};

export const SignUpSubmit = async ({
  username,
  email,
  password,
  setUsernameError,
  setPasswordError,
  setEmailError,
}) => {
  !username ? setUsernameError('Username required') : setUsernameError('');
  !email ? setEmailError('Email required') : setEmailError('');
  !password ? setPasswordError('Password required') : setPasswordError('');

  if (!username || !email || !password) return;

  const message = await addUser({ username, email });
  if (message === null) return true;

  const errorType = message.split(' ')[0];

  if (errorType === 'Username') setUsernameError('Username already exists');
  if (errorType === 'Email') setEmailError('Email already exists');
  if (password.length < 5) setPasswordError('Invalid password');

  return false;
};
