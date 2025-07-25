// Codewars: https://www.codewars.com/kata/57241e0f440cd279b5000829
// Level: 8 kyu
// Task: Sum of Multiples

function sumMul(n, m) {
    if (n >= m) return 'INVALID';

    let sum = 0;

    for (let i = n; i < m; i++) {
        if (i % n === 0) sum += i;
    }

    return sum;
}