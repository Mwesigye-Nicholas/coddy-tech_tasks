/**
 * remove - removes element from the string 
 * that matches a given index
 *
 * @s: string where the specified element 
 * should be reoved
 *
 * @i: index to removed
 */

const remove = (s, i) => s.substring(0, i) + s.substring(i + 1);
console.log(remove('Example', 3));
//expected out: Exaple
