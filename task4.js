// Task - 4 

// Write a JavaScript function to merge two arrays and removes all duplicated elements.

// Sample array : 
// array1 = [1, 2, 3]
// array2 = [2, 30, 1]

// Expected Output : [3, 2, 30, 1]

let array3 = [1, 2, 3,30,33]
let array4 = [2, 30, 1]

function MergeRemove(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        array2.push(array1[i]);
    }

    console.log(array2.filter(function (number, index) {
        return array2.indexOf(number) == index;
    }))

}

MergeRemove(array3,array4)



