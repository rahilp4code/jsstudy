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
    owner: 'Rahil P',
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
const acc1 = accounts.find(acc => acc.owner === 'Jonas Schmedtmann').pin;
console.log(acc1)

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
const movementElements = function (movements, sort = false) {
    containerMovements.innerHTML = ''; //to empty the container before adding
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements
    movs.forEach(function (mov, i) {
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
console.log(accounts)

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account)

//challeneg
// for (const acc of accounts) {
//     if (acc.owner === 'Jessica Davis') {
//         console.log(acc);
//     };
// }

//160
const calTotalAmount = function (acc) {
    acc.balance = Number(acc.movements.reduce((acc, cur) => acc + cur, 0));
    labelBalance.textContent = `${acc.balance}€`;
    console.log(acc)
}
// calTotalAmount(account1.movements)

//162
const calTotalSummary = function (acc) {
    let summaryIn = acc.movements.filter((val) => val > 0).reduce((acc, mov) => acc + mov);
    labelSumIn.textContent = `${summaryIn}€`;

    let summaryOut = acc.movements.filter((val) => val < 0).reduce((acc, mov) => acc + mov);
    labelSumOut.textContent = `${Math.abs(summaryOut)}€`;

    let summaryInt = acc.movements.filter((val) => val > 0).map(val => val * `${acc.interestRate}` / 100).filter(int => int >= 1).reduce((acc, cur) => acc + cur, 0);
    labelSumInterest.textContent = `${summaryInt}€`;
}
// calTotalSummary(account1.movements)

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


function updateUi(acc) {
    //Display Movements
    movementElements(acc.movements);

    //Display balance
    calTotalAmount(acc);

    //Display Summary
    calTotalSummary(acc);
}

//165

//event handler
let currentAcc;

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
        labelWelcome.innerHTML = `Welcome back, ${currentAcc.owner.split(' ')[0]}`;
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
        updateUi(currentAcc);
        console.log('valid');

    };
})

btnLoan.addEventListener('click', e => {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 && currentAcc.movements.some(mov => mov >= (amount / 10))) {
        inputLoanAmount.value = '';
        inputLoanAmount.blur();
        currentAcc.movements.push(amount);
        updateUi(currentAcc)
    }
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
    movementElements(currentAcc.movements, !sorted);
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
    const movementsUi = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace("€", '')));
    console.log(movementsUi);
}
) 