var Test = require('assert');

// function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }

const highAndLow = (numbers) => {
    let array = numbers.split(" ").sort((a, b) => (a - b));
    return `${array[array.length -1]} ${array[0]}`
}

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

Test.equal(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
Test.equal(highAndLow("1 2 3 4 5"), "5 1");
Test.equal(highAndLow("1 2 -3 4 5"), "5 -3");
Test.equal(highAndLow("1 9 3 4 -5"), "9 -5");