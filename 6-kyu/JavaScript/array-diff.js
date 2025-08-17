// Codewars: https://www.codewars.com/kata/523f5d21c841566fde000009
// Level: 6 kyu
// Task: Array.diff

// The first way___________________________________
function arrayDiff(a, b) {
    const lookup = {};
    const result = [];

    for (let i = 0; i < b.length; i++) {
        lookup[b[i]] = true;
    }

    for (let i = 0; i < a.length; i++) {
        if (!lookup[a[i]]) {
            result.push(a[i]);
        }
    }

    return result;
}

// The second way___________________________________
function arrayDiff(a, b) {
    const setB = new Set(b);
    return a.filter(e => !setB.has(e));
}