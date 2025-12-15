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



/************* Reverse Array *********************/

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap arr[left] and arr[right]
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray([10, 20]));


/************** Shifting Array ********************/

function shiftArrayElements(arr, shift) {
    const n = arr.length;

    if (n === 0) {
        return [];
    }

    let result = new Array(n);

    shift = shift % n;

    if (shift < 0) {
        shift = shift + n;
    }
    for (let i = 0; i < n; i++) {
        let newIndex = i + shift;

        if (newIndex >= n) {
            newIndex = newIndex - n;
        }

        result[newIndex] = arr[i];
    }

    return result;
}

console.log(shiftArrayElements([10, 20, 30], 1));
// [30, 10, 20]