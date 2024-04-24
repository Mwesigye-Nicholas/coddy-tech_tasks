/**
 * max - returns the most occuring
 * number in un array of numbers
 *
 * @a: parameter
 *
 * Return: most occuring number
 */

const occurMax = (a) =>{
    let count = {};
    let maxCount = 0;
    let maxElement = a[0];

    a.forEach(element => {
        count[element] = (count[element] || 0) + 1;
        if (count[element] > maxCount){
            maxCount = count[element];
            maxElement = element;
        }
    });
    return maxElement;
}
console.log(occurMax([1, 2, 1]));
//Expected output: 1;
