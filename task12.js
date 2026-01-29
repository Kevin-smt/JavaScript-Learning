// Task - 12

// Write a JavaScript function that returns a passed string with letters in
// alphabetical order.

// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

let str = 'webmaster';
let arr = [];

for(let i = 0;i<str.length;i++){
    arr.push(str[i]);
    arr.sort();

}
let str2 = arr.join('');

// console.log(arr)
console.log(str2)