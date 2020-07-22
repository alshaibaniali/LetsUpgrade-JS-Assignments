var ShoppingList = ['Maggi', "Lays", "milk"];

//Spread opertor (...)

var shoppingBasket = ["Egg", "Pasta", ...ShoppingList, "ketchup", "Drinks"];
// above ...ShoppingList make a copy of all items in it to ShoppingBasket.

console.log(ShoppingList);
console.log(shoppingBasket);