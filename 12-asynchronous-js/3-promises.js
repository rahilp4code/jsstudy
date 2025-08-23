"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function render(data, classname = "") {
  const html = `
  <article class="country ${classname}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫 ${(
              +data.population / 1000000
            ).toFixed(1)}M people</span> </p>
            <p class="country__row"><span>🗣️${Object.values(
              data.languages
            )}</span></p>
            <p class="country__row"><span>💰${
              Object.keys(data.currencies)[0]
            } CUR</span></p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = '1';
}

const onError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

//💀OlD way
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}?fullText=true`);
// request.send();

//⭐Creating a Promise
const req = fetch("https://restcountries.com/v3.1/name/india?fullText=true");
console.log(req);

// const getResponse0 = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true1`).then(function (response) {
//         console.log(response);
//         return response.json();
//     }).then(function (data) {
//         console.log([data])
//     })
// };

//⭐this is the simplified version of above code
// const getResponse = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true1`)
//         .then(response => {
//             if (!response.ok) throw new Error(`'Country Not Found(${response.status})'`);
//             return response.json();
//         })
//         .then(data => {
//             render(data[1]);
//             const neighbour = data[1].borders?.[0];
//             // const neighbour = 'ewfyocgewhcvew'; new error for this as well
//             console.log(neighbour)
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//         }).then(response => {
//             if (!response.ok) throw new Error(`'Country Not Found(${response.status})'`);
//             return response.json()
//         }).then(data => { console.log(data); render(...data, 'neighbour') }).catch(err => {
//             console.error(`💥💥${err}💥💥`)
//             onError(`Something Went Wrong 💥💥${err.message}💥💥. Try Again`)
//         }).finally(() => countriesContainer.style.opacity = '1')
// };

//⭐Even more Simplified⭐

//lets make a function which converst it into jason and checks for error
const getJSON = function (url, errorMsg = "Something Went Wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`'${errorMsg}:(${response.status})'`);
    return response.json();
  });
};

const getResponse = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}?fullText=true1`,
    "Country Not Found"
  )
    .then((data) => {
      render(data[1]);
      const neighbour = data[1].borders?.[0];
      if (!neighbour) throw new Error("Neighbour Not Found");
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((data) => {
      console.log(data);
      render(...data, "neighbour");
    })
    .catch((err) => {
      console.error(`💥💥${err.message}💥💥`);
      onError(`💥💥${err.message}💥💥`);
    })
    .finally(() => (countriesContainer.style.opacity = "1"));
};

btn.addEventListener("click", () => {
  getResponse("India");

  // getResponse('Indiasasasa')
  // in this error the main error is that arguement is not a country but fetch still fulfills it and moves on and the error caught is that, cant finds svg of the arguement to fix it we manually put the error, this happens because the response is false but not rejected
  // to fix it we manually throw the error by checking the response property where if ok keyword is false we 'throw new Error' which is catched by '.catch'

  // onError(`Something Went Wrong 💥💥💥💥Try Again`)
});

//error handling
// .then can have 2 arguements, first if fullfiled and second if rejected, but we dont have to add 2nd argue in everu .then we can just use .catch which throws the functions if any promise causes error
// .finally throws its function if the promise is successfull or rejected
