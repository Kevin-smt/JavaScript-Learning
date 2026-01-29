// Task - 13

// Write a JavaScript function that accepts a string as a parameter and counts the a number of vowels within the string.


// Sample Data and output:
// Example string: 'The quick brown fox'
// Expected Output: 5

// let str = 'The quick brown foxsaaabcdefg';
// console.log(count)

function findVowels(str) {
    let vowels = 'aeiou'
    let count = 0;
    for (let i = 0; i < vowels.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (vowels[i] == str[j]) {
                count++;
            }
        }
    }

    return count
}

console.log(findVowels('The quick brown fox'))