

let user = localStorage.getItem("username")

/*

if (user == null){
    window.location = "../index.html"
}

*/

var maxItem = document.getElementsByName("item").length

function removeItem(item){
    parent = item.parentElement
    var quant = parent.children[1]
    var quantVAl = parseInt(quant.innerHTML)
    if (quantVAl > 1){
        quant.innerHTML = quantVAl - 1
    }else{
        parent.remove();
        maxItem = maxItem -1
    }
}

function Comprar(){
    items_container_child = document.getElementById("template");
    items_container_child.display = "grid;"
    grid_cart = items_container_child.cloneNode(true);
    grid_cart.id = "item-"+(maxItem)
    grid_cart.children[0].src = "../img/index/Office365.png"
    grid_cart.children[1].innerHTML = 3
    grid_cart.children[2].innerHTML = "100€"
    grid_cart.children[3].innerHTML = "Teste"
    grid_cart.children[4].setAttribute('onclick','removeItem(this)')
    maxItem = maxItem + 1
    document.getElementById("items-container").appendChild(grid_cart);
}