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
  },
};

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