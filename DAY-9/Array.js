/************ mergeSortedArrays ******************/

function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];

    // Compare elements from both arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(mergeSortedArrays(
  [1, 3, 5, 7, 9],
  [2, 2, 3, 4, 6, 6]
));
