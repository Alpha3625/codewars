// Codewars: https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
// Level: 8 kyu
// Task: Array plus array

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, val) => acc + val, 0);
}