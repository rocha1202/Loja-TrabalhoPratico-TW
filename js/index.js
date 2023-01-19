let texto = sessionStorage.getItem('login')
console.log(texto)
const sair = () => {
    localStorage.removeItem('login')
    sessionStorage.removeItem('login')

    window.location.href = ''
  }
if (texto!=null){
$(document).ready(() => {
   
    $('#user').css({
        width: '100%',
        marginLeft: '10%'
    })
    $('#user').html(texto)
    $('#login').html("")
})}
