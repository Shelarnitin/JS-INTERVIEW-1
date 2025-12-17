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
