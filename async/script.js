'use strict'

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
  countriesContainer.style.opacity = 1;
}

///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');


const renderCountry = function(data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

// const getCountryAndNeighbour = function (country) {

//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render country 1
//     renderCountry(data)
 
//     // get neighbour country (2)
//     const neighbour = data.borders?.[0]

//     if(!neighbour) return

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function() {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour')
//     })

//   });
// };

// getCountryAndNeighbour('portugal');


///// FETCH API

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// const request = fetch(`https://restcountries.com/v2/name/portugal`)
// console.log(request);

// const getCountryData = function(country) {
//   // fetch function returns PROMISE and then we can use it using .then
//   fetch(`https://restcountries.com/v2/name/${country}`)
//   .then(function(response) {
//     console.log(response);
//     return response.json()
//   })
//   .then(function(data) {
//     console.log(data);
//     renderCountry(data[0])
//   })
// }

// const getCountryData = function(country) {
//   // fetch function returns PROMISE and then we can use it using .then
//   fetch(`https://restcountries.com/v2/name/${country}`)
//   .then((response) => {
//     console.log(response);
//     if(!response.ok) {
//       throw new Error(`Country not found ${response.status}`)
//     }
//     return response.json()
//   })
//   .then((data) => {
//     renderCountry(data[0])
//     const neighbour = data[0].borders?.[0]

//     if (!neighbour) return
//     return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//   })
//   .then(response => response.json())
//   .then(data => renderCountry(data, 'neighbour'))
//   .catch(err => {
//     console.error(`${err} ❗️❗️`);
//     renderError(`Something went wrong. ${err.message}. Try again!`)
//   })

//   // THESE ARE 'FLAT CHAIN' OF PROMISES
// }

// btn.addEventListener('click', function() {
//   getCountryData("portugal")
// })

// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log('draw is happening');
//   setTimeout(() => {
//     if(Math.random() >= 0.5) {
//       resolve('You win')
//     } else {
//       reject(new Error('You lost'))
//     }
//   }, 2000)
// })

// lotteryPromise
// .then(res => console.log(res))
// .catch(err => console.log(err))

// const wait = (sec) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, sec * 1000);
//   })
// }
// wait(3)
// .then(() => {
//   console.log('waited for 3 sec');
//   return wait(2)
// })
// .then(() => {
//   console.log('waited for 2 sec');
// })

// Promise.resolve('aaa').then((a) => { console.log(a) })
// Promise.reject(new Error('bbb')).catch((a) => { console.log(a) })

const getPosition = () => {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => console.log(err)
    // )
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

getPosition().then(pos => console.log(pos))