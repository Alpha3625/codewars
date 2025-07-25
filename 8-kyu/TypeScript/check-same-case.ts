// Codewars: https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
// Level: 8 kyu
// Task: Check same case


export function sameCase(a : string, b : string): number {
  let isLetter = (str: string) => 
    str.length === 1 && /[a-zA-Z]/.test(str);
  
  let isLowerCase = (str: string) => 
    str.length === 1 && /[a-z]/.test(str);
  
  if (isLetter(a) && isLetter(b)) {
    return isLowerCase(a) === isLowerCase(b) ? 1 : 0;
  }
  
  return -1;
}