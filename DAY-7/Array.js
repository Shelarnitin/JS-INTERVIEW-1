// **************** ReverseArray ************

function solution(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // swap arr[left] and arr[right]
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

console.log(solution([1, 2, 3, 4, 5])); // 5, 4, 3, 2, 1 
console.log(solution([10, 20, 30]));    // 30, 20, 10
console.log(solution([7]));             // 7



/*************** ShuffleArray *********************/

function shuffleArray(nums, k) {
    let front = [];
    let moved = [];

    for (let i = 0; i < nums.length; i++) {
        // (i + 1) because positions are 1-indexed
        if ((i + 1) % k === 0) {
            moved[moved.length] = nums[i];
        } else {
            front[front.length] = nums[i];
        }
    }

    // append moved elements to the end
    for (let i = 0; i < moved.length; i++) {
        front[front.length] = moved[i];
    }

    return front;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
