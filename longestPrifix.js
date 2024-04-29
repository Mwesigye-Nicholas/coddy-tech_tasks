function longestCommonPrefix(a) {
    // Write code here
    if (a.length === 0){
        return '';
    }

    const letters = [];
    const lengthOfShortestWord = Math.min(...a.map(a => a.length));

    for (let i = 0; i < lengthOfShortestWord; i++){
        const char = a[0][i];
        if (a.every(a => a[i] === char)){
            letters.push(char);
        }else {
            break;
        }
    }
    return letters.join("");
}
congestCommonPrefix(['Hello, Bob', 'Hello, Jake'])  ->  'Hello, '
