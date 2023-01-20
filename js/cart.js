
function removeItem(id){
    var parent = document.getElementById("item-"+id)
    parent.remove();
}

function Comprar(){
    cloneList = document.getElementsByClassName("grid-cart")
    clone = cloneList[1]
    clone.id = "item-3"
    console.log(clone)
    parent = document.getElementById("items-container")
    console.log(parent)
    parent.appendChild(clone);
}