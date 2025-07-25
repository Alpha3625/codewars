// Codewars: https://www.codewars.com/kata/56c22cdbe0c0f7cae2001789
// Level: 7 kyu
// Task: Write shortest function to calculate Average number of Array

function avg(a) {
    return a.reduce((accumulator, value) => accumulator + value, 0) / a.length;
}