// Codewars: https://www.codewars.com/kata/5c857bab20089d4fe65a7f5b
// Level: 7 kyu
// Task: Remove Empty Items of Array

// The first way___________________________________
function clean(arr) {
  return arr.filter(_=>1);
}

// The second way___________________________________
function clean(arr) {
  return arr.filter(item => typeof item !== false);
}