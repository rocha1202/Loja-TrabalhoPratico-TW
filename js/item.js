function itemID(){
    const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
    const myArr = JSON.parse(text);
    const id = document.getElementById('id')
    document.getElementById("item-title").innerHTML = myArr[0];
}