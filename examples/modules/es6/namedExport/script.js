// import {
//     cart as shoppingCart,
//     addToShoppingCart
// } from "./shoppingCart.js";
// addToShoppingCart("bread", 5);
// console.log(shoppingCart);

import * as ShoppingCart from "./shoppingCart.js"

console.log("Importing module...");

ShoppingCart.addToShoppingCart("bread", 5);
console.log(ShoppingCart.cart);




