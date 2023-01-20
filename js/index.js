let texto = sessionStorage.getItem('login')
console.log(texto)

const sair = () => {
    localStorage.removeItem('login')
    sessionStorage.removeItem('login')

    window.location.href = ''
  }
if (texto!=null){
    addEventListener("load", (event) => {
        
        document.getElementById("user").innerText=texto
        document.getElementById("login").innerText=""

})}
