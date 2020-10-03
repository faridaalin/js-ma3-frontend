import displayMessage from "../components/common/displayMessage.js";
import checkValueLength from "../components/common/checkValueLength.js";
import { token, getFromStorage } from "../components/utils/storage.js ";
import displayNavbar from "../components/common/displayNavbar.js";
import getUserAccess from "../components/common/getUserAccess.js";

const form = document.querySelector("#loginForm");

// Show navbar
displayNavbar();

const user = getFromStorage(token);

if (!user) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    // Form validation
    if (checkValueLength(username, 2) || checkValueLength(password, 4)) {
      return displayMessage(
        "warning",
        "Please type in valid values",
        ".message-container"
      );
    }

    // fetch token
    getUserAccess(username, password);
  };
  form.addEventListener("submit", handleSubmit);
} else {
  form.style.display = "none";
}
