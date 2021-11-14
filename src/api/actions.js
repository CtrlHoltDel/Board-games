import axios from "axios";

const api = axios.create({
  baseURL: "https://chd-board-games.herokuapp.com/api/",
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
    await api.post("/users", body);

    return null;
  } catch (err) {
    return err.response.data.message;
  }
};

export const getList = async (endpoint, queries) => {
  try {
    const { data } = await api.get(endpoint, { params: queries });
    return data;
  } catch (err) {
    console.dir(err);
  }
};

export const getItem = async (type, value) => {
  try {
    const { data } = await api.get(`${type}/${value}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
