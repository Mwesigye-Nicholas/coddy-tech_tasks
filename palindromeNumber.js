/**
 * palindromeNumber - checkes for palindrome number
 *
 * @num: number to be checked
 *
 * Return: true for palindrome and false otherwise
 */

const palindromeNum = (num) => {
    let newNum = num.toString();
    let stringNum = '';
    for (let i = newNum.length - 1; i >= 0; i--){
        stringNum += newNum[i];
    }
    let reversedNum = Number(stringNum);
    if (num === reversedNum) return true;
    return false;
}
console.log(palindromeNum(676));
console.log(palindromeNum(12345));
console.log(palindromeNum(131));
//Expected output: true
//Expected output: false
//Expected output: true
