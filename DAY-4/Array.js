/******************* Find Index ******************/

function findIndex(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i; 
        }
    }
    return -1;
}

console.log(findIndex([5, 3, 7, 9], 7));     // 2
console.log(findIndex([1, 2, 3], 4));        // -1



/************ CountUniqeElement ********************/

function countUniqueElements(arr) {
    let uniqueCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        // Count occurrences of arr[i]
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        // If element appears exactly once, it is unique
        if (count === 1) {
            uniqueCount++;
        }
    }

    return uniqueCount;
}

console.log(countUniqueElements([1, 2, 3, 2, 4])); // 3
console.log(countUniqueElements([5, 5, 5]));      // 0
console.log(countUniqueElements([1, 2, 3]));      // 3
console.log(countUniqueElements([]));             // 0
