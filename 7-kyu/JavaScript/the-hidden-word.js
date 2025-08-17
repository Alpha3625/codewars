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
  const numStr = String(num);
  
  for (let i = 0; i < numStr.length; i++) {
    result += letters[numStr[i]];
  }
  
  return result;
}