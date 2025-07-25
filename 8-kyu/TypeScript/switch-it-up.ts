// Codewars: https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
// Level: 8 kyu
// Task: Switch it Up!

function switchItUp(intNumber:number):string {
  type NumberWords = Record<number, string>;
  
  const numberWords: NumberWords = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  } as const;
  
  return numberWords[intNumber];
}