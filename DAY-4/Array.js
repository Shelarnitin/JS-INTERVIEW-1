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