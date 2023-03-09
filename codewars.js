

function solution(str, ending) {
  return (str.substring(str.length - ending.length) === ending)
}

// console.log(solution('abcdebc', 'bc'));


//capitalize each word. Your task is to convert strings to how they would be written by Jaden Smith. 

let str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  const str = this.split(' ')
  const sent = str.map(word => (word[0].toUpperCase() + word.slice(1)))
  return sent.join(' ')
};

// console.log(str.toJadenCase())




// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

function SeriesSum(n) {
  let sum = 0
  let denominator = 1
  for (let i = 0; i < n; i++) {
    console.log("denom before ", denominator)
    sum += 1/denominator
    denominator = denominator + 3
    console.log("denom after ", denominator)
  }
  sum = sum.toFixed(2)
  return sum.toString()
}

// console.log(SeriesSum(0));



// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) return
  return (h*60*60*1000 + m*60*1000 + s*1000)
}

// Alt:  return ((h*3600)+(m*60)+s)*1000;


// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return `liters = ${Math.floor(time*0.5)}`
}


//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg*fuelLeft > distanceToPump
};




// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 


function squareSum(numbers){
  let sum = 0
  numbers.forEach(number => {
    sum += number*number
  });
  return sum
}



// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''))
}

// console.log(descendingOrder(42145))



// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
  const categorized = data.map(pair => (
    (pair[0] >= 55 && pair[1] > 7) ? "Senior" : "Open"
  ))
  return categorized
}

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));



// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  // let arr = inputString.split(' ')
  // return parseInt(arr[0])
  return parseInt(inputString.split(' ')[0])
}

console.log(getAge("1 year old"))