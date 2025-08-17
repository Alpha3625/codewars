// Codewars: https://www.codewars.com/kata/580755730b5a77650500010c
// Level: 7 kyu
// Task: Odd-Even String Sort

function sortMyString(S) {
    let evenSide = '';
    let oddSide = '';
  
    for (let i = 0; i < S.length; i++) {
      i % 2 === 0 ? evenSide += S[i] : oddSide += S[i];
    }
  
    return evenSide + ' ' + oddSide;
}