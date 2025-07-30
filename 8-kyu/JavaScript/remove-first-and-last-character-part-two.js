// Codewars: https://www.codewars.com/kata/570597e258b58f6edc00230d
// Level: 8 kyu
// Task: Remove First and Last Character Part Two

// The first way___________________________________
function array(string) {
  return string.split(',').slice(1, -1).join(' ') || null;
}

// The second way___________________________________
function array(string) {
  if (!string.length) return null;
  
  let chars = "";
  let matchedChars = [];
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ',') {
      chars += string[i];
    }
    
    if (string[i] === ',' || i === string.length - 1) {
      matchedChars.push(chars);
      chars = "";
    }
  }
  
  if (matchedChars.length < 3) return null;
  
  let subStr = "";
  
  for (let i = 1; i < matchedChars.length - 1; i++) {
    subStr += matchedChars[i];
    
    if (i !== matchedChars.length - 2) {
      subStr += " ";
    }
  }
  
  return subStr;
}