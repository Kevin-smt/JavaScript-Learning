// Task - 5

// Write a JavaScript function to remove a specific element from an array.

// Sample array : [2, 5, 9, 6]
// remove : 5

// Expected Output : [2, 9, 6]

let ar1 = [2,5,9,6];
let ar2 = [4,5,9,7];

// let re = ar1.indexof(5);

function removeDup(ar1,Numr){

    return ar1.splice(ar1.indexOf(Numr),1);
}
removeDup(ar2,4);
console.log(ar2);