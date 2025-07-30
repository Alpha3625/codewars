// Codewars: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
// Level: 8 kyu
// Task: Merge two sorted arrays into one

// The first way___________________________________
function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2).sort((x, y) => x - y))];
}