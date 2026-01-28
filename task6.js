// Task  - 6

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

let name = 'Web Development Tutorial'


let max = 0;
let total = 0;

for (let i = 0;i<name.length;i++){

    total = total + 1;
    if(name[i] == ''){
        max = total;
        total = 0;
    }
}
console.log(name[0])
console.log(max);
