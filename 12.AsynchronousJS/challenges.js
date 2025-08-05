'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries')

function render(data, classname = '') {
    const html = `
  <article class="country ${classname}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫 ${(+data.population / 1000000).toFixed(1)}M people</span> </p>
            <p class="country__row"><span>🗣️${Object.values(data.languages)}</span></p>
            <p class="country__row"><span>💰${Object.keys(data.currencies)[0]} CUR</span></p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = '1';

}

const onError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg)
    // countriesContainer.style.opacity = 1;
}

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key'
'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${}&longitude=${}'


// 1. 2. 3. 4. 5. (part ONE completed)

// const req = fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${52.508}&longitude=${13.381}`).then(res => res.json()).then(data => console.log(`You are in ${data.city}, ${data.countryName}`))
// console.log(req)
//You are in ${data.city}, ${data.countryName}

const whereAmI = function (latitude, longitude) {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
        .then(res => {
            if (!res.ok) throw new Error(`Something Went Wrong Check Latitude/Longitude: ${res.status}`)
            return res.json()
        })
        .then(data => {
            console.log((`You are in ${data.city}, ${data.countryName}`))
            console.log(data.countryCode)
            return fetch(`https://restcountries.com/v3.1/alpha/${data.countryCode}`)
        })
        .then(res => res.json())
        .then(data => render(data[0]))
        .catch(err => {
            console.log(`💥💥${err.message}💥💥`)
            console.error(`💥💥${err}💥💥`)
        }
        )

}
whereAmI(52.508, 13.381)
whereAmI(19.037, 72.873)
whereAmI(-33.933, 18.474)
// whereAmI()
// whereAmI(3, 23)
// whereAmI(99, 66) // error