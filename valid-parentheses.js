var Test = require('assert');

const validParentheses2 = (parens = null) => {
    return (parens !== null)? (parens.length > 1 && parens.length <= 100)? (parens.match(/\(/g).length === parens.match(/\)/g).length)? (parens.indexOf("(") < parens.indexOf(")"))? true : false : false : false : false;
}

function validParentheses3(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }

var validParentheses = function (s) {
    if(s === null) return false
    const obj = {
      "(": ")",
      "{": "}",
      "[": "]",
    }
  
    const stack = [];

    for (const paran of s) {
      if (obj.hasOwnProperty(paran)) {
          //console.log(paran)
        stack.push(paran)
      } else {
        const closeParan = stack.pop();
        console.log(closeParan);
        if (paran !== obj[closeParan]) {
          return false;
        }
      }
      //console.log(stack);
    }
  
    return stack.length === 0;
  };

Test.equal(validParentheses(null), false);
Test.equal(validParentheses( ")(" ), false);
Test.equal(validParentheses( "()" ), true);
Test.equal(validParentheses( "())" ), false);
Test.equal(validParentheses( ")(()))" ), false);
Test.equal(validParentheses( "(" ), false);
Test.equal(validParentheses( ")" ), false);
Test.equal(validParentheses( "(())" ), true);
Test.equal(validParentheses( "(())((()())())(())((()())())(())((()())())(())((()())())(())((()())())(())((()())())(())((()())())()" ), true);
