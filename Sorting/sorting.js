let array = [2, 25, 30, 1, 50, 4, 10, 12, 47, 51];
function sort(arr, way) {
    let iterations = 0;
    let changes = 0;
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (way === 1) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    changes++;
                }
            }
            else {
                if (arr[i] < arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    changes++;
                }
            }
            iterations++;
        }
    }
    return arr;
}
console.log(sort(array, 1));
