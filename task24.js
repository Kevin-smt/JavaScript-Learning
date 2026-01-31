// Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

// ```
// Example:

// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) ➞ "Chapter 2"

// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200) ➞ "The End?"

// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3) ➞ "Chapter 


let book = {
     "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}
console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 450))

function nearestChapter(book, find) {
    let temparr = [];

    let entries = Object.entries(book)

    for (let i = 0; i < entries.length; i++) {
        temparr.push(Math.abs(find - entries[i][1]))
    }

    let mini = temparr.indexOf(Math.min(...temparr))

    return entries[mini][0]

}



// console.log(Object.keys(book))
// console.log(Math.abs(find - entries[0][1]))
// console.log(temparr);
// console.log(mini)
