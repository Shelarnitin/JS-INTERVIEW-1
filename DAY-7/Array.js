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