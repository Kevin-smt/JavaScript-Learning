// Task - 4 

// Write a JavaScript function to merge two arrays and removes all duplicated elements.

// Sample array : 
// array1 = [1, 2, 3]
// array2 = [2, 30, 1]

// Expected Output : [3, 2, 30, 1]

let array1 = [1, 2, 3]
let array2 = [2, 30, 1]

for (let i=0;i<array1.length;i++){
    array2.push(array1[i]);
}
console.log(array2);

