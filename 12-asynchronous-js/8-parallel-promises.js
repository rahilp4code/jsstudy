("use strict");

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
  countriesContainer.style.opacity = "1";
}
const onError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getPosition = () => {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const getJSON = function (url, errorMsg = "Something Went Wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`'${errorMsg}:(${response.status})'`);
    return response.json();
  });
};

// multiple promises in one async function
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${c1}?fullText=true1`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${c2}?fullText=true1`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${c3}?fullText=true1`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);

    //running parallel
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}?fullText=true1`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}?fullText=true1`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}?fullText=true1`),
    ]);
    console.log([data.map((data) => data[0].capital)]);
  } catch (err) {
    console.error(`${err.message}`);
  }
};
// get3Countries("portugal", "canada", "tanzania");

// but in above non them are dependent on each other then why run them them in dependently, so use Promise.all
// problem with parallel running promises is that if one promise is rejected then the whole promises are rejected, so we say that promises.all short circuits when one pormise rejects
//so thats the promise.all combinator, so its called the combinator function because it allows us to combine multiple promises

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(5),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));

Promise.all([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
