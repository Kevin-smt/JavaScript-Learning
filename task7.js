// ask - 7

// Write a JavaScript function that will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

let arr2 = [1,2,3,4,5];

// function secLargestandLowest(arr) {
//     console.log(arr.sort())
//     console.log(arr[1] + "," + arr[arr.length - 2])
// }
// secLargestandLowest(arr2)

function secLargestandLowest(arr){

    let sortedarr = arr2.sort().filter(function (number,index) {
        return arr2.indexOf(number) == index;
    })
    console.log(sortedarr[1] + "," + sortedarr[sortedarr.length - 2])
}
secLargestandLowest(arr2)
