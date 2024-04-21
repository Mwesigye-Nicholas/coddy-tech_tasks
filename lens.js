/**
 * lens - checks the length of 
 * the substrings in the array
 *
 * @arr: parameter
 *
 * Return: array of length of substrins
 */

function lens(arr) {
    // Write code here
    let arrLength = arr.length - 1;
    let childStringLegnth = [];
    for (let i = 0; i <= arrLength; i++){
        childStringLegnth.push(arr[i].length);
    }
    return childStringLegnth;
}
console.log((lens(['How', 'is', 'it', 'you'])));
console.log(lens(['first', 'second', 'third', '4']))
//Expected output: [3, 2, 2, 3]
//Expected output: [5, 6, 5, 1]
