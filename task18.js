Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.
input:--sumDigProd(16, 28)
expected output:--6


You are given a dictionary of names and the amount of points they have. Return a dictionary with the same names, but instead of points, return what prize they get.
"Gold", "Silver", or "Bronze" to the 1st, 2nd and 3rd place respectively. For all the other names, return "Participation" for the prize.
sample:--awardPrizes({
  "Joshua" : 45,
  "Alex" : 39,
  "Eric" : 43
}) ➞ {
  "Joshua" : "Gold",
  "Alex" : "Bronze",
  "Eric" : "Silver"
}