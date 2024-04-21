/**
 * alternate - return a single array with 
 * alternated arrangement of both array elements
 *
 * @a1: parameter
 * @a2: paramter
 *
 * Return: alternated arrangement
 * of the two array elements
 */



function alternate(a1, a2) {
    // Write code here
    let combinedArray = [];

    let length = a1.length - 1;
    //let a2Length = a2.length - 1;
    for (let i = 0; i <= length; i++){
        combinedArray.push(a1[i], a2[i]);
    }
    return combinedArray;
}
console.log(alternate([1, 2, 3], [4, 5, 6]));
//Expected output: [ 1, 4, 2, 5, 3, 6 ]
