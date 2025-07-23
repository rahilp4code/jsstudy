'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//154
const movementElements = function (movements) {
    containerMovements.innerHTML = ''; //to empty the container before adding
    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div> 
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html)
    });
};
movementElements(account1.movements);
//158
const user = 'Rahil Pathan'

const createUsername = function (accs) {
    accs.forEach(function (acc) {
        acc.userName = acc.owner.toLowerCase().split(' ').map(user => user[0]).join('')
    }
    )
}
console.log(createUsername(accounts))
console.log(accounts)

//160
const calTotalAmount = function (acc) {
    const balance = acc.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${balance}€`;
}
calTotalAmount(account1.movements)
//162
const calTotalSummary = function (arr) {
    let summaryIn = arr.filter((val) => val > 0).reduce((acc, mov) => acc + mov);
    labelSumIn.textContent = `${summaryIn}€`;
    let summaryOut = arr.filter((val) => val < 0).reduce((acc, mov) => acc + mov);
    labelSumOut.textContent = `${Math.abs(summaryOut)}€`;
    let summaryInt = arr.filter((val) => val > 0).map(val => val * 1.2 / 100).filter(int => int >= 1).reduce((acc, cur) => acc + cur, 0);
    labelSumInterest.textContent = `${summaryInt}€`;
}
calTotalSummary(account1.movements)

// const calTotalSummaryMinus = function (arr) {

//     let summaryOut = arr.filter((val) => val < 0).reduce((acc, mov) => acc + mov)
//     labelSumOut.textContent = `${summaryOut}€`
// }
// calTotalSummaryMinus(account1.movements)

// const calTotalSummaryInterest = function (arr) {

//     let summaryInt = arr.filter((val) => val > 0).reduce((acc, mov) => acc + mov)
//     labelSumInterest.textContent = `${Math.floor(summaryInt * 0.12)}€`
// }
// calTotalSummaryInterest(account1.movements)


