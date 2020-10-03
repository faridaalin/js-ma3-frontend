import { clearLocalStorage } from "../utils/storage.js";
const logout = () => {
  const logoutButton = document.querySelector("#logout");
  const handleLogout = (e) => {
    clearLocalStorage();
    location.href = "/";
  };
  logoutButton.addEventListener("click", handleLogout);
};

export default logout;
