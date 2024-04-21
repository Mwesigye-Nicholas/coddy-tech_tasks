/**
 * fact - returns the factorial of the number
 *
 * @num: number to be factorised
 *
 * Return: factorial of num
 */

const fact = (num) =>{
  if (num === 1) return num;
  return num * fact(num - 1);
}
console.log(fact(6));
console.log(fact(3));
//Expected output: 720
//Expected output: 6

