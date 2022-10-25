'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightData = flights.split('+')
// console.log(flightData);

// for (const flight of flightData) {
//   const [con, from, to, time] = flight.split(';')
//   const newCon = con.replaceAll('_', ' ')
//   const newFrom = from.slice(0, 3).toUpperCase()
//   const newTo = to.slice(0, 3).toUpperCase();
//   const newTime = time.replace(':', 'h')
//   const str = `${newCon.includes('Delayed') ? '🔴' : ''} ${newCon} from ${newFrom} to ${newTo} (${newTime})`.padStart(45);
//   console.log(str);
// }

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


// document.addEventListener('click', function() {
//   const text = document.querySelector('.text').value
//   const words = text.replace(/\n/g, '+').replace(/\s/g, '').toLowerCase().split('+')
//   for (let [i, word] of words.entries()) {
//     let ones = word.split('_')
//     const [first, ...others] = ones
//     let newOthers = []

//     for (let w of others) {
//       let newW = w.charAt(0).toUpperCase() + w.slice(1)
//       newOthers.push(newW)
//     }

//     let newOnes = [first, ...newOthers];
//     let final = newOnes.join('');
//     console.log(`${final.padEnd(20)}${'✅ '.repeat(i+1)}`);
//   }
// })

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log(airline.indexOf('Air'));
// console.log(airline.indexOf('P'));
// console.log(airline.lastIndexOf('P'));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const chm = function(seat) {
//   let s = seat.slice(-1);
//   if(s === 'B' || s === 'E') {
//     console.log('Middle');
//   } else {
//     console.log('Hooray');
//   }
// }

// chm('11B')
// chm('23C');
// chm('3E');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const pass = 'aSGaR'
// const passLower = pass.toLowerCase()
// const final = passLower[0].toUpperCase() + passLower.slice(1)
// console.log(final);

// const email = 'hello@asgar.com'
// const loginEmail = '  Hello@Asgar.com  \n'

// const lowerEmail = loginEmail.toLowerCase()
// const trimmedEmail = lowerEmail.trim()
// console.log(trimmedEmail);

// const priceGB = '233,19@'
// console.log(priceGB);
// const priceUS = priceGB.replace('@', '$').replace(',', '.')
// console.log(priceUS);

// const announcement = '12All passengers come to boarding door 23. Boarding door 23!'
// const newAnn = announcement.replaceAll('door', 'gate')
// console.log(newAnn);

// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase()
//   if (baggage.includes('gun') || baggage.includes('knife')) {
//     console.log('You are not allowed');
//   } else {
//     console.log('Welcome');
//   }
// }

// checkBaggage('I have a laptop, some Food and a Knife')
// checkBaggage('I have a gun and toys')
// checkBaggage('Socks and camera')

// console.log(announcement.includes(23));
// console.log(announcement.startsWith(12));

// const capitalizeName = function(name) {
//   const names = name.split(' ')
//   console.log(names);
//   const finArr = []
//   for (const n of names) {
//     // const final = n[0].toUpperCase() + n.slice(1)
//     const final = n.replace(n[0], n[0].toUpperCase())
//     finArr.push(final)
//   }
//   console.log(finArr.join(' '));
// }

// capitalizeName('lisa ann dani daniels')
// capitalizeName('asgar elchin ruhin cats');

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

// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert('Too small');
//   case 4:
//     alert('Exactly!');
//   case 5:
//     alert('Too big');
//   default:
//     alert("I don't know such values");
// }

// let a = '1';
// let b = 0;

// switch (+a) {
//   case b + 1:
//     alert('this runs, because +a is 1, exactly equals b+1');
//     break;

//   default:
//     alert("this doesn't run");
// }

// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }


// console.log(gameEvents.values());

// const events = [...new Set(gameEvents.values())]
// console.log(events);

// gameEvents.delete(64)

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// const time = [...gameEvents.keys()]
// const lastTime = time[time.length - 1]
// console.log(`An event happened, on average, every ${lastTime / gameEvents.size} minutes`);

