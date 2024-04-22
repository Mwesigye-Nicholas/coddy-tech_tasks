/**
 * sort - arranges a string alphabetically
 *
 * @s: parameter
 *
 * Return: a string arranged alphabetically
 */
function sort(s) {
    // Write code here
    return s.split('').sort().join('');
}
console.log(sort('hello'));
//Expected output: ehllo
