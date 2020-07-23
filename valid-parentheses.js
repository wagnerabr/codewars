var Test = require('assert');

const validParentheses = (parens) => {
    console.log(parens.length);
    return (parens !== null)? (parens.length > 1 && parens.length <= 100)? (parens.match(/\(/g).length === parens.match(/\)/g).length)? true : false : false : false;
}

// Test.equal(validParentheses(null), false);
// Test.equal(validParentheses( "()" ), true);
// Test.equal(validParentheses( "())" ), false);
// Test.equal(validParentheses( ")(()))" ), false);
// Test.equal(validParentheses( "(" ), false);
// Test.equal(validParentheses( "(())((()())())" ), true);

Test.equal(validParentheses( "(())((()())())(())((()())())(())((()())())(())((()())())(())((()())())(())((()())())(())((()())())()" ), true);