// for (const [key, value] of gameEvents) {

//   const message = key <= 45 ? 'FIRST' : 'SECOND'
//   console.log(`[ ${message} HALF ] ${key}: ${value}`);
// }


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

// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase()
// }

// const upperFirstWord = function(str) {
//   const [first, ...remained] = str.split(' ')
//   return [first.toUpperCase(), ...remained].join(' ')
// }

// // high order function

// const transformer = function(str, fn) {
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

const greet = function(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  }
}

// const greetSalam = greet('Salam')
// greetSalam('Asgar')
// greetSalam('Jonas');

const greetArw = (greeting) => (name) => console.log(`${greeting}, ${name}`);

// greetArw('heey')('Mestaaan')

const luthansa = {
  airline: 'Luthansa',
  iataCode: 'LH',
  bookings: [],
  book: function(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name
    })
  }
}

// luthansa.book(243, 'Asgar')
// luthansa.book(112, 'Mestan');
// console.log(luthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}

const book = luthansa.book

// book.call(eurowings, 111, 'Leo Messi')

// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'SS',
//   bookings: []
// }

// book.call(swiss, 77, "Xavi Sim")
// const arr = []
// const str = 'iney'

// console.log(swiss);
// console.log(arr);
// console.log(str);
// str.concat('yoyuq')
// arr.push('ehur')

// const bookSW = book.bind(swiss)

// bookSW(100, 'Xalid')

// BIND() with EVENT LISTENERS
// luthansa.planes = 300
// luthansa.buyPlane = function() {
//   console.log(this)

//   this.planes++
//   console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click', luthansa.buyPlane.bind(luthansa));

// const addTax = (rate, value) => {
//   return value + value * rate
// }
// console.log(addTax(0.2, 100));

// const addDDD = addTax.bind(null, 0.1)

// console.log(addDDD(200))
// console.log(addDDD(600));

// const addBBB = function(rate) {
//   return function(value) {
//     return value + value * rate;
//   }
// }

// const addRate = addBBB(0.3)
// const addValue = addRate(500)
// console.log('weg', addValue);


// book.bind(swiss)(33, 'isik')

// CALL and APPLY methods

// while ( condition ) {
//   //the loop body 
// }

// let i = 0;
// while (i < 5) {
//   // shows 0, 1, ..., 4  console.log(i);
//   i++;
// }

// let i = 3;
// while (i) {
//   // when i becomes 0, the condition becomes falsy, and the loop stops
//   console.log(i);
//   i--;
// }

// let i = 3;
// while (i) alert(i--);

// do {
//   // loop body
// } while (condition);


// let i = 0;
// do {
//   alert(i);
//   i++;
// } while (i < 3);

// for (begin; condition; step) {
//   // ... loop body ...
// }

// for (let i = 0; i < 3; i++) {
//   alert(i); // 0, 1, 2
// }


// // run begin  let i = 0
// // if condition → run body and run step  if (i < 3) { alert(i); i++ }
// if (i <  3)  { alert(i); i++ }
// // if condition → run body and run step
// if (i <  3)  { alert(i); i++ }
// // if condition → run body and run step  if (i < 3) { alert(i); i++ }
// if (i <  3)  { alert(i); i++ }
// // ...finish, because now i == 3

// for (let i = 0; i < 3; i++) {
//   console.log(i); // 0, 1, 2
// }
// console.log(i); // error, no such variable

// let i = 0;
// for (i = 0; i < 3; i++) {
//   // use an existing variable  
//   console.log(i); // 0, 1, 2
// }
// console.log(i); // 3, visible, because declared outside of the loop

// let i = 0; // we have i already declared and assigned
// for (; i < 3; i++) {
//   // no need for "begin"
//   console.log(i); // 0, 1, 2
// }

// let i = 0;
// for (; i < 3; ) {
//   console.log(i++);
// }

// for ( ; ; ) {
//   // repeats without limits
//   console.log('I am in the infinity loop');
// }

// let sum = 0;
// while (true) {
//   let num = Number(prompt('Enter a number', ''));
//   if (!num) break;
//   sum += num;
// }
// console.log('Sum: ' + sum);

// for (let i = 0; i < 10; i++) {
//   // if true, skip the remaining part of the body
//   if (i % 2 == 0) continue;

//   console.log(i); // 1, 3, 5, 7, 9
// }


//  let str = prompt('Enter the data')
//  let str = `"description": "Təsvir",
//         "price": "Qiymət",
//         "add": "Əlavə et",
//         "your_include": "Ilk qiymət",
//         "final_price": "Son qiymət",
//         "delete": "Sil",
//         "send_offer": "Təklif göndər",
//         "there_is": "Hazırda əlavə edilmiş təklif yoxdur",
//         "please_wait": "Zəhmət olmasa gözləyin, Pro təklif göndərəcək",
//         "add_new": "Yeni təklif əlavə edin"`;

// const convertStr = function(str) {
//   let output = ''
//   const sentences = str.replaceAll('\n', '').split(',')
//   for (const sentence of sentences) {
//     const modSentence = sentence.trim()
//     const [key, word] = modSentence.split(':')
//     const trimmedWord = word.trim();
//     output = output + trimmedWord + '+'
//     console.log(output);
//   }
//   console.log(output);
// }

// convertStr(str)


// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function() {
//     const newAnswer = Number(
//       prompt(`What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)`)
//     );

//     typeof newAnswer === 'number' && newAnswer < this.options.length && this.answers[newAnswer]++
//     this.displayResults('string')
//   },
//   displayResults: function(type) {
//     if(type === 'string') {
//       console.log(`Poll results are: ${this.answers.join(' ')}`);
//     } else {
//       console.log(this.answers);
//     }
//   }
// }
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
// If type is 'array', simply display the results array as it is, using console.log(). This should be the default option.
// If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// (function() {
//   console.log('Will run ONCE');
//   let isPravite = 23
// })()

// CLOSURES

// const secureBooking = function() {
//   let passengerCount = 0
//   return function() {
//     passengerCount++
//     console.log(`${passengerCount} passengers`);
//   }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();

// let f;

// const g = function() {
//   const a = 23
//   f = function() {
//     console.log(a*2);
//   }
// };

// const h = function() {
//   const b = 777;
//   f = function() {
//     console.log(b*2)
//   }
// }

// g()
// f()

// // re-assigning f function
// h()
// f()

// const boardPassengers = function(n, wait) {
//   const perGroup = n / 3

//   setTimeout(function() {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`)
//   }, wait * 1000)

//   console.log(`We will start boarding in ${wait} seconds`);
// }

// boardPassengers(12, 5)

// ARRAY METHODS

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e']


// SLICE  -- NOT MUTATE
// console.log(arr.slice(2))
// console.log(arr.slice(2, 4));
// console.log(arr);

// SPLICE -- DO MUTATE
// console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr.splice(1, 2, 'f'));
// console.log(arr);

//REVERSE -- DO MUTATE
// console.log(arr.reverse());
// console.log(arr);

// CONCAT --NOT MUTATE
// let arr2 = ['f', 'g', 'h', 'i', 'j']
// let letters = arr.concat(arr2)
// console.log(letters);

// JOIN -- NOT MUTATE
// console.log(letters.join('-'));
// console.log(letters);

// AT

// const newArr = ['a', 'b', 'c', 'd']

// console.log(newArr[0]);
// console.log(newArr.at(0));

