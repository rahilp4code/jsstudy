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
  // countriesContainer.style.opacity = 1;
};

//////////////////////////////////////////////////////////////////

// 🏡Getting geoLocation🏡

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.log(err)
// );

const getPosition = () => {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude, longitude } = pos.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
      );
    })
    .then((res) => {
      if (!res.ok)
        throw new Error(
          `Something Went Wrong Check Latitude/Longitude: ${res.status}`
        );
      return res.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      console.log(data.countryCode);
      return fetch(`https://restcountries.com/v3.1/alpha/${data.countryCode}`);
    })
    .then((res) => res.json())
    .then((data) => render(data[0]))
    .catch((err) => {
      console.log(`💥💥${err.message}💥💥`);
      console.error(`💥💥${err}💥💥`);
    });
};

whereAmI();
