// Task - 6

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between every two even numbers. For example,

// if you accept 025468 the output should be 0-254-6-8.

let Strnum = "025468";

// console.log(Strnum.charAt(1))
// console.log(Strnum.charAt(1))


for(let i=0;i<Strnum.length;i++){

    if( ((Strnum.indexOf(i) % 2 ) == 0 ) && ( ( Strnum.indexOf(i+1) % 2 ) == 0)){
        console.log(`-`);
        console.log(Strnum.indexOf(i));
        console.log(Strnum.indexOf(i+1))
    }else{
        console.log("hello")

    }
}
