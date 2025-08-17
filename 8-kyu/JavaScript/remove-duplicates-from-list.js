// Codewars: https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
// Level: 8 kyu
// Task: Remove duplicates from list

// The first way___________________________________
function distinct(a) {
  return [...new Set(a)];
}

// The second way___________________________________
function distinct(a) {
  const result = [];
  
  for (let i = 0; i < a.length; i++) {
    if (!result.includes(a[i])) {
      result.push(a[i]);
    }
  }
  
  return  result;
}

// The third way___________________________________
function distinct(a) {
  const result = [];
  let resultLength = 0;
  
  for (let i = 0; i < a.length; i++) {
    let exists = false;
    
    for (let j = 0; j < resultLength; j++) {
      if (a[i] === result[j]) {
        exists = true;
        break;
      }
    }
    
    if(!exists) {
      result[resultLength] = a[i];
      resultLength++;
    }
  }
  
  return result;
}