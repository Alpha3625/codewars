// Codewars: https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
// Level: 8 kyu
// Task: Switch it Up!

function switchItUp(number) {
    const digits = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return digits[number] || "Enter a number from 0 to 9";
}