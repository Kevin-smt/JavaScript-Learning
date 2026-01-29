// Task - 10

// Write a JavaScript program to get the integers in the range(x, y). 

// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]


function range(fn, sn) {

    let arr = [];
    for (let i = fn; i < sn - 1; i++) {
        arr.push(i + 1);
    }
    return arr;

}
console.log(range(3,15))

