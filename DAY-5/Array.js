// ***************** GetSum ******************

function getSum(n) {
    // Base case
    if (n === 1) {
        return 1;
    }
    // Recursive case
    return n + getSum(n - 1);
}

console.log(getSum(5)); // 15
console.log(getSum(1)); // 1

// how it works
/*
getSum(1) returns 1
getSum(2) returns 2 + 1 = 3
getSum(3) returns 3 + 3 = 6
getSum(4) returns 4 + 6 = 10
getSum(5) returns 5 + 10 = 15
*/


// (2) ************* recursive n-to-1 *******
function solution(n) {
    if (n === 1) {
        return [1];
    }

    const rest = solution(n - 1);

    const result = new Array(rest.length + 1);

    result[0] = n;

    for (let i = 0; i < rest.length; i++) {
        result[i + 1] = rest[i];
    }

    return result;
}

console.log(solution(5)); // [5, 4, 3, 2, 1]
