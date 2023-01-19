$(document).ready(() => {
    let texto = sessionStorage.getItem('login')
    $('#user').css({
        width: '100%',
        marginLeft: '10%'
    })
    $('#user').html(texto)
    $('#login').html("")
})
