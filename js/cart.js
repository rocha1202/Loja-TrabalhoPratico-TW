var idItem = 3;

function removeItem(id){
    var parent = document.getElementById("item-"+id)
    alert(id)
    var quant = parent.children[1]
    var quantVAl = parseInt(quant.innerHTML)
    if (quantVAl > 1){
        quant.innerHTML = quantVAl - 1
    }else{
        parent.remove();
    }
}

function Comprar(){
    items_container = document.getElementById("items-container");
    items_container_child = items_container.children[1]
    grid_cart = items_container_child.cloneNode(true);
    grid_cart.id = "item-"+(idItem + 1)
    grid_cart.children[0].src = "../img/index/Office365.png"
    grid_cart.children[1].innerHTML = 10
    grid_cart.children[2].innerHTML = "100€"
    grid_cart.children[3].innerHTML = "Teste"
    grid_cart.children[4].setAttribute('onclick','removeItem('+idItem+')')
    idItem = idItem + 1
    document.getElementById("items-container").appendChild(grid_cart);
}