// Codewars: https://www.codewars.com/kata/57096af70dad013aa200007b
// Level: 8 kyu
// Task: Logical calculator

function logicalCalc(array, op){
    switch (op) {
        case "AND":
            return array.every(Boolean);
        case "OR":
            return array.some(Boolean);
        case "XOR":
            return array.filter(Boolean).length % 2 === 1;
        default:
            throw new Error("Unsupported operator. Use 'AND', 'OR', or 'XOR'.");
    }
}