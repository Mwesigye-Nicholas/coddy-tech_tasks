/**
 * convert - returns un array of numbers
 *
 * @n: number to be returned into un array
 *
 * Return: un array
 */

function convert(n) {
    // Write code here
    let stringNumber = n.toString();
    let numArray = stringNumber.split('');
    let length = stringNumber.length - 1;
    
    let numArray1 = [];
    
    for (let i = 0; i <= length; i++){
        numArray1.push(parseInt(numArray[i]));
    }
    return numArray1;
}
console.log(convert(123));
console.log(convert(91));
//Expected output: [1, 2, 3]
//Expected output: [9, 1]
