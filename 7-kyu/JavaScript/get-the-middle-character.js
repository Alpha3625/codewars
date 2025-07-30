// Codewars: https://www.codewars.com/kata/56747fd5cb988479af000028
// Level: 7 kyu
// Task: Get the Middle Character

function getMiddle(s) {
  let index = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? `${s[index-1]}${s[index]}` : s[index];
}