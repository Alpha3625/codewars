// Codewars: https://www.codewars.com/kata/64fbfe2618692c2018ebbddb
// Level: 8 kyu
// Task: Flick Switch

function flickSwitch(arr) {
  if (arr.length !== 0) {
      const booleanArray = [];
      let booleanValue = true;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "flick") {
          booleanValue = !booleanValue;
        }
        
        booleanArray.push(booleanValue);
      }

      return booleanArray;
  }
  
  return [];
}