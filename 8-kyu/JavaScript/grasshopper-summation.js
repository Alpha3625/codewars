// Codewars: https://www.codewars.com/kata/55d24f55d7dd296eb9000030
// Level: 8 kyu
// Task: Grasshopper - Summation

var summation = function (num) {
  if (num <= 0) return 1
  
  let sum = 0;
  
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  
  return sum;
}