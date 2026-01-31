// Task - 6

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between every two even numbers. For example,

// if you accept 025468 the output should be 0-254-6-8.

let Strnum = "025468568";
let result = ''

for (let j = 0; j < Strnum.length; j++) {

    result += Strnum[j];

    if ((Strnum[j] % 2) == 0 && Strnum[j + 1] % 2 == 0) {
        result += '-'
    }
}

console.log(result)