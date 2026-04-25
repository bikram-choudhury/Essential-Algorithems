```js
function reverseString(charArray) {
    if(!charArray || charArray.length < 2) return charArray;
    
    const mid = Math.floor(charArray.length / 2);
    let i = 0;
    while(i < mid) {
        const temp = charArray[i];
        charArray[i] = charArray[charArray.length - 1 - i];
        charArray[charArray.length  - 1 - i] = temp;
        
        i++;
    }
    return charArray;
}


console.log(reverseString(["h","e","l","l","o"]));  // [ 'o', 'l', 'l', 'e', 'h' ]
console.log(reverseString(["H","a","n","n","a","h"]));  // [ 'h', 'a', 'n', 'n', 'a', 'H' ]

```
