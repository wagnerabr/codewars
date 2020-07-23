var Test = require('assert');

// function songDecoder(song){
//     return song.split("WUB").filter(Boolean).join(" ");
// }

function songDecoder(song){
    return song.replace(/(WUB)+/g," ").trim()
}
  
Test.equal(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
Test.equal(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
Test.equal(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
console.timeEnd("test");
