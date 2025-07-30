// Codewars: https://www.codewars.com/kata/58b972cae826b960a300003e
// Level: 7 kyu
// Task: Jenny the youngest detective

function missingWord(nums, str) {
    if (!str) return "";

    let newStr = str.split("").reduce((acc, val) =>
        val !== " " ? acc + val.toLowerCase() : acc, "");

    return nums.sort((a, b) => a - b).reduce((acc, val) => {
        if (val < newStr.length) {
            return acc + newStr[val];
        } else {
            return acc = "No mission today";
        }
    }, "");
}