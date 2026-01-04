/**************** Selection Sort *******************/

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the index of the minimum element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap if a smaller element is found
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example
console.log(selectionSort([3, 1, 2, 4, 5])); // [1, 2, 3, 4, 5]


/**************Insertion Sort *******************/

function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements that are greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key at the correct position
        arr[j + 1] = key;
    }

    return arr;
}

console.log(insertionSort([5, 3, 1, 4, 2])); // [1, 2, 3, 4, 5]



/********************Merge Sort ******************/

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // Add remaining elements
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}
console.log(mergeSort([10, 3, 2, 8, -1, 5, 1]));
// Output: [-1, 1, 2, 3, 5, 8, 10]




/****************** quicksort *******************/

function quicksortCustom(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1]; // choose last element as pivot
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [
        ...quicksortCustom(left),
        pivot,
        ...quicksortCustom(right)
    ];
}

console.log(quicksortCustom([3, 6, 8, 10, 1, 2, 1]));
// Output: [1, 1, 2, 3, 6, 8, 10]

