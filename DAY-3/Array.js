function isPerfectSquare(n) {
    if (n < 0) {
        return false;
    }

    let i = 0;

    while (i * i <= n) {
        if (i * i === n) {
            return true;
        }
        i++;
    }

    return false;
}

console.log(isPerfectSquare(16));  // true
console.log(isPerfectSquare(7));   // false