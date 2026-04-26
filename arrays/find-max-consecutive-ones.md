## [LeetCode#485](https://leetcode.com/problems/max-consecutive-ones/)

```js
var findMaxConsecutiveOnes = function(nums) {
    if(!nums || nums.length < 2) return nums;
    
    let idx1 = null, idx2 = 0, maxCount = 0;
    while(idx2 < nums.length) {
        if(nums[idx2] === 1) {
            if(idx1 === null) {
                idx1 = idx2;
            }
        } else {
            if(idx1 !== null) {
                maxCount = Math.max(maxCount, idx2 - idx1);
                idx1 = null;
            }
        }
        idx2++;
    }
    return idx1 === null ? maxCount: Math.max(maxCount, idx2-idx1 );
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // 2
console.log(findMaxConsecutiveOnes([0,2, 0,1,0,1,1,1,0,1])); // 3
console.log(findMaxConsecutiveOnes([0,2,0,1,0,1,1,1,0,1,1,2,3,4])); // 3
```

```js
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0, currentCount = 0, idx = 0;
    while(idx < nums.length) {
        if(nums[idx] === 1) {
            currentCount++;
        }
        else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
        idx++;
    }
    return Math.max(maxCount, currentCount);
};
```
