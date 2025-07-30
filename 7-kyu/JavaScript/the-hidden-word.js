// Codewars: https://www.codewars.com/kata/5906a218dfeb0dbb52000005
// Level: 7 kyu
// Task: The Hidden Word

function hiddenWord(num) {
  const letters = {
    6: "a",
    1: "b",
    7: "d",
    4: "e",
    3: "i",
    2: "l",
    9: "m",
    8: "n",
    0: "o",
    5: "t",
  }
  
  let result = "";
  
  while (num > 0) {
    result += letters[num % 10];
    num = Math.floor(num / 10);
  }
  
  let reverseResult = "";
  
  for (let i = result.length - 1; i >= 0; i--) {
    reverseResult += result[i];
  }
  
  return reverseResult;
}