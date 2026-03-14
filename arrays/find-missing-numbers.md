Given a sorted array **arr[]** of **N** integers, The task is to find the multiple missing elements in the array between the ranges **[arr[0], arr[N-1]]**.

Examples:

Input: arr = [6, 7, 10, 11, 13]

Output: [8, 9, 12] 

***Explanation:***
The elements of the array are present in the range of the maximum and minimum array element [6, 13]. Therefore, the total values will be [6, 7, 8, 9, 10, 11, 12, 13]. 
The elements from the above range which are missing from the array are [8, 9, 12]. 
 
Input: arr = [1, 2, 4, 6]

Output: 3 5

```js
function findMultipleMissing(arr) {
  // 1. Determine the range of numbers.
  // This approach assumes the missing numbers are within the min/max of the input array.
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // 2. Create a Set of all numbers in the expected range.
  const expectedRange = new Set();
  for (let i = min; i <= max; i++) {
    expectedRange.add(i);
  }

  // 3. Remove existing numbers from the Set.
  for (const number of arr) {
    expectedRange.delete(number);
  }

  // 4. Convert the remaining Set elements to an array (they are the missing numbers).
  // The result will be sorted because Set iteration order is insertion order (min to max).
  return Array.from(expectedRange);
}

// Example usage:
const numbers = [3, 4, 1, 2, 6, 8, 12];
const missing = findMultipleMissing(numbers);
console.log(`The missing numbers are: ${missing}`); // Output: The missing numbers are: 5,7,9,10,11
```
