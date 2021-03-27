console.log("Exporting module...");

const shippingCost = 10;
export const cart = [];
export default (product, quantity) => cart.push({product, quantity});