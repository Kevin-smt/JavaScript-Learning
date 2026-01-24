// Task - 3

// Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

let animal = "dog";

// console.log(animal.substring(0, 1)); i=0 j=1
// console.log(animal.substring(0, 2)); i=0 2
// console.log(animal.substring(0, 3)); i=0 3

// console.log(animal.substring(1, 2)); i=1 2
// console.log(animal.substring(1, 3)); i=1 3

// console.log(animal.substring(2, 3)); i=2 3

let arr = [];
for (let i = 0; i < animal.length; i++) {

    for (let j = i+1; j <= animal.length; j++) {
        // console.log("count")
        arr.push(animal.substring(i, j));
        // console.log(animal.substring(i, j));
    }
}
console.log(arr)