/**
 * reversedString - reverses a string
 *
 * @s: string to be reversed
 *
 * Return: returns a reversed string
 */
const reversedString = (s) =>{
    
    let newString = '';
    const stringLength = s.length - 1;
    for (let i = stringLength; i >= 0; i--){
        newString += s[i];
    }
    return newString;
}
console.log(reversedString("JavaScript"));
console.log(reversedString("Programming"));
