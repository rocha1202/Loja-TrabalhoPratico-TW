import { getLogin } from "./module.mjs";

const username = getLogin();
const body = document.querySelector("body");
const linkuser = document.querySelector("div#areaUtilizador a")
const name = "filinto";

// if the user is logged
if (username != null) {
  console.log(`Logged as ${username}.`)

  body.className = "login";
  console.log(`Body class changed to login.`)

  linkuser.textContent = username;
  linkuser.pathname = "html/account.html"
  console.log(`User area changed.`)
};