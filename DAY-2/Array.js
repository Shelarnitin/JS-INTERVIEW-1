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

