
GOOD LUCK 😀
*/

const dogAges = [5, 2, 4, 1, 15, 8, 3];
const dogAges1 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dog) {
    const humanDogAge = dog.map((age) => (age <= 2) ? 2 * age : 16 + age * 4);
    const filter = humanDogAge.filter((val) => val >= 18);
    // const reduce = filter.reduce((acc, cur) => acc + cur /* / filter.length */, 0)
    const reduce = filter.reduce((acc, cur) => acc/filter.length + cur/filter.length, 0)
