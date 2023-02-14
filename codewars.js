

function solution(str, ending) {
  return (str.substring(str.length - ending.length) === ending)
}

console.log(solution('abcdebc', 'bc'));