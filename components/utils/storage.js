export const token = "token";
export const userToken = "user";

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getFromStorage = (key) => {
  const value = localStorage.getItem(key);
  return !value ? null : JSON.parse(value);
};
export const clearLocalStorage = () => {
  localStorage.removeItem(token);
  localStorage.removeItem(userToken);
};
