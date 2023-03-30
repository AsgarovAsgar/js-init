import { addToCart } from './shoppingCart.js'
console.log('Importing module');

addToCart('bread', 5)
addToCart('money', 12)

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 }
  ],
  user: { loggedIn: true }
}

const stateClone = Object.assign({}, state)
const stateDeepClone = cloneDeep(state)
state.user.loggedIn = false
console.log('stateClone', stateClone);
console.log('stateDeepClone', stateDeepClone);
// reviewing the code
