import {
  token,
  userToken,
  saveToStorage,
  getFromStorage,
} from "../utils/storage.js";
import displayMessage from "../common/displayMessage.js";
import logout from "../common/logout.js";
import { BASE_URL } from "../utils/settings.js";

const getUserAccess = async (usernameValue, passwordValue) => {
  const URL = `${BASE_URL}/auth/local`;
  const user = {
    identifier: usernameValue,
    password: passwordValue,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    console.log(result);
    const response = await fetch(URL, options);
    const result = await response.json();

    // if wrong values are sent, show error message
    if (result.error) {
      return displayMessage(
        "danger",
        "username or password is invalid",
        ".message-container"
      );
    }

    //if correct values are sent
    // --> redirect
    saveToStorage(token, result.jwt);
    saveToStorage(userToken, result.user);
    location.href = "/redirect.html";
  } catch (error) {
    displayMessage(
      "secondary",
      "Server connection failed",
      ".message-container"
    );
  }
};
export default getUserAccess;
