'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order delivered. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function(ing1, ing2, ing3 = 'iney') {
    console.log(`Here is your delicious pasta: 
    ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }
};

const rest1 = {
  name: 'Capri',
  // numGuests: 20
  numGuests: 0
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Jiovanni Dos Santos'
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// ?? nullish coalescent assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && 'anonymous'; //--> it will create owner: undefined
// rest2.owner = rest2.owner && 'anonymous';

// rest1.owner &&= 'anonymous' //--> it will NOT create anything to owner!!!
// rest2.owner &&= 'anonymous';

// console.log(rest1);
// console.log(rest2);

// Short Circuiting (&& and ||)

// OR operator
// console.log('x' || 'Asgar');
// console.log('' || 'Asgar');
// console.log(true || 'Asgar');
// console.log(undefined || null);
// console.log(false || 0);

// console.log('' || null || undefined || 'Asgar' || true || 0);

// restaurant.numGuests = 0
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10
// console.log(guests2);

// Nullish Coalescing (??) operator --> solves 0 (falsy) problem, because 0 is NOT nullish value

// NULLISH values: null and undefined, NOT 0 and ' '
// const correctGuest = restaurant.numGuests ?? 10;
// console.log(correctGuest);

// AND Operator
// console.log('----- AND -----');
// console.log(0 && 'asgar');
// console.log(7 && 'asgar');
// console.log('asgar' && 33 && undefined && 'hid');

// // practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('pasta', 'mush', 'coke')
// }

// restaurant.orderPizza && restaurant.orderPizza('hehe', 'hoho', 'hihi')


// REST OPERATOR AND PARAMETERS 
// rest for destructuring

// REST, because it is left side of = assignment
// const [a, , b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others);

// const {sat, ...weekdays} = restaurant.openingHours

// console.log(weekdays);

// // rest for functions

// const add = function(...numbers) {
//   console.log(numbers);
//   let  sum = 0
//   for(let i = 0; i<numbers.length; i++) {
//     sum += numbers[i]
//   }
//   console.log(sum)
//   return sum
// }

// add(2, 4, 5, 6, 6)

// const x = [3, 4, 5]

// add(...x)

// restaurant.orderPizza('banana', 'miu', 'jeje', 'bobo')

// const all = ['banana', 'miu', 'jeje', 'bobo'];

// restaurant.orderPizza(...all)

// SPREAD OPERATOR - taking all elements out of array
// does NOT manipulate original array

// const arr = [7,8,9]
// const newBadArr = [ 1, 2, arr[0], arr[1], arr[2] ]
// const newArr = [1, 2, ...arr, ...[42, ...[8, 9], 12]]
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Dolma'];
// console.log(newMenu);

// Copy Array - Shallow Copy
// const mainMenuCopy = [...restaurant.mainMenu]

// Join 2 array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: strings, arrays, maps, sets, NOT objects
// from 2020 spread operator also work with objects, even they are not iterables

// const str = 'Asgar'
// const newStr = [...str, ' ', 'U']
// console.log(newStr);

// const ings = [prompt('Add 1st ing'), prompt('Add 2nd ing')];

// restaurant.orderPasta(...ings)

// const newRestaurant = {...restaurant, founder: 'Asgar 😀'}
// console.log(newRestaurant);



// DESTRUCTURING OBJECTS

// restaurant.orderDelivery({
//   time: '20:30',
//   address: 'Baku, NN',
//   mainIndex: 1,
//   starterIndex: 2
// })

// const {name, categories, openingHours}  = restaurant
// console.log(name, categories, openingHours);

// const {  name: restaurantName, categories: tags, openingHours: hours} = restaurant
// console.log(restaurantName, tags, hours);


// MUTATING VARIABLES
// let a = 111
// let b = 999
// const obj = { a: 12, b: 44, c: 32 }
// // we need to add parentheses in order to make it to work properly, otherwise JS understand {} as a code block
// ({ a, b } = obj)
// console.log(a, b);

// const { fri: { open, close } } = openingHours
// console.log(open, close);



//DESTRUCTURING ARRAYS
// const arr = [2, 3, 4]

// const [x, y, z] = arr

// console.log(x,y,z);

// let [main, , secondary] = restaurant.categories

// console.log('Original: ', main, secondary);

// const temp = main
// main = secondary
// secondary = temp

// switching reassigment
// [secondary, main] = [main, secondary]

// console.log('Switching: ', main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

// nested destructuring
// const nested = [2, 4, [5, 6]]
// const [i, , [j, k]] = nested
// console.log(i, j, k);