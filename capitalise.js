/**
 * capitalised - capitalises the first 
 * letter of each word in a sentence
 *
 * @s: string whose first letters 
 * of each word will be capitalised
 *
 * Return: string with first letters capitalised
 */

const upperCased = function(s){
    
    let str = s.split(" ");

    for (let i = 0; i <= str.length - 1; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}

console.log(upperCased('i love javascript'));
console.log(upperCased('hardwork pays off for sure'));
