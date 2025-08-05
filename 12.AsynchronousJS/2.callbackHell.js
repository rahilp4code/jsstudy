'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries')

//cors- cross origin resource sharing


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


function Country(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}?fullText=true
`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data)
        // console.log(data.borders[5])

        //render country 1
        render(data)

        //get country 2
        const neighbour = data.borders[0];
        console.log(neighbour)
        if (!neighbour) return;


        //render neighbour
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const [data2] = JSON.parse(this.responseText)
            console.log(data2)
            render(data2, 'neighbour')
        })

        //get country 3
        const neighbour2 = data.borders[1];
        console.log(neighbour2)
        if (!neighbour2) return;


        //render neighbour
        const request3 = new XMLHttpRequest();
        request3.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour2}`);
        request3.send();

        request3.addEventListener('load', function () {
            const [data3] = JSON.parse(this.responseText)
            console.log(data3)
            render(data3, 'neighbour')
        })

        //get country 3
        const neighbour4 = data.borders[5];
        console.log(neighbour4)
        if (!neighbour4) return;


        //render neighbour
        const request4 = new XMLHttpRequest();
        request4.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour4}`);
        request4.send();

        request4.addEventListener('load', function () {
            const [data4] = JSON.parse(this.responseText)
            console.log(data4)
            render(data4, 'neighbour')
        })

    });
};
Country('india')


//callback hell

setTimeout(() => {
    console.log('1sec')
    setTimeout(() => {
        console.log('10sec')
        setTimeout(() => {
            console.log('100sec')
            setTimeout(() => {
                console.log('1000sec')
                setTimeout(() => {
                    console.log('10000sec')
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

//cute triangle is formed, which hard to understand and read so avoid it 