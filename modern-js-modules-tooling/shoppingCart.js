//export
console.log('exporting module');

const shoppingCost = 10
const cart = []

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity })
  console.log('added', cart);
}