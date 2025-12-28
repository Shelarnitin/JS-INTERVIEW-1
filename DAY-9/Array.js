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



/**************MergeArrya & decending order *************/

function mergeSortedArraysDescendingUnique(arr1, arr2) {
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    const result = [];

    while (i >= 0 && j >= 0) {
        if (arr1[i] === arr2[j]) {
            if (result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i--;
            j--;
        } else if (arr1[i] > arr2[j]) {
            if (result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i--;
        } else {
            if (result[result.length - 1] !== arr2[j]) {
                result.push(arr2[j]);
            }
            j--;
        }
    }

    // Remaining elements in arr1
    while (i >= 0) {
        if (result[result.length - 1] !== arr1[i]) {
            result.push(arr1[i]);
        }
        i--;
    }

    // Remaining elements in arr2
    while (j >= 0) {
        if (result[result.length - 1] !== arr2[j]) {
            result.push(arr2[j]);
        }
        j--;
    }

    return result;
}

mergeSortedArraysDescendingUnique(
  [1, 2, 3, 4, 5],
  [3, 4, 5, 6, 7]
);

// Output:
// [7, 6, 5, 4, 3, 2, 1]



/************Merge & Asending *************/
function mergeNSortedArrays(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result = mergeTwoSortedArrays(result, arr[i]);
    }

    return result;
}

function mergeTwoSortedArrays(a, b) {
    let i = 0, j = 0;
    const merged = [];

    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            merged.push(a[i]);
            i++;
        } else {
            merged.push(b[j]);
            j++;
        }
    }

    while (i < a.length) {
        merged.push(a[i]);
        i++;
    }

    while (j < b.length) {
        merged.push(b[j]);
        j++;
    }

    return merged;
}

mergeNSortedArrays([
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]);

// Output:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
