'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
//   // console.log(openingHours.day)
// }

// for (const [day, {open, close}] of Object.entries(openingHours)) {
//   // const [day, hours] = x
//   console.log(`On ${day}, we are open from ${open} to ${close}`);
// }
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
  openingHours
};

// console.log(restaurant);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`On ${day} we are open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderSmth?.(0, 1) ?? 'Method does not exist');

// const users = [
//   { name: 'Asgar', age: 23 },
//   {age: 23 },
// ];

// console.log(users[0]?.name ?? "Array is empty");

// if (users.length > 0) {
//   console.log(users[0]?.name);
// } else {
//   console.log('Array is empty');
// }

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for (const item of menu) console.log(item);

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20
//   numGuests: 0
// }

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Jiovanni Dos Santos'
// };

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

// for (const index in game.scored) {
//   const scorer = game.scored[index]
//   console.log(`Goal ${+index + 1}: ${scorer}`);
// }

// let res = 0
// for (const odd of Object.values(game.odds)) {
//   console.log(odd);
//   res += odd
// }
// console.log(res / Object.values(game.odds).length);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const gameTeam = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${gameTeam}: ${odd}`);
// }

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// console.log(gameEvents.values());

// const events = [...new Set(gameEvents.values())]
// console.log(events);

gameEvents.delete(64)

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// const time = [...gameEvents.keys()]
// const lastTime = time[time.length - 1]
// console.log(`An event happened, on average, every ${lastTime / gameEvents.size} minutes`);

for (const [key, value] of gameEvents) {

  const message = key <=45 ? 'FIRST' : 'SECOND'
  console.log(`[ ${message} HALF ] ${key}: ${value}`);
}


// 🤍🤍🤍🤍🤍🤍🤍🤍🤍
// 🤍🤍🤍🤍🤍🤍🤍🤍🤍
// 🤍🤍🤍🤍🤍🤍🤍🤍🤍
// 🤍🤍🤍🤍🤍🤍🤍🤍🤍
// const scorers = {}
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1) 
//   console.log(scorers);
// }

// for (const scorer of game.scored) {
//   console.log(scorer);
// }

// const [players1, players2] = game.players

// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

// const team1 = game.odds.team1
// const draw = game.odds.x;
// const team2 = game.odds.team2;

// const {odds: { team1, x: draw, team2 }} = game


// const printGoals = function(...players) {
//   console.log(`${players.length} goals were scored`);
// }
// printGoals('Lewandowski', 'Gnarby');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is likely to win');
// team1 > team2 && console.log('Team 2 is likely to win');

// console.log(gk, fieldPlayers);
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

// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert('Too small');
//     break;
//   case 4:
//     alert('Exactly!');
//     break;
//   case 5:
//     alert('Too large');
//     break;
//   default:
//     alert("I don't know such values");
// }

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
// log('----- AND -----');
// log(0 && 'maestro');
// log(7 && 'maestro');
// log('maestro' && 33 && undefined && 'school');

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

// let arr = [0, 1]
// let first = 0
// let second = 1
// let next

// const find = function(num) {
//   let final = num - 2
//   for (let i = 0; i < final; i++) {
//     next = second + first;
//     first = second;
//     second = next;
//     arr = [...arr, next]
//     // console.log(next);
//   }
//   console.log(arr);
//   return next
// }

// const hehe = find(11)
// console.log("cavab: ", hehe);

// const func = function(num) {
//   let res = 1
//   for(let i = 1; i <= num; i++) {
//     res = res * i
//   }
//   console.log(res);
// }
// func(3)

// const poly = function(inp) {
//   const str = String(inp)
//   let reversedStr = str.split('').reverse().join('')
//   if(str === reversedStr) {
//     console.log('Cavab: ', reversedStr);
//   } else {
//     console.log('Nooo')
//   }
// }

// const poly = function (inp) {
//   const check = inp
//   let str = ''
//   while (inp > 1) {
//     let real = Math.trunc(inp % 10);
//     str += real;
//     inp /= 10
//   }
//   str == check ? console.log('Cavab: ', str) : console.log('Nooo');
// };

// poly(123321)

// let hour = 9

// if(hour < 10 || hour > 18) {
//   console.log('The office is closed!');
// } else {
//   console.log('The office is OPEN!');
// }

// // our user will fly abroad
// let hasTicket = true
// let cameInTime = false

// if(hasTicket && cameInTime) {
//   console.log('User can fly! 😍');
// } else {
//   console.log('User cannot fly! 🙁');
// }

// console.log(!true); //false
// console.log(!0); //false

// console.log(!5 || 1); //true
// console.log(!(5 || 1)); //false