// Create a function that moves all capital letters to the front of a word.

// Example: 

// capToFront("hApPy") ➞ "APhpy"
// capToFront("moveMENT") ➞ "MENTmove"
// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

console.log(capToFront("shOrtCAKE"))

function capToFront(word){

    let caps = word.match(/[A-Z]/g).join('')
    let small = ''
    let newWord = ''

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[i].toUpperCase()) {
            small += word[i];
        }
    }
    newWord = caps.concat(small)

    return newWord;
}


