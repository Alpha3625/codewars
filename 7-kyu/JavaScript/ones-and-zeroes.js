// Codewars: https://www.codewars.com/kata/650a86e8404241005fc744ca
// Level: 7 kyu
// Task: Ones and Zeroes


function binaryDigits(str) {
    if (
        typeof str !== "string" ||
        !str.length ||
        !/^[01]+$/g.test(str) || 
        /^1+$/.test(str) ||
        str[0] === "0"
    ) {
        return false;
    }

    const digits = [];

    for (let match of str.matchAll(/1+(?=(0+))/g)) {
        digits.push(match[0], match[1]);
    }

    for (let i = 0; i < digits.length; i += 2) {
        if (digits[i].length !== digits[i + 1].length) {
            return false;
        }
    }

    return true;
}