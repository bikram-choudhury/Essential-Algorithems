### Bubble Sort

Time Complexity: `O(n)` _[Best]_, `O(n^2)` _[Worst]_

Space Complexity:: `O(1)`

```javascript
function bubbleSort(array) {
  for(let i = array.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      if(array[j] > array[j + 1]) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
console.log(bubbleSort([3, 15, 5, 2, 27, 17])); // [ 2, 3, 5, 15, 17, 27 ]
```


### insertion Sort

Time Complexity: `O(n)` _[Best]_, `O(n^2)` _[Worst]_

Space Complexity:: `O(1)`

```javascript
function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    const current = array[i];
    for(var j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = current;
  }
  return array;
}

console.log(insertionSort([3, 15, 5, 2, 27, 17, 1])); // [1, 2, 3, 5, 15, 17, 27]
```
