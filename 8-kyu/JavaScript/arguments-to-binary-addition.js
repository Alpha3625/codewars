// Codewars: https://www.codewars.com/kata/57642a90dee2da8dd3000161
// Level: 8 kyu
// Task: Arguments to Binary addition

// The first way________________________________
function arr2bin(arr) {
    let sum = 0;
    let minus = false;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }

    if (sum === 0) return "0";
    if (Number.isNaN(sum)) return "NaN";
    if (sum < 0) {
        minus = true;
        sum = Math.abs(sum);
    }

    let binary = "";

    while (sum > 0) {
        binary += sum % 2;
        sum = Math.floor(sum / 2);
    }

    let reverseBinary = "";

    for (let i = binary.length - 1; i >= 0; i--) {
        reverseBinary += binary[i];
    }

    return minus ? "-" + reverseBinary : reverseBinary;
}

// The second way________________________________
function arr2bin(arr){
  return arr.reduce((acc, val) => typeof val === "number" ? acc + val : acc, 0).toString(2);
}