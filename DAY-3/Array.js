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



// NEXT PRIME

function nextPrime(n) {
    let num = n + 1;

    while (true) {
        if (isPrime(num)) {
            return num;
        }
        num++;
    }
}

function isPrime(x) {
    if (x < 2) return false;

    let i = 2;

    // Check divisors i such that i*i <= x
    while (i * i <= x) {
        if (x % i === 0) {
            return false;
        }
        i++;
    }

    return true;
}

console.log(nextPrime(7));   // 11
console.log(nextPrime(13));  // 17