const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupedMovements = Object.groupBy(movements,
    movement => movement > 0 ? 'deposite' : 'withdrawal');
console.log(groupedMovements)

// const groupedActivity = Object.groupBy(accounts,
//     account => {
//         const movementCount = account.movements.length;
//         if (movementCount >= 5) return 'Very Active';
//         if (movementCount >= 3) return 'Active';
//         if (movementCount >= 2) return 'not Very Active';
//         return 'inactive'
//     }
// );
// console.log(groupedActivity)

// const groupByType = Object.groupBy(accounts, account => account.type);
// console.log(groupByType)
// const groupByType = Object.groupBy(accounts, ({type}) =>type);
// console.log(groupByType)