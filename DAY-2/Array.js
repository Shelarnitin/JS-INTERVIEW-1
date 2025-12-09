// FIND MIN ELEMENT IN THE ARRAY

function findMin(arr) {
    let minElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < minElement) {
            minElement = arr[i];
        }
    }
    return minElement
}

const sampleArray = [2,3,4,1,17,4,6,9]
console.log(findMin(sampleArray));

// FIND Max ELEMENT IN THE ARRAY

function findMax(arr) {
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement
}

const sampleArray1 = [2,3,4,1,17,4,6,9]
console.log(findMax(sampleArray1));




/******************* countEvenOdd ********************/

function countEvenOdd(nums) {
    let even_count = 0;
    let odd_count = 0;

    // Loop through array manually
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];

        // Even number
        if (value % 2 === 0) {
            even_count++;
        } 
        // Odd number
        else {
            odd_count++;
        }
    }

    return { even_count: even_count, odd_count: odd_count };
}


console.log(countEvenOdd([1, 2, 3, 4, 5])); 
// { even_count: 2, odd_count: 3 }

console.log(countEvenOdd([])); 
// { even_count: 0, odd_count: 0 }


// *****************************smallest element appears*******************************
function countMin(numbers) {
    // If array is empty → return 0
    if (numbers.length === 0) {
        return 0;
    }

    // Start by assuming the first number is the smallest
    let min = numbers[0];
    let count = 1;

    // Traverse the array once
    for (let i = 1; i < numbers.length; i++) {
        const value = numbers[i];

        if (value < min) {
            // Found a new smallest value → reset count
            min = value;
            count = 1;
        } else if (value === min) {
            // Same as current smallest → increase count
            count++;
        }
    }

    return count;
}

console.log(countMin([3, 1, 2, 1, 4])); // 2
console.log(countMin([5, 5, 5]));       // 3
console.log(countMin([10]));            // 1
console.log(countMin([]));              // 0
