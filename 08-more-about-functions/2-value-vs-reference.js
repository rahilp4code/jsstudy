const flight = 815;
const rahil = {
    name: 'Rahil P',
    passport: 122345666
}

const checkOut = function (flightNum, passenger) {
    flightNum = 'O815'
    passenger.name = 'Mr.' + rahil.name

    if (passenger.passport === 122345666) {
        console.log('Done');
    } else { console.log('Wrong/Invalid Passport') }

}

checkOut(flight, rahil)
console.log(flight)
console.log(rahil)

//its same as doing...
// const passenger = jonas  // giving it the reference of it so both share same ref

const newPassport = function (person) {
    person.passport = Math.floor(Math.random() * 100000000)
}

newPassport(rahil)
checkOut(flight, rahil)
console.log(rahil)

// this is an example of how reference get modified even if they were modified in a blocked scope.

// the term 'passing by value and passing by reference is used for function' and javascript only has passing by value feature. ⭐And passing by meaning is moving past something with affecting it.


//Next lecture was theory of First Class function AND Higher-Order functions