console.log("Exporting module...");

const shippingCost = 10;

// export const cart = [];
const cart = [];

// export const addToCart = (product, quantity) => cart.push({product, quantity});
const addToCart = (product, quantity) => cart.push({product, quantity});

export {cart, addToCart as addToShoppingCart};
