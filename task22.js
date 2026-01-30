// Create a function that returns the number of characters shared between two words.

// Example:

// sharedLetters("apple", "meaty") ➞ 2   // Since "ea" is shared between "apple" and "meaty".
// sharedLetters("fan", "forsook") ➞ 1
// sharedLetters("spout", "shout") ➞ 4

let word1 = 'apple';
let word2 = 'mleaty';

let count = 0;

if (word1.length >= word2.length) {

    for (let i = 0; i < word1.length; i++) {
        for (let j = 0; j < word2.length; j++) {

            if (word1[i] == word2[j]) {
                console.log(word1[i])
                count++;
            }
        }
    }
}
else {
    for (let i = 0; i < word2.length; i++) {
        for (let j = 0; j < word1.length; j++) {

            if (word1[i] == word2[j]) {
                console.log(word1[i])

                count++;
            }
        }
    }
}

console.log(count)