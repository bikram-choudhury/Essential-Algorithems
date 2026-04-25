```js
var removeElement = function(nums, val) {
    let i = 0, j = 0;
    while(j < nums.length) {
        if(nums[j] !== val) {
            nums[i++] = nums[j];
        }
        j++;
    }
    return i;
};

console.log(removeElement([3,2,2,3], 3)); // 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5
```