// getting the last element
// console.log(newArr[newArr.length - 1]);
// console.log(newArr.slice(-1)[0]);
// console.log(newArr.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// forEach is HIGHER ORDER FUNCTIONs
// // You CANNOT break forEach loop. It iterates untill the end
// movements.forEach((movement, i, array) => {
//   console.log(array);
//    if (movement > 0) {
//      console.log(`${i+1}: You deposited ${movement}`);
//    } else {
//      console.log(`${i + 1}: You withdrew ${Math.abs(movement)}`);
//    }
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(val, key, map) {
//   console.log(map);
//   console.log(val, key);
// })

// const rawJuliaDogs = [3, 5, 2, 12 , 7 ]
// const kateDogs = [4, 1, 15, 8, 3]


// const checkDogs = function(dogsJulia, dogsKate) {
//   const correctJuliaDogs = dogsJulia.slice(1, rawJuliaDogs.length - 1);
//   const allDogs = [...correctJuliaDogs, ...dogsKate]; 
//   allDogs.forEach(function(dog, i) {
//     if(dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is an puppy, and is ${dog} years old`);
//     }
//   }) 
// }

// checkDogs(rawJuliaDogs, kateDogs);

// let tempFah = prompt('Enter degree with Fah.');
// let tempCel = Math.trunc((5 / 9) * (tempFah - 32));
// console.log(tempFah, tempCel, typeof tempCel);
// console.log('Here1: ', tempCel < 0);
// console.log('Here2 ', 0 < tempCel < 100);
// console.log('Here3: ', tempCel > 100);
// if (tempCel < 0) {
//   console.log(`Temperature is ${tempCel} C and water will be ice `);
// } else if (0 < tempCel < 100) {
//   console.log(
//     `Temperature is ${tempCel} C and water will not change its state `
//   );
// } else {
//   console.log(`Temperature is ${tempCel} C and water will be vapor `);
// }

// let userName = 'John';

// function showMessage() {
//   const message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage(); // Hello, John

// function showMessage(from, text) { // arguments: from, text
//   console.log(from + ': ' + text);
// }

// showMessage('Akshin', 'Hello!'); // Akshin: Hello!
// showMessage('Aqalar', "How are you?"); // Aqalar: How are you?
// showMessage('Ismail', "What's up?"); // Ismail: What's up?


// function showMessage(from, text = 'no text given') {
//   from = '*' + from + '*'; // make "from" look nicer
//   console.log(from + ': ' + text);
// }

// showMessage('John'); // *John*: undefined

// function sum(x, y) {
//   return x + y;
// }

// let result = sum(1, 2);
// console.log(result); // 3

// function showMovie(age) {
//   if (age < 18) return;
//   console.log('Showing you the movie');
// }

// showMovie(10)

// function doNothing() { /* empty */ }

// console.log(doNothing() === undefined); // true

// let getRectArea = function (width, height) {
//   return width * height;
// }

// console.log(getRectArea(3, 4)); // 12

// notHoisted(); // ReferenceError: Cannot access 'notHoisted' before initialization

// let notHoisted = function () {
//   console.log('test');
// };

// function sayHi() {	// (1) create  
//   console.log('Hello');
// }

// let func =  sayHi;	// (2) copy

// func(); // Hello
// sayHi(); // Hello

// function greetVisitors(male, female) {
//   console.log(male, female);
//   const message = `Hello, mr. ${male}, and ms. ${female}`
//   return message
// }

// const greetingMessage = greetVisitors('John', 'Anna')
// console.log(greetingMessage);


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// let yesFn = function() {
//   alert('You agreed.');
// }
// let noFn = function() {
//   alert('You canceled the execution.');
// }

// ask('Do you agree?', yesFn, noFn);


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   'Do you agree?',
//   function() { alert('You agreed.'); },
//   function() { alert('You canceled the execution.'); }
// );

// let func = (arg1, arg2, ...argN) => expression;

// let func = function (arg1, arg2, ...argN) {
//   return expression;
// };


// function checkAge(age, granted, denied) {
//   if (age < 18) denied();
//   else granted();
// }

// let age = prompt('What is your age?', 18);

// function grantAccess() {
//   alert('Access granted');
// }

const arr = new Array();
const arr = []; // more common


// mix of values
let arr = ['Apple', { name: 'John' }, true, function () { alert('hello'); }];

const fruits = ["Apple", "Orange", "Pear"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Pear

const alphabet = ['B', 'C', 'D']

// push() => add element to the end || returns length
alphabet.push('E'); //['B', 'C', 'D', 'E']

// unshift() add element to the start || returns length
alphabet.unshift('A') //['A', 'B', 'C', 'D']

// pop() => remove the last element || returns removed element
alphabet.pop() //['B', 'C'];

// shift() => remove the first element || return removed element
alphabet.pop() //['C', 'D'];

// // indexOf() => returns index of the chosen element
// alphabet.indexOf('B') // 0
// alphabet.indexOf('C') // 1
// alphabet.indexOf('D') // 2

// //includes() => return Boolean value
// alphabet.includes('B') // true
// alphabet.includes('Z') // false


fruits[2] = 'Peach'; // now ['Apple', 'Orange', 'Peach']

fruits[3] = 'Lemon'; // now ['Apple', 'Orange', 'Pear', 'Lemon']

// function denyAccess() {
//   alert('Access denied');
// }

// checkAge(age, grantAccess, denyAccess);

const transliterate = function (text) {
  return text
    //russin alphabet
    .replace(/\u042A/g, '')
    .replace(/\u0451/g, 'yo')
    .replace(/\u0439/g, 'i')
    .replace(/\u0446/g, 'ts')
    .replace(/\u0443/g, 'u')
    .replace(/\u043A/g, 'k')
    .replace(/\u0435/g, 'e')
    .replace(/\u043D/g, 'n')
    .replace(/\u0433/g, 'g')
    .replace(/\u0448/g, 'sh')
    .replace(/\u0449/g, 'sch')
    .replace(/\u0437/g, 'z')
    .replace(/\u0445/g, 'h')
    .replace(/\u044A/g, "'")
    .replace(/\u0410/g, 'a')
    .replace(/\u0444/g, 'f')
    .replace(/\u044B/g, 'i')
    .replace(/\u0432/g, 'v')
    .replace(/\u0430/g, 'a')
    .replace(/\u043F/g, 'p')
    .replace(/\u0440/g, 'r')
    .replace(/\u043E/g, 'o')
    .replace(/\u043B/g, 'l')
    .replace(/\u0434/g, 'd')
    .replace(/\u0436/g, 'zh')
    .replace(/\u044D/g, 'e')
    .replace(/\u042C/g, "'")
    .replace(/\u044F/g, 'ya')
    .replace(/\u0447/g, 'ch')
    .replace(/\u0441/g, 's')
    .replace(/\u043C/g, 'm')
    .replace(/\u0438/g, 'i')
    .replace(/\u0442/g, 't')
    .replace(/\u044C/g, "'")
    .replace(/\u0431/g, 'b')
    .replace(/\u044E/g, 'yu')
    //azerbaijani alphabet
    .replaceAll('ç', 'c')
    .replaceAll('ə', 'e')
    .replaceAll('ğ', 'g')
    .replaceAll('ı', 'i')
    .replaceAll('ö', 'o')
    .replaceAll('ş', 's')
    .replaceAll('ü', 'u');
};

const createSlug = function(title) {
  return transliterate(title.toLowerCase())
    .replace(/[^\w\s]/gi, '')
    .split(' ')
    .join('-');
}

console.log(createSlug(
  'Salam olsun HaMiya! necəsən бббб 11 wwe ə абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ Aa, Bʙ, Cc, Çç, Dd, Ee, Ə ə, Ff, Gg, Ƣƣ, Hh, Ii, Ьь, Jj, Kk, Qq, Ll, Mm, Nn, Ꞑꞑ, Oo, Ɵɵ, Pp, Rr, Ss, Şş, Tt, Uu, Vv, Xx, Уy, Zz,'
))

console.log(createSlug('Təmirə hazırlaşırsansa nəzərə almalı olduğun 5 əsas məqam. meslen aaAAA'));
console.log(createSlug('Five key pointers how to plan repair works'));
console.log(createSlug('Пять ключевых советов, которые нужно учитывать, если планируете ремонт'));