// Codewars: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
// Level: 8 kyu
// Task: Remove First and Last Character

// The first way___________________________________
function removeChar(str){
  return str.substring(1, str.length-1);
}

// The second way__________________________________
function removeChar(str){
    let strlen = str.length;

    if (strlen === 0 || strlen === 2) return '';
    if (strlen === 1) return str;

    let substr = '';

    for (let i = 1; i < strlen-1; i++) {
        substr += str[i];
    }

    return substr;
}