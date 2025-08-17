// Codewars: https://www.codewars.com/kata/57eb936de1051801d500008a
// Level: 7 kyu
// Task: Array Array Array

function explode(x) {
  let count = 0;
  let strFlag = true;
  
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      count += x[i];
      strFlag = false;
    }
  }
  
  if (strFlag) return "Void!";
  if (count === 0) return [];
  
  const newArr = [];
  
  for (let i = 0; i < count; i++) {
    newArr.push(x);
  }
  
  return newArr;
}