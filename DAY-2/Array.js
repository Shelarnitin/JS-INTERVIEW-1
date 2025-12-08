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
