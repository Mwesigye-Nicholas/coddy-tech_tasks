/**
 * sum - sum numbers from 1 to n
 *
 * @n: summing limit
 *
 * Return: sum
 */

const sum = function(n){
    if (n <= 1) return n;
    return n + sum(n - 1);
}
console.log(sum(3));
console.log(sum(4));
