var Test = require('assert');

function spinWords(word){
    return word.split(" ").map((item) => {
        return (item.length >= 5)? item.split("").reverse().join("") : item ;
    }).join(" ");
}

// console.log(spinWords("Hey fellow warriors"));
Test.equal(spinWords("Welcome"), "emocleW");
Test.equal(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
Test.equal(spinWords("This is a test"), "This is a test");
Test.equal(spinWords("This is another test"), "This is rehtona test");
Test.equal(spinWords("You are almost to the last test"), "You are tsomla to the last test");
Test.equal(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
Test.equal(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");