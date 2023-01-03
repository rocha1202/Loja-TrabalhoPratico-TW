/* importação dos modulos */
import { signUp, home } from "./module.mjs"

const div = document.querySelector("#criar_conta");
const form = document.querySelector("form");
const username = document.querySelector("#utilizador");
const password = document.querySelector("#password");
const remenber =document.querySelector("#remenber")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  /** Nome do usuario se o signup succeder ou falso caso contrario */
  const success = signUp(username.value, password.value, remenber.checked)

  // caso erro ao criar a conta
  if(!success) {
    div.className = "error"
    return
  }

  // redireciona para o index em 5 segundos (padrão)
  home()
})