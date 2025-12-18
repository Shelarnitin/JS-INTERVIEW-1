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
