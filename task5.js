// Task - 5 

// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

let numberstr = '10987654321';
let num2 = '';


for(let i=numberstr.length;i>=0;i--)
{
    num2 =  num2.concat(numberstr.charAt(i));
}
console.log(num2)