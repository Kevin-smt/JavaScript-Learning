// Task - 1

// Write a JavaScript program to sort the items of an array. 

// Sample array : [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
// Sample Output : -4,-3,1,2,3,5,6,7,8

let arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// this shows inccorect output because sort() for strings
// console.log(arr.sort());



// arr.sort(function(a, b) {
//   return a - b;
// });

// console.log("sorted array:");
// console.log(arr.join(", "));




// Task - 2

// Write a JavaScript program to find the most frequent item of an array.

// Sample array : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// Sample Output : a ( 5 times )

let arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let max =0;
let alpha;

for (let i=0;i<arr2.length;i++){

    let count=0;
    for(let j=0;j<arr2.length;j++){
        if(arr2[i]==arr2[j]){
            count++;
        }
        // console.log(alpha + " comes " + max + " times");
    }

    if(count>max){
        max = count;
        alpha = arr2[i];
    }
}
console.log(alpha + " comes " + max + " times");


// let arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// for (let i=0;i<arr2.length;i++){

//     let count=0;
//     for(let j=0;j<arr2.length;j++){

//         if(arr2[i]==arr2[j]){
//             count++;
//         }
//     }
    
//     console.log(arr2[i] + " comes " + count + " times");
//     // if(count>max){
//     //     max = count;
//     //     alpha = arr2[i];
//     // }
// }
// console.log(alpha + " comes " + max + " times");