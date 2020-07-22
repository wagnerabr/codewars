var Test = require('assert');

function createPhoneNumber(numbers){
    return numbers.map((item, indice) => {
        return (indice === 0)? '('+item :(indice === 2)? item+') ':(indice ===5)? item+'-': item; 
    }).join("");
}

Test.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
Test.equal(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
Test.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");