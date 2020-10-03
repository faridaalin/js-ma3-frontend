import { getFromStorage, userToken } from "../utils/storage.js";
import logout from "../../components/common/logout.js";

const displayNavbar = () => {
  const navbar = document.querySelector("#navbar");
  const user = getFromStorage(userToken);

  if (!user) {
    navbar.innerHTML = `<li class="nav-item active">
<a class="nav-link" href="#">Login <span class="sr-only">(current)</span></a>
</li>`;
  } else {
    navbar.innerHTML = `<li class="nav-item active">
    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
  </li>
  <li class="nav-item">
    <span class="nav-link user">Hi there ${user.username}👋 !</span>
  </li>
  <li class="nav-item ml-auto">
    <a class="nav-link logout" id="logout" href="#">Log out <span class="sr-only">(current)</span></a>
  </li>`;
    logout();
  }
};

export default displayNavbar;
