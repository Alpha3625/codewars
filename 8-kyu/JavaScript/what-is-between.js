// Codewars: https://www.codewars.com/kata/55ecd718f46fba02e5000029
// Level: 8 kyu
// Task: What is between?

function between(a, b) {
  const array = [];
  
  while(a <= b) {
    array.push(a);
    a++;
  }
  
  return array;
}