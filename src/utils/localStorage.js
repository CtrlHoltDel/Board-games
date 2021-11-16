export const storeAndSet = (setUser, username, email) => {
  setUser({ username, email });
  localStorage.setItem("storedUser", JSON.stringify({ username, email }));
};

export const logoutStorage = (setUser) => {
  setUser(null);
  localStorage.removeItem("storedUser");
};
