// Codewars: https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
// Level: 8 kyu
// Task: Check same case


function sameCase(a, b){
  if (!/^[a-zA-Z]{2}$/g.test(a + b)) {
    return -1;
  }
  
  let caseOfLetters = a === a.toUpperCase() && b === b.toUpperCase() ||
                 a === a.toLowerCase() && b === b.toLowerCase() ? 1 : 0;
  
  return caseOfLetters;
}