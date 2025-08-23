'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries')

//cors- cross origin resource sharing

function Country(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}?fullText=true
`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data)

    const html = `
  <article class="country">
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
  })
}
Country('india')
Country('United states')
Country('Portugal')



const india = {
  languages: {
    eng: 'English',
    hin: 'Hindi'
  },
  currencies: {
    INR: { name: "indian rupee", symbol: 'idk' }
  }
}
console.log(india.languages.eng)
console.log(india.languages.hin)
console.log(india.languages)
console.log(Object.keys(india.currencies)[0])

function showCountryCard(country) {
  const currencyKey = Object.keys(country.currencies)[0]; // e.g., 'INR', 'USD'
  const currency = country.currencies[currencyKey];

  console.log(`Language: ${Object.values(country.languages).join(', ')}`);
  console.log(`Currency: ${currency.name} (${currency.symbol})`);
}