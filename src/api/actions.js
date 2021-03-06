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
    console.dir(err);
    return null;
  }
};

export const getInteraction = async (reviewId, username) => {
  try {
    const { data } = await api.get(
      `/users/${username}/interaction/${reviewId}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const patchLikeToggle = async (reviewId, username) => {
  try {
    await api.patch(`/reviews/${reviewId}/likes`, {
      username,
    });
  } catch (err) {
    console.log(err);
  }
};

export const patchVote = async (reviewId, body) => {
  console.log(body);
  try {
    await api.patch(`/reviews/${reviewId}`, body);
  } catch (err) {
    console.dir(err);
    console.log(err);
  }
};

export const addItem = async (endpoint, body) => {
  try {
    const { data } = await api.post(endpoint, body);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const delItem = async (endpoint) => {
  try {
    await api.delete(endpoint);
  } catch (err) {
    console.log(err);
  }
};

export const patchUser = async (endpoint, updateObject) => {
  try {
    await api.patch(endpoint, updateObject);
  } catch (err) {
    console.log(err);
  }
};
