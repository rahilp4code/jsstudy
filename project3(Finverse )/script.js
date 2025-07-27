'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// FINVERSE APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsDates: [
        '2024-11-18T21:31:17.178Z',
        '2024-12-23T07:42:02.383Z',
        '2024-08-01T10:51:36.790Z',
        '2025-01-28T09:15:04.904Z',
        '2025-04-01T10:17:24.185Z',
        '2025-07-20T14:11:59.604Z',
        '2025-07-24T23:36:17.929Z',
        '2025-07-26T17:01:17.194Z',
    ],
    currency: 'EUR',
    locale: 'en-IN', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
        '2024-11-01T13:15:33.035Z',
        '2024-11-30T09:48:16.867Z',
        '2024-12-25T06:04:23.907Z',
        '2025-01-25T14:18:46.235Z',
        '2025-02-05T16:33:06.386Z',
        '2025-04-10T14:43:26.374Z',
        '2025-06-25T18:49:59.371Z',
        '2025-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};


const accounts = [account1, account2];
const acc1 = accounts.find(acc => acc.owner === 'Jonas Schmedtmann').pin;
// console.log(acc1)

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

//189

// const formateMovementDates = function (date) {
//     const caalcDaysPassed = (date1, date2) => Math.abs((date2 - date1)) / (1000 * 60 * 60 * 24);
//     const date = new Date(date)
//     const day = `${date.getDate()}`.padStart(2, 0);
//     const month = `${date.getMonth() + 1} `.padStart(2, 0);
//     const year = date.getFullYear();
//     return `${day} /${month}/${year}`;

// }
// console.log(formateMovementDates(account1.movementsDates))

const formateDates = function (date, locale) {
    const caalcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))

    const dayspassed = caalcDaysPassed(new Date(), date)
    console.log(dayspassed)

    if (dayspassed === 0) return 'Today';
    if (dayspassed === 1) return 'Yesterday';
    if (dayspassed <= 7) return `${dayspassed} days ago`;
    else {
        // const day = `${date.getDate()}`.padStart(2, 0);
        // const month = `${date.getMonth() + 1} `.padStart(2, 0);
        // const year = date.getFullYear();
        // return `${day} /${month}/${year}`;
        return new Intl.DateTimeFormat(locale).format(date)
    }

}

const formatCur = function (val, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(val)
}

const setLogoutTimer = function () {
    const tick = function () {
        let min = String(Math.trunc(time / 60)).padStart(2, 0);
        let sec = String(time % 60).padStart(2, 0);

        //each loop,shows remaining time
        labelTimer.textContent = `${min}:${sec}`;

        //when 0 seconds ,stop timer and log out user
        if (time === 0) {
            clearInterval(tick);
            containerApp.style.opacity = '0';
            labelWelcome.innerHTML = `Log in to get started`;

        }

        // decrease 1s
        time--
    };

    //set time of 5min
    let time = 300;

    //call the timer every sec
    tick();
    const timer = setInterval(tick, 1000);
    return timer


}



//154
const movementElements = function (acc, sort = false) {
    containerMovements.innerHTML = ''; //to empty the container before adding

    const combinedMovDate = acc.movements.map((mov, i) => ({ movement: mov, movementDate: acc.movementsDates.at(i), }))
    console.log(combinedMovDate)

    if (sort) combinedMovDate.sort((a, b) => a.movement - b.movement)
    // const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    combinedMovDate.forEach(function (obj, i) {
        const { movement, movementDate } = obj
        const type = movement > 0 ? "deposit" : "withdrawal";

        const date = new Date(movementDate);
        const display = formateDates(date, acc.locale);

        const formatedMov = formatCur(movement, acc.locale, acc.currency)

        // new Intl.NumberFormat(acc.locale, {
        //     style: 'currency',
        //     currency: acc.currency
        // }).format(movement)

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${display}</div>
          <div class="movements__value">${formatedMov}</div>
        </div> 
        `;
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};
// movementElements(account1.movements);

//158
const user = 'Rahil Pathan'

const createUsername = function (accs) {
    accs.forEach(function (acc) {
        acc.userName = acc.owner.toLowerCase().split(' ').map(user => user[0]).join('')
    }
    )
}
createUsername(accounts)
// console.log(accounts)

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account)

//challeneg
// for (const acc of accounts) {
//     if (acc.owner === 'Jessica Davis') {
//         console.log(acc);
//     };
// }

//160
const calTotalAmount = function (acc) {
    acc.balance = Number(acc.movements.reduce((acc, cur) => acc + cur, 0));
    labelBalance.textContent = `${formatCur(acc.balance, acc.locale, acc.currency)}`;
    // console.log(acc)
}
// calTotalAmount(account1.movements)

//162
const calTotalSummary = function (acc) {
    let summaryIn = acc.movements
        .filter((val) => val > 0)
        .reduce((acc, mov) => acc + mov);
    // labelSumIn.textContent = `${summaryIn.toFixed(2)}€`;
    labelSumIn.textContent = `${formatCur(summaryIn, acc.locale, acc.currency)}`;

    let summaryOut = acc.movements
        .filter((val) => val < 0)
        .reduce((acc, mov) => acc + mov);
    // labelSumOut.textContent = `${Math.abs(summaryOut.toFixed(2))}€`;
    labelSumOut.textContent = `${formatCur(Math.abs(summaryOut), acc.locale, acc.currency)}`;


    let summaryInt = acc.movements
        .filter((val) => val > 0)
        .map((val) => (val * `${acc.interestRate}`) / 100)
        .filter((int) => int >= 1)
        .reduce((acc, cur) => acc + cur, 0);
    // labelSumInterest.textContent = `${summaryInt.toFixed(2)}€`;
    labelSumInterest.textContent = `${formatCur(summaryInt, acc.locale, acc.currency)}`;

}
// calTotalSummary(account1.movements)

// const calTotalSummaryMinus = function (arr) {

//     let summaryOut = arr.filter((val) => val < 0).reduce((acc, mov) => acc + mov)
//     labelSumOut.textContent = `${ summaryOut }€`
// }
// calTotalSummaryMinus(account1.movements)

// const calTotalSummaryInterest = function (arr) {

//     let summaryInt = arr.filter((val) => val > 0).reduce((acc, mov) => acc + mov)
//     labelSumInterest.textContent = `${ Math.floor(summaryInt * 0.12) }€`
// }
// calTotalSummaryInterest(account1.movements)


function updateUi(acc) {
    //Display Movements
    movementElements(acc);

    //Display balance
    calTotalAmount(acc);

    //Display Summary
    calTotalSummary(acc);
}

//165

//event handler
let currentAcc, timer;

//fake always logged In
// currentAcc = account1
// containerApp.style.opacity = '100';
// updateUi(currentAcc);


btnLogin.addEventListener('click', e => {
    //prevent form from submitting:
    e.preventDefault();
    currentAcc = accounts.find(acc => acc.userName === inputLoginUsername.value);
    if (currentAcc?.pin === Number(inputLoginPin.value)) {
        // using optional chaining in 'if' wont throw error
        //Clear Inputs Fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur(); // stops the blinking after entrr
        //Display UI and Message
        containerApp.style.opacity = '100';
        labelWelcome.innerHTML = `Welcome back, ${currentAcc.owner.split(' ')[0]} `;

        // creat date n time
        //Experimenting API
        //ISO language code table
        const today = new Date()
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            // weekday: 'narrow',
            // weekday: 'short',
            weekday: 'long',
        }//nice 
        const locale = navigator.language; //sets the language as per browser language
        console.log(locale)
        // labelDate.textContent = new Intl.DateTimeFormat('en-IN', options).format(today);
        labelDate.textContent = new Intl.DateTimeFormat(currentAcc.locale, options).format(today);

        // const now = new Date();
        // const day = `${now.getDate()} `.padStart(2, 0);
        // const month = `${now.getMonth() + 1} `.padStart(2, 0);
        // const year = now.getFullYear();
        // const hour = `${now.getHours()}`.padStart(2, 0);
        // const min = `${now.getMinutes()}`.padStart(2, 0);
        // labelDate.textContent = `${day} /${month}/${year}, ${hour}:${min} `;

        //start timer
        if (timer) clearInterval(timer)
        timer = setLogoutTimer()

        //Display Movements,Summary,balance
        updateUi(currentAcc)


    };
})

//166
btnTransfer.addEventListener('click', e => {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferAmount.blur();
    if (amount > 0 && receiverAcc && amount <= currentAcc.balance && receiverAcc.userName !== currentAcc.userName) {
        currentAcc.movements.push(-amount);
        receiverAcc.movements.push(amount);

        //add dates
        currentAcc.movementsDates.push(new Date().toISOString());
        receiverAcc.movementsDates.push(new Date().toISOString());
        updateUi(currentAcc);
        console.log('valid');
        //start timer
        if (timer) clearInterval(timer)
        timer = setLogoutTimer()

    };
})

btnLoan.addEventListener('click', e => {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 && currentAcc.movements.some(mov => mov >= (amount / 10))) {
        setTimeout(() => {
            inputLoanAmount.value = '';
            inputLoanAmount.blur();
            currentAcc.movements.push(amount);
            //add dates
            currentAcc.movementsDates.push(new Date().toISOString());
            updateUi(currentAcc)
        }, 2500)
    }
    //start timer
    if (timer) clearInterval(timer)
    timer = setLogoutTimer()
    inputLoanAmount.value = '';
})

btnClose.addEventListener('click', e => {
    e.preventDefault();

    if (currentAcc.userName === inputCloseUsername.value && currentAcc.pin === Number(inputClosePin.value)) {
        inputCloseUsername.value = inputClosePin.value = '';
        inputClosePin.blur();
        const index = accounts.findIndex(acc => acc === currentAcc);
        // const index = accounts.findIndex(acc => acc.userName === currentAcc.userName)
        console.log(index);
        accounts.splice(index, 1);
        containerApp.style.opacity = '0';
    }
})

//172
let sorted = false
btnSort.addEventListener('click', e => {
    e.preventDefault();
    movementElements(currentAcc, !sorted);
    sorted = !sorted
})

// .flat &  flatMap

// .flat
// const allAccBalance = accounts.map(mov => mov.movements).flat().reduce((acc, val) => acc + val, 0)
// console.log(allAccBalance) // using map and flat is pretty common operation

// .flatMap (does the job of both .flat and .Map but flat here goes only 1 level deep)

// const overalBalance = accounts.flatMap(mov => mov.movements)
// console.log(overalBalance)

//practice Array.from

labelBalance.addEventListener('click', function () {
    // const movementsUi = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace("€", '')));
    // console.log(movementsUi);

    // back color based on reminder
    // [...document.querySelectorAll('.movements__row')].forEach((val, i) => {
    //     if (i % 2 === 0) val.style.backgroundColor = "orangered";
    //     if (i % 3 === 0) val.style.backgroundColor = "blue";
    // })
}
)

//fake always logged In