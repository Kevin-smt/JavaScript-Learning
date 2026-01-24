// Task - 3


// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. 

// Sample array : 
// array1 = [1,0,2,3,4]
// array2 = [3,5,6,7,8,13]

// Expected Output : [4, 5, 8, 10, 12, 13]

let array1 = [1, 0, 2, 3, 4, 5, 6, 7];
let array2 = [3, 5, 6, 7, 8, 13];

// for (let i = 0; i < array1.length; i++) {
//         array2[i] = array2[i] + array1[i];
//         console.log(array2)
//     }



if (array2.length > array1.length) {

    for (let i = 0; i < array1.length; i++) {
        array2[i] = array2[i] + array1[i];
    }
    console.log(array2)
}

else {
    for (let i = 0; i < array2.length; i++) {
        array1[i] = array1[i] + array2[i];
    }
    console.log(array1)
}



