/**
 * primeNumber - return a prime number
 *
 * @num: number to be checked whether its a prime number
 *
 * Return: prime number
 */

const primeNumber = (num) => {
let factors = [];
  for (let i = 1; i <= num; i++){
    if (num % i === 0){
      factors.push(i);
    }
  }
  if (factors.length > 2) return false;
  return true;
}
console.log(primeNumber(13));
console.log(primeNumber(8));
console.log(primeNumber(11));
//Expected output: true
//Expected output: false
//Expected output: true
