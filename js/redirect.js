import loader from "../components/common/loader.js";
import displayNavbar from "../components/common/displayNavbar.js";
import { getFromStorage, userToken } from "../components/utils/storage.js";
import logout from "../components/common/logout.js";

window.addEventListener("load", () => {
  loader("d-none");
});

const user = getFromStorage(userToken);
if (!user) {
  location.href = "/";
}

displayNavbar();
