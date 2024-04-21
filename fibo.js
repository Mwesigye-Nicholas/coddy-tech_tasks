/**
 * fibo - returns un element at a given index
 *
 * @i: defines the index to be returned
 *
 * Return: return un element at a given index
 */

let x = function fib(n){
  let origArray = [0, 1];
  for (let i = 0; i < 24; i++){
    origArray.push(origArray[i] + origArray[i + 1]);
  }
  return origArray[n];
}
console.log(x(7));
//expected output: 13
