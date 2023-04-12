

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

// console.log(stray([2, 1, 2]))



// Friend or Foe?

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends){
  return friends.filter(friend => (friend.length ===4))
}

// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));



// Regex PIN code validation

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
  return (/^\d{4}$|^\d{6}$/.test(pin))
}

// console.log(validatePIN("1234"));
// console.log(validatePIN("12345"));
// console.log(validatePIN("a234"));
// console.log(validatePIN("123456"));
// console.log(validatePIN("1234e6"));



// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  return Math.floor(s * 1000 / 36)
}

// console.log(cockroachSpeed('1.08'))

// speed * 100,000cm/km * 1hr/3600 seconds



// Unique in Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
  console.log(typeof iterable);
  if (typeof iterable === 'object' && iterable.length === 0) return iterable
  if (typeof iterable === 'string') iterable = iterable.split('')
  console.log(iterable);
  let newArr = []
  newArr.push(iterable[0])
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      newArr.push(iterable[i])
    } 
  }
  return newArr
}

// console.log(uniqueInOrder([1,2,2,3,3]))


// Cubes

// DESCRIPTION:
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
  if (m < 1) return -1
  if (Math.floor(m) !== m) return -1
  let sum = 0
  for (let i = 1; i <= m; i++){
    sum += i*i*i
    if (sum === m) return i
    if (sum > m) return -1
  }
}

// console.log(findNb(0))
// console.log(findNb(1.8))
// console.log(findNb(1071225));
// console.log(findNb(-2))
// console.log(findNb(1071228));



// Population Growth

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

function nbYear(p0, percent, aug, p) {
  let years = 0
  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * (percent/100) + aug)
    years++
  }
  return years
}

// console.log(nbYear(1500000, 2.5, 10000, 2000000));



// Camel case

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function camelCase (string) {
  for (let i = 0; i < string.length; i++){
    console.log(string[i]);
    if (string[i] === string[i].toUpperCase()) {
      let start = string.slice(0, i)
      let end = string.slice(i, string.length)
      console.log('Start ', start, ' End ', end);
      string = start + ' ' + end
      console.log('string ', string);
      i++
      string.length++
    }
  }
  return string
}

// console.log(camelCase("lifeAbleAbleHave"))


// Bouncing Ball

// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.


// check conditions
// initiate a counting variable
// set up a while loop to calculate passes

function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h || window <= 0) return -1
  let passes = 1 
  while (h > window) {
    h = h * bounce
    if (h > window ) {
      passes += 2
    }
  }
  return passes
}

// console.log(bouncingBall(100, .5, 10))


// Counting Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// make lower case
// loop? for each? filter?
// while text.length > 0, forEach,


function duplicateCount(text){
  text = text.toLowerCase().split('')
  // console.log('start ', text);
  let count = 0
  text.forEach((char, idx) => {
    // console.log('char ', char);
    let start = text.length
    // console.log('start ', start);
    text = text.filter((c) => (
      c !== char
    ))
    let end = text.length
    // console.log('end ', end);
    if ( (start - end) > 1 ) count++
    // console.log('fitlered ', text);
  })
  return count
}

// console.log(duplicateCount(""));



// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  // numbers = numbers.split(' ').map(letter => (parseInt(letter))).sort(function(a, b){return a - b});
  // min = numbers[0]
  // max = numbers[numbers.length - 1]
  // return max + ' ' + min



  // Alternative
  numbers = numbers.split(' ')
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

// console.log(highAndLow("1 9 3 4 -5"));



// House Robber 

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */

// don't necessarily want every other house
// compare answers: 
//  -- even homes
//  -- odd homes
//  -- max then work down homes
//  -- ...?

// can't rob adjacent houses
// sort max to min? start with max, work down the list?
// take max
// next number: check if adjacent

var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0]

  // let evenSum = 0
  // for (let i = 1; i < nums.length; i = i + 2) {
  //   evenSum += nums[i]
  //   // console.log(evenSum);
  // }

  // let oddSum = 0
  // for (let i = 0; i < nums.length; i = i + 2) {
  //   oddSum += nums[i]
  //   // console.log(oddSum);
  // }

  // console.log(nums.sort(function(a, b){return b - a}))

  let count = [nums[0], Math.max(nums[0], nums[1])]

  for (let i = 2; i < nums.length; i++) {
    count[i] = Math.max(count[i-2] + nums[i], count[i-1])
    console.log(count[i])
  }
  return count[nums.length - 1]
};

// console.log(rob([1, 9, 2, 7, 1, 1, 8, 1]));
// console.log(rob([1, 7, 9, 8, 1]));
// console.log(rob([4, 7, 9, 8, 4]));



// Two sum

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {
  for (let x = 0; x < numbers.length; x++) {
    for (let y = 0; y < numbers.length; y++) {
      if ( x !== y ) {
        if (numbers[x] + numbers[y] === target) return [x, y]
      }
    }
  }
}

// console.log(twoSum([1, 2, 3], 4));


// Squared same arrays

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.

function comp(array1, array2){
  if ( !array1 || !array2 ) return false
  array1 = array1.map(num => (num*num))
  array1 = array1.sort((a, b) => {return a - b})
  array2 = array2.sort((a, b) => {return a - b})
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] ) {
      return false
    }
  }
  return true
}

// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]));
// console.log(comp(null, null));


// Grasshopper
// https://www.codewars.com/kata/5772da22b89313a4d50012f7/javascript

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
  return name === owner ?  "Hello boss" : "Hello guest"
}


// Make upper case

// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase()
}


// Hula hoop!

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}


// Abbreviate names 

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
  name = name.split(' ')
  return name[0][0].toUpperCase() + '.' + name[1][0].toUpperCase()
}

// console.log(abbrevName('Sam Harris'))

// Expanded form number

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // if (num <= 9) return num
  let arr = num.toString().split('')
  arr = arr.map((num, idx) => (num * Math.pow(10, (arr.length - idx -1 ))))
  arr = arr.filter(num => num > 0)
  return arr.join(' + ')
}

// console.log(expandedForm(70304))


// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

function strCount(str, letter){  
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter ) {
      count++
    }
  }
  return count
}

// console.log(strCount("", "l"));

// Cat/Dog years

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
  let cat = 0
  let dog = 0
  if (humanYears === 1) {
    cat = 15
    dog = 15
  } else if (humanYears === 2) {
    cat = 24
    dog = 24
  } else {
    cat = 24 + 4 * (humanYears - 2)
    dog = 24 + 5 * (humanYears - 2)
  }
  return [humanYears,cat,dog];
}

// console.log(humanYearsCatYearsDogYears(3));

// 10 minute cartesian walk

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  if (walk.length !== 10) return false
  let northSouth = 0
  let eastWest = 0
  walk.forEach(letter => {
    if (letter === 'n') northSouth++
    if (letter === 's') northSouth--
    if (letter === 'e') eastWest++
    if (letter === 'w') eastWest--
  })
  if (northSouth === 0 && eastWest === 0) {
    return true
  } else {
    return false
  }
}

// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))

// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
  return string.split(' ').map((word) => {
    if (word.length > 4) {
      return word = word.split('').reverse().join('')
    } else {
      return word
    }
  }).join(' ')
}

// console.log(spinWords( "Hey fellow warriors" ));

// LeetCode

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++){
    nums[i] = nums[i - 1] + nums[i]
}
  return nums
};

// console.log(runningSum([3,1,2,10,1]));

// LC Pivot index

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

var pivotIndex = function(nums) {
  let totalSum = 0
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i]
  }
  let leftSum = 0
  for (let i = 0; i < nums.length; i++){
    if (leftSum * 2 === totalSum - nums[i]) {
      return i
    }
    leftSum += nums[i]
  }
  return -1
};

// console.log(pivotIndex([-1,-1,0,1,1,0]));

// Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s){
  //Code goes here!
}