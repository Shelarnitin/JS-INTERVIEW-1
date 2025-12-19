/********************** Toeplitz ************************/

function isToeplitz(matrix) {
    const n = matrix.length;

    // Traverse from second row and second column
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }

    return true;
}

console.log(isToeplitz([
  [6, 7, 8],
  [4, 6, 7],
  [1, 4, 6]
])); // true

console.log(isToeplitz([
  [1, 2, 3],
  [4, 1, 9],
  [5, 4, 1]
])); // false


// ************* countLessThan *******************

function countLessThan(matrix, target) {
    const n = matrix.length;
    const m = matrix[0].length;

    let row = 0;
    let col = m - 1;
    let count = 0;

    while (row < n && col >= 0) {
        if (matrix[row][col] < target) {
            // All elements in this row from 0 to col are < target
            count += (col + 1);
            row++;
        } else {
            // Current value >= target, move left
            col--;
        }
    }

    return count;
}

console.log(countLessThan(
  [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7]
  ],
  5
)); // 10
