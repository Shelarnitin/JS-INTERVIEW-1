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


// ****************** n th Prime  *****************

function nthPrime(n) {
    let count = 0;     // how many primes found
    let num = 2;       // start checking from the first prime

    while (true) {
        if (isPrime(num)) {
            count++;
            if (count === n) {
                return num;
            }
        }
        num++;
    }
}

// helper function to test primality
function isPrime(x) {
    if (x < 2) return false;

    let i = 2;
    // check divisors while i * i <= x
    while (i * i <= x) {
        if (x % i === 0) {
            return false;
        }
        i++;
    }

    return true;
}

console.log(nthPrime(5)); // 11
console.log(nthPrime(10)); // 29



/******************* Get Prime Factorial *************************/

function getPrimeFactors(n) {
    let factors = [];
    let i = 2;

    // Check for smallest divisors up to sqrt(n)
    while (i * i <= n) {
        if (n % i === 0) {
            factors.push(i); // i is a prime factor
            
            // Divide n fully by i to remove duplicates
            while (n % i === 0) {
                n = n / i;
            }
        }
        i++;
    }

    // If n is still > 1, it's a prime factor itself
    if (n > 1) {
        factors.push(n);
    }

    return factors;
}



console.log(getPrimeFactors(12));   // [2, 3]
console.log(getPrimeFactors(30));   // [2, 3, 5]