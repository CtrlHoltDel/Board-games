import axios from 'axios';

const api = axios.create({
  baseURL: 'https://chd-board-games.herokuapp.com/api/',
});

export const checkUser = async (username) => {
  try {
    await api.get(`/users/${username}`);
    return null;
  } catch (err) {
    return err.response.data;
  }
};

export const addUser = async (body) => {
  try {
    await api.post('/users', body);
    return null;
  } catch (err) {
    return err.response.data.message;
  }
};
