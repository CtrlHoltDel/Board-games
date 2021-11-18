export const storeAndSet = (setUser, username) => {
  setUser({ username });
  localStorage.setItem("storedUser", JSON.stringify({ username }));
};

export const logoutStorage = (setUser) => {
  setUser(null);
  localStorage.removeItem("storedUser");
};
