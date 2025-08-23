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

// Catching Error in async await
// try.....catch

// try {
//   let y = 2;
//   const x = 3;
//   x = 4;
// } catch (err) {
//   alert(err.message);
// }

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;

    //Reverse Geocoding
    const geo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );
    console.log(geo);
    if (!geo.ok) throw new Error("COULDNT FIND THE LOCATION");
    const dataGeo = await geo.json();

    //Country Card
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.countryName}?fullText=true1`
    );
    if (!geo.ok) throw new Error("COULDNT FIND THE COUNTRY");

    const data = await res.json();
    console.log(data);
    render(data[1]);

    return `You are in ${dataGeo.city},${dataGeo.countryName}`;
  } catch (err) {
    console.error(`💥${err}💥`);
    onError(`💥${err.message}💥`);

    // solve the problrm on line 93 , we throw err manually to reject the promise
    throw err;
  }
};
console.log("1: before first");
// const city = whereAmI(); // async func always returns a PROMISE
// console.log(city); // this code is synchronous now but wont return the string its a promise
whereAmI()
  .then((city) => console.log(`2: ${city}`))
  .catch((err) => console.error(`${err.message}`))
  .finally(() => console.log("3: done")); // works but theres a catch
// even if the async function is rejected the city log would be fulfiled and will return undefined
console.log("4: First");

//not so useful way below

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();
