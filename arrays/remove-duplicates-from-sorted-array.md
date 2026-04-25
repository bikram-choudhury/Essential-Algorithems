```js
// Remove Duplicates from sorted array

var removeDuplicates = function(nums) {
    if(!nums) return nums;
    if(nums.length < 2) return nums;

    let i = 0, j = 1;
    while(j < nums.length) {
        if(nums[i] !== nums[j]) {
            const temp = nums[i+1];
            nums[i+1] = nums[j];
            nums[j] = nums[i+1];
            i++;
        }
        j++;
    }
    return nums.slice(0, i+1);
}

// Remove Duplicates from sorted / unsorted array

var removeDuplicates = function(nums) {
    if(!nums) return nums;

    const set = new Set();
    let i = 0;
    while(i < nums.length) {
        if(!set.has(nums[i])) {
            set.add(nums[i]);
        }
        i++;
    }
    return [...set]
}

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
```
