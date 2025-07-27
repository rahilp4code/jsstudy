"use strict";

// FINVERSE APP

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-07-26T17:01:17.194Z",
        "2020-07-28T23:36:17.929Z",
        "2020-08-01T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
};

const account3 = {
    owner: "Rahil P",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Firoz P",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const acc1 = accounts.find((acc) => acc.owner === "Jonas Schmedtmann").pin;
console.log(acc1);

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const movementElements = function (movements, sort = false) {
    containerMovements.innerHTML = "";
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
    movs.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal";
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1
            } ${type}</div>
          <div class="movements__value">${mov.toFixed(2)}€</div>
        </div> 
        `;
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

const user = "Rahil Pathan";

const createUsername = function (accs) {
    accs.forEach(function (acc) {
        acc.userName = acc.owner
            .toLowerCase()
            .split(" ")
            .map((user) => user[0])
            .join("");
    });
};
createUsername(accounts);
console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

const calTotalAmount = function (acc) {
    acc.balance = +acc.movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
    console.log(acc);
};

const calTotalSummary = function (acc) {
    let summaryIn = acc.movements
        .filter((val) => val > 0)
        .reduce((acc, mov) => acc + mov);
    labelSumIn.textContent = `${summaryIn.toFixed(2)}€`;

    let summaryOut = acc.movements
        .filter((val) => val < 0)
        .reduce((acc, mov) => acc + mov);
    labelSumOut.textContent = `${Math.abs(summaryOut.toFixed(2))}€`;

    let summaryInt = acc.movements
        .filter((val) => val > 0)
        .map((val) => (val * `${acc.interestRate}`) / 100)
        .filter((int) => int >= 1)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumInterest.textContent = `${summaryInt.toFixed(2)}€`;
};

function updateUi(acc) {
    movementElements(acc.movements);
    calTotalAmount(acc);
    calTotalSummary(acc);
}
let currentAcc;
btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    currentAcc = accounts.find(
        (acc) => acc.userName === inputLoginUsername.value
    );
    if (currentAcc?.pin === +inputLoginPin.value) {
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();
        containerApp.style.opacity = "100";
        labelWelcome.innerHTML = `Welcome back, ${currentAcc.owner.split(" ")[0]}`;
        updateUi(currentAcc);
    }
});

btnTransfer.addEventListener("click", (e) => {
    e.preventDefault();
    const amount = Math.floor(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        (acc) => acc.userName === inputTransferTo.value
    );
    inputTransferTo.value = inputTransferAmount.value = "";
    inputTransferAmount.blur();
    if (
        amount > 0 &&
        receiverAcc &&
        amount <= currentAcc.balance &&
        receiverAcc.userName !== currentAcc.userName
    ) {
        currentAcc.movements.push(-amount);
        receiverAcc.movements.push(amount);
        updateUi(currentAcc);
        console.log("valid");
    }
});

btnLoan.addEventListener("click", (e) => {
    e.preventDefault();
    const amount = Math.floor(inputLoanAmount.value);
    if (amount > 0 && currentAcc.movements.some((mov) => mov >= amount / 10)) {
        inputLoanAmount.value = "";
        inputLoanAmount.blur();
        currentAcc.movements.push(amount);
        updateUi(currentAcc);
    }
    inputLoanAmount.value = "";
});

btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        currentAcc.userName === inputCloseUsername.value &&
        currentAcc.pin === +inputClosePin.value
    ) {
        inputCloseUsername.value = inputClosePin.value = "";
        inputClosePin.blur();
        const index = accounts.findIndex((acc) => acc === currentAcc);
        console.log(index);
        accounts.splice(index, 1);
        containerApp.style.opacity = "0";
    }
});

let sorted = false;
btnSort.addEventListener("click", (e) => {
    e.preventDefault();
    movementElements(currentAcc.movements, !sorted);
    sorted = !sorted;
});

labelBalance.addEventListener("click", function () {
    const movementsUi = Array.from(
        document.querySelectorAll(".movements__value"),
        (el) => +el.textContent.replace("€", "")
    );
    console.log(movementsUi);
});
