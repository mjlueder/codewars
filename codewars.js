

function solution(str, ending) {
  return (str.substring(str.length - ending.length) === ending)
}

console.log(solution('abcdebc', 'bc'));


//capitalize each word. Your task is to convert strings to how they would be written by Jaden Smith. 

let str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  const str = this.split(' ')
  const sent = str.map(word => (word[0].toUpperCase() + word.slice(1)))
  return sent.join(' ')
};

console.log(str.toJadenCase())


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

console.log(SeriesSum(0));