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




/*********** Remove Commen Element ***************/
function removeCommonElements(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            // skip common element
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // add remaining elements
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

removeCommonElements([2, 5, 7, 10], [1, 5, 9]);
// Output: [1, 2, 7, 9, 10]
