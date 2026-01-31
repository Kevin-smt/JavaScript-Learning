// Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.
// input:--sumDigProd(16, 28)
// expected output:--6



// function addAndmul(...nums) {

//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }

//   while(sum>=10){

//     let mul = 1;
//     let number = String(sum);

//     for (let j=0;j<number.length;j++){
//       mul *= Number(number[j])
//     }

//     sum = mul
//   }
//   return sum;
// }

// console.log(addAndmul(1,2,3,4,5))


// You are given a dictionary of names and the amount of points they have. Return a dictionary with the same names, but instead of points, return what prize they get.
// "Gold", "Silver", or "Bronze" to the 1st, 2nd and 3rd place respectively. For all the other names, return "Participation" for the prize.
// sample:--awardPrizes({
//   "Joshua" : 45,
//   "Alex" : 39,
//   "Eric" : 43
// }) ➞ {
//   "Joshua" : "Gold",
//   "Alex" : "Bronze",
//   "Eric" : "Silver"
// }

let awardPrizes = {
  "Joshua": 45,
  "Alex": 85,
  "Eric": 43,
  "kevin": 99,
  "sam": 70
}

let entries = Object.entries(awardPrizes);

console.log(entries.sort((a, b) => b[1] - a[1]));

let result = {}

for (let i = 0; i < entries.length; i++) {

  let name = entries[i][0];
  let score = entries[i][1];

  if (i == 0) {
    result[name] = 'Gold - ' + score
  }
  else if (i == 1) {
    result[name] = 'Bronze - ' + score
  }
  else if (i == 2) {
    result[name] = 'Silver - ' + score
  }
  else {
    result[name] = 'Participation - ' + score
  }

}

console.log(result)