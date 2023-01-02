

/**
 * Redireciona o site para o index (/)
 * @returns {void}
 */
function home() {
  // mudar o path faz a pagina fazer reload para a para o novo path
  location.pathname = "/"
}

/**
 * Define o metodo de armazenamento a se usar
 * @param {bool} remenber - Define se o armazenamento é permanente ou temporario
 * @returns {Storage} O tipo de armazenamento a ser usado que pode ser localStorage(permanente)
 * ou sessionStorage(temporario)
 */
function storageType(remenber) {
  return remenber ? localStorage : sessionStorage;
}

/**
 * Faz o login de uma conta já existente
 * @param {string} username - O nome do usuario
 * @param {string} password - A palavra-passe do usuario
 * @param {bool} remenber - Caso seja verdadeiro o login é guardado é guardado permanentimente 
 * @returns {string|bool} o username caso o login for feiro com sucesso do contrario falso
 * caso a conta já existia
*/
function login(username, password, remenber) {
  let storageMethod = storageType(remenber);

  // caso o usuario não existe
  if(!storageMethod.getItem(username) == null) {
    console.error(`O usuario ${username} não existe.`);
    return false;
  }

  // a palavra-passe está errado
  if(storageMethod.getItem(username) != password) {
    console.error(`Palavra-passe para usuario ${username} está errado.`);
  }

  // loga o usuario definindo o login
  storageMethod.setItem("login", username);
  
  return username;
}

/**
 * Cria uma conta e faz o login
 * @param {string} username - O nome do usuario
 * @param {string} password - A palavra-passe do usuario
 * @param {bool} remenber - Caso seja verdadeiro o login é guardado permanetimente
 * @returns {string|bool} o username caso o login for feito com sucesso do contrario falso
 * caso a conta já existia
 */
function signUp(username, password, remeber) {
  // guarda permanentimente caso o remenber for true
  // ou guarda temporariamente caso for falso
  let storageMethod = remeber ? localStorage : sessionStorage;

  // retona falso caso o usuario ja existe
  if(storageMethod.getItem(username == null)) {
    console.error(`O usuario ${username} já existe.`);
    return false;
  }

  // guarda os dados do login no local storage
  storageMethod.setItem(username, password)
  console.log(`Usuario ${username} criado com sucesso.`);

  return login(username, password, remeber);
}