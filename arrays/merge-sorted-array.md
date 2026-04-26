```js
function merge(array1, m, array2, n) {
    const result = [];
    let i = 0, j = 0;
    while(i < array1.length && i < m && j < array2.length && j < n) {
        if(array1[i] < array2[j]) {
            result.push(array1[i++]);
        } else {
            result.push(array2[j++]);
        }
    }
    if(i < array1.length && i < m) {
        result.push(...array1.slice(i, m));
    }
    if(j < array2.length && j < n) {
        result.push(...array2.slice(j, n));
    }
    return result;
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); // [ 1, 2, 2, 3, 5, 6 ]
console.log(merge([1], 1, [], 0)); // [ 1 ]
console.log(merge([0], 0, [1], 1)); // [ 1 ]
```
