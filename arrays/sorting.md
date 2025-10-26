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

### Bubble Sort - Approach 2

<details>
  <summary>Explanation</summary>
    
    ### 🧮 Step-by-step from your image (n = 4)

    Initial array:  `[5, 2, 4, 1]`

    #### **Pass 1**
    Compare adjacent elements:
    
    1️⃣ Compare (5, 2) → swap → `[2, 5, 4, 1]`  
    2️⃣ Compare (5, 4) → swap → `[2, 4, 5, 1]`  
    3️⃣ Compare (5, 1) → swap → `[2, 4, 1, 5]`
    
    ✅ After **3 swaps**, the largest element `5` is now at its correct place (last position).
    
    **So: 3 times (swaps)**
    
    ---
    
    #### **Pass 2**
    Now we ignore the last element (`5`) since it's sorted.
    
    Array: `[2, 4, 1, 5]`
    
    1️⃣ Compare (2, 4) → no swap  
    2️⃣ Compare (4, 1) → swap → `[2, 1, 4, 5]`
    
    ✅ After **2 swaps**, `4` is in its correct position.
    
    **So: 2 times**
    
    ---
    
    #### **Pass 3**
    Now ignore the last two sorted elements (`4, 5`).
    
    Array: `[2, 1, 4, 5]`
    
    1️⃣ Compare (2, 1) → swap → `[1, 2, 4, 5]`
    
    ✅ After **1 swap**, `2` is now in the correct position.
    
    **So: 1 time**
    
    ---
    
    ✅ **Sorted array:** `[1, 2, 4, 5]`  
    Total passes = 3  
    Each pass reduces the unsorted part by one element.
    
</details>

```javascript
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let didSwap = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;

        didSwap = true;
      }
    }
    if(!didSwap) break;
  }
  return array;
}
```

### Selection Sort

Time Complexity: `O(n)` _[Best]_, `O(n^2)` _[Worst]_

Space Complexity:: `O(1)`

<details>
  <summary>Explanation</summary>

  **Selection Sort** works by repeatedly selecting the smallest element from the unsorted portion of the array and moving it to the beginning (the sorted portion).
  
  ### How it works:
  - Loop through all elements of the array.
  - Find the minimum element in the unsorted part.
  - Swap this minimum element with the first unsorted element.
  - Expand the sorted portion to the right and shrink the unsorted portion.

This process continues until the entire array is sorted.
  
</details>

```javascript
function selectionSort(array) {
  for(let i = 0; i < array.length -1; i++) {
      let minIdx = i;
      for(let j = i+1; j <= array.length - 1; j++) {
          if(array[minIdx] > array[j]) {
              minIdx = j;
          }
      }
      if(i != minIdx) {
          const temp = array[minIdx];
          array[minIdx] = array[i];
          array[i] = temp;
      }
  }
  return array;
}
```


### insertion Sort

Time Complexity: `O(n)` _[Best]_, `O(n^2)` _[Worst]_

Space Complexity:: `O(1)`

```javascript
function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        const current = array[i];
        let prev = i - 1;
        while(array[prev] > current && prev > -1) {
            array[prev + 1] = array[prev];
            prev = prev - 1;
        }
        array[prev + 1] = current;
    }
    return array;
}

console.log(insertionSort([3, 15, 5, 2, 27, 17, 1])); // [1, 2, 3, 5, 15, 17, 27]
```
