

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
  return parseInt(inputString)
}

// console.log(getAge("1 year old"))



// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3)/3
  if (avg >= 90 ) {
    return 'A'
  } else if (avg >= 80 ) {
    return 'B'
  } else if (avg >= 70 ) {
    return 'C'
  } else if (avg >= 60 ) {
    return 'D'
  } else {
    return 'F'
  }
}

// console.log(getGrade(95,90,93));
// console.log(getGrade(84,79,85));
// console.log(getGrade(60,82,76));



// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  return num.toString()
}


// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  return n.toString().split('').reverse().map(Number)
}

// console.log(digitize(1234));



// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
  if (a === b) return a
  if ( a > b ) {
    let sum = 0
    for(let i = b; i <= a; i++){
      sum += i
    }
    return sum
  }
  if ( a < b ) {
    let sum = 0
    for(let i = a; i <= b; i++){
      sum += i
    }
    return sum
  }
}

// console.log(getSum(0, -1))


// Perfect Square

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  let x = Math.sqrt(sq)
  return Number.isInteger(x) ? ((x + 1) * (x + 1)) : -1
}

// console.log(findNextSquare(114))



// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(string) {
  let arr = string.split('')
  let finalArr = []
  let word = []
  arr.forEach(letter => {
    if (letter === ' ' && word.length) {
      finalArr.push(word)
      finalArr.push(letter)
      word = []
    } else if (letter === ' ' && word.length === 0) {
      finalArr.push(letter)
    } else {
      word.unshift(letter)
    }
  })
  finalArr.push(word)
  finalArr = finalArr.map(val => {
    if (val === ' ') {
      return val
    } else {
      return val.join('')
    }
  })
  finalArr = finalArr.join('')
  return finalArr
}

function alsoReverseWords (str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

// console.log(reverseWords("The quick brown fox jumps over the lazy dog."))
// console.log(alsoReverseWords("The quick brown fox jumps over the lazy dog."))



// Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
  return (a+b).toString(2)
}

// console.log(addBinary(50, 50));



// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// function removeExclamationMarks(s) {
//   return s.split('').filter(c => (c !== '!')).join('')
// }

function removeExclamationMarks(s) {
  return s.replace(/!/g, '')
}

// console.log(removeExclamationMarks('!test!'));


// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  if (numbers[0] === numbers[1]) {
    return numbers.filter(c => (c !== numbers[0]))[0]
  } else if (numbers[0] === numbers[2]) {
    return numbers[1]
  } else {
    return numbers[0]
  }
}

const strayAlt = nums => nums.reduce((a, b) => a ^ b);

console.log(stray([2, 1, 2]))