// Task - 8

// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 

// Sample arguments : ('w3resource.com', 'o')
// Expected output : 2


function findOcc(str, find) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == find) {
            count++;
        }
    }
    return count
}

console.log(findOcc('w3resooource.cooom', 'o'))