import { login, home } from "./module.mjs";

const div = document.querySelector("#login");
const form = document.querySelector("form");
const username = document.querySelector("#utilizador");
const password = document.querySelector("#password");
const remenber = document.querySelector("#remenber");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  /** O nome do usuario se o login succeder ou false caso contrario */
  const success = login(username.value, password.value, remenber.checked)

  if(!success) {
    div.className = "error"
    return
  }

  home()
})