// Codewars: https://www.codewars.com/kata/5810085c533d69f4980001cf
// Level: 8 kyu
// Task: Simple calculator

function calculator(a, b, sign) {
  const operation = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  let isNumber = typeof a === "number" && typeof b === "number";
  
  return isNumber && operation[sign] ? operation[sign](a, b) : "unknown value";
}