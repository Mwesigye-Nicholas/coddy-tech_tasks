/**
 * min - returns a minimum element in the array
 *
 * @arr: array to be checked for minum value
 *
 * Return: minimum value in the array
 */

function min(arr) {
    // Write code here

    let minimunValue = arr[0];
    let arrLength = arr.length - 1;

    for (let i = 0; i <= arrLength; i++){
        if (arr[i] < minimunValue){
            minimunValue = arr[i];
        }
    }
    return minimunValue;
}
console.log(min([2, 3, 1]));
console.log(min([9, 3, 4, 7]));
//Expected output: 1
//Expected output: 3
