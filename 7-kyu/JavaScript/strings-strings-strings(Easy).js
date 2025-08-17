// Leetcode: https://www.codewars.com/kata/56d6b921c9ae3fd926000601
// Level: Easy
// Task: Strings, strings, strings (Easy)

Boolean.prototype.toString = function() {
  return this.valueOf() ? "true" : "false";
}

Number.prototype.toString = function() {
  return "" + this.valueOf()
}

Array.prototype.toString = function() {
  let result = '[';
  
  for (let i = 0; i < this.length; i++) {
    result += (new Number(this[i])).toString();
    if (i < this.length - 1) result += ', ';
  }
  
  result += ']';
  return result;
}