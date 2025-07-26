// Codewars: https://www.codewars.com/kata/57eaeb9578748ff92a000009
// Level: 8 kyu
// Task: Sum Mixed Array

function sumMix(x){
  return x.reduce((acc, value) => acc + Number(value), 0);
}