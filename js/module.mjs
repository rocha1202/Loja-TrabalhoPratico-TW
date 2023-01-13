/** 
 * Contem routinas e utilitario gericos
 * @module lojaonline/module 
 */

/**
 * Redireciona o site para o index (/)
 * 
 * Só funciona se o protocolo for diferente de file://
 * @param {number} time - quanto tempo em segundos para fazer o redirecionamento
 * @returns {boolean}
 */
export function home(time=2) {
  // só faz o reload se estiver a ser executado de um servidor
  // não funciona quando esta a executar usando o arquivo diretamente
  if(location.protocol == 'file:') return false
  
  // mudar o path faz a pagina fazer reload para a para o novo path
  setTimeout(() => {
    location.pathname = "/"
  }, time * 1000)
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
 * Retorna a palavra-passe do usuario
 * 
 * Pode ser usado para validar um usuario
 * @param {string} username - O nome do usuario
 * @returns {string|null} A palavrapasse desse usuario ou null caso não exista
 */
function getUser(username) {
  return localStorage.getItem(username)
}

/**
 * Caso um usuario esteja logado retorna o usuario logado
 * @returns {string} o nome do usuario logado
 */
export function getLogin() {
  // retorna o login armazenado priorizando o login temporario
  return sessionStorage.getItem("login") ? sessionStorage.getItem("login") : localStorage.getItem("login")
}

/**
 * Remove o login armazenado
 * @returns {string|null} O nome de usuario que estava logado ou null
 * caso não existia um login
 */
export function logout() {
  /** O nome do usuario logado anteriomente */
  let previousLogin = getLogin()

  // remove o login dos dois tipos de armazenamento
  sessionStorage.removeItem("login")
  localStorage.removeItem("login")

  console.log(`Deslogado do usuario ${previousLogin}.`)

  return previousLogin
}

/**
 * Faz o login de uma conta já existente
 * Substitui o login caso já existe
 * @param {string} username - O nome do usuario
 * @param {string} password - A palavra-passe do usuario
 * @param {bool} remenber - Caso seja verdadeiro o login é guardado é guardado permanentimente 
 * @returns {string|boolean} O username caso o login for feiro com sucesso do contrario falso
 * caso a conta já existia
*/
export function login(username, password, remenber) {
  /** localStorage para permanente ou sessionStorage para temporario */
  let storageMethod = storageType(remenber);

  /** A palavra-passe armazenada */
  let storedPassword = getUser(username);
  
  // caso o usuario não existe
  if(storedPassword == null) {
    console.error(`O usuario ${username} não existe.`);
    
    return false;
  }
  
  // a palavra-passe está errado
  if(storedPassword != password) {
    console.error(`Palavra-passe para usuario ${username} está errado.`);
  }

  // remove o login anterior para evitar colisão
  logout();
  
  // loga o usuario definindo o login
  storageMethod.setItem("login", username);
  console.log(`Logado como ${username}.`)
  
  return username;
}

/**
 * Cria uma conta e faz o login
 * @param {string} username - O nome do usuario
 * @param {string} password - A palavra-passe do usuario
 * @param {boolean} remenber - Caso seja verdadeiro o login é guardado permanetimente
 * @returns {username | boolean} o username caso o login for feito com sucesso do contrario falso
 * caso a conta já existia
 */
export function signUp(username, password, remenber) {
  // guarda a conta na memoria permanente
  // retona falso caso o usuario ja existe
  if(getUser(username) != null) {
    console.error(`O usuario ${username} já existe.`);
    return false;
  }

  // guarda os dados do login no local storage (permanente)
  localStorage.setItem(username, password)
  console.log(`Usuario ${username} criado com sucesso.`);

  // faz o login e retorna o nome do usuario
  return login(username, password, remenber);
}