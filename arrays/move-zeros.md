# Move Zeros in Place

### [Leetcode#283](https://leetcode.com/problems/move-zeroes/description/)

## Description
Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

## Optimized Solution: 
To move zeros in an array to the end without changing the order of the non-zero elements, we can use a **two-pointer approach**:

- **Pointer `i`**: Iterates through the array from left to right.
- **Pointer `j`**: Keeps track of the position where the next non-zero element should be placed.

### Steps:

1. As `i` moves through the array:
   - If `arr[i]` is non-zero, swap it with `arr[j]`, and then increment `j`.
   - If `arr[i]` is zero, simply move `i` to the next index.
   
This approach ensures that all non-zero elements are moved to the front, and zeros are pushed to the end.

### Example:

**Input**: `[0, 1, 0, 3, 12]`

- **Initial state**: `j = 0, i = 0`

#### Iteration steps:

1. **i = 0**: `arr[i] = 0` (no move), so increment `i`.  
   `i++`

2. **i = 1**: `arr[i] = 1` (non-zero), swap `arr[1]` with `arr[0]`, then increment `j` and `i`.  
   `arr = [1, 0, 0, 3, 12]`, `j = 1`, `i++`

3. **i = 2**: `arr[i] = 0` (no move), so increment `i`.  
   `i++`

4. **i = 3**: `arr[i] = 3` (non-zero), swap `arr[3]` with `arr[1]`, then increment `j` and `i`.  
   `arr = [1, 3, 0, 0, 12]`, `j = 2`, `i++`

5. **i = 4**: `arr[i] = 12` (non-zero), swap `arr[4]` with `arr[2]`, then increment `j` and `i`.  
   `arr = [1, 3, 12, 0, 0]`, `j = 3`, `i++`

**Output**: `[1, 3, 12, 0, 0]`

### Time Complexity:  
- **O(n)** where `n` is the number of elements in the array.  
Each element is visited at most twice—once by `i` and potentially once by `j`.

### Space Complexity:  
- **O(1)**, since we are modifying the array in-place.

<detail>

```js
var moveZeroes = function(nums) {
    let i = 0, j = 0;
    while(i < nums.length) {
        const n = nums[i];
        if(n != 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]];
            j++;
        }
        i++;
    }
    return nums;
};
```
</detail>
