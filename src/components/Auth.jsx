export const setAuth = () => {
  localStorage.setItem("isAuth", "true");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuth") === "true";
};

export const logout = () => {
  localStorage.removeItem("isAuth");
};
