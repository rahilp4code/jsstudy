'use strict';

//important lec

const fastBus = {
    busStop: 'fastBus',
    busCode: 'FB',
    booking: [],
    book(num, name) {
        console.log(`${name} Booked a seat on ${this.busStop} ${this.busCode}${num}`);
        this.booking.push({ Bus: `${this.busCode}${num}`, name })
    }

}
fastBus.book(815, 'rahil')
fastBus.book(815, 'Faiz And Firoz')
console.log(fastBus)

const blackBus = {
    busStop: "BlackBus",
    busCode: "BB",
    booking: [],
    // book: fastBus.book // works
}

const book = fastBus.book

//⭐.call method ⭐
//tells the function what this keyword is referring to


book.call(blackBus, 121, 'sahil')
console.log(blackBus)

book.call(fastBus, 121, 'sahil')
console.log(fastBus)
//✔️works
// blackBus.book(23, "Sahil")
// console.log(blackBus)

//✖️Does not work
//book(23, "Sahil") // wont work because of the this keyword in the function it would have worked if it was method


//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//⭐.apply Method⭐
//apply method does basically the same thing the only differenec is that apply doesnt receive the list of arguements but an array of those arguements

const arr = [212, 'urwa']

book.apply(fastBus, arr)
console.log(fastBus)

// not the best but we got better

book.call(blackBus, ...arr)
console.log(blackBus)