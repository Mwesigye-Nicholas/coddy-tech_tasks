/**
 * mulWord - repeats a given string n 
 * times with space in between
 *
 * @s: string to be repeated
 *
 * @n: number of times a string will be repeated
 *
 * Return: repeated string with space
 */


function mulWord(s, n) {
    // Write code here
    let newString = [];
    for (let i = 1; i <= n; i++){
        newString.push(s);
    }
    return s = newString.join(' ');
}
console.log(mulWord('cow', 3));
//expected output: cow cow cow
