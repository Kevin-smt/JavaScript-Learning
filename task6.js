// Task  - 6

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'


function longestWord(str) {
    let totalW = str.split(' ');
    let maxi = 0;

    for (let j = 0; j < totalW.length; j++) {
    if (totalW[j].length > totalW[maxi].length) {
        // console.log(totalW[j])
         maxi = j;
    }
   
}
    // console.log(totalW[maxi]);
    return totalW[maxi];
}

console.log(longestWord('Web Development Tutorial Developments Developments'));


// -----------------------
// let name = 'Web  Tutorial Developments Development'
// let maxword = '';

// function longestWord(str) {
//     return str.split(' ');
// }
// let totalW = longestWord(name);
// let maxi = 0;

// for (let j = 0; j < totalW.length; j++) {
//     if (totalW[j].length > totalW[maxi].length) {
//         // console.log(totalW[j])
//          maxi = j;
//     }
   
// }
// console.log(totalW[maxi]);