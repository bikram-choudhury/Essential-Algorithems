# Essential Algorithems
* This book's goal is to help JS Developers to prepare for technical & coding job interviews
* A mostly reasonable collection of DataStructure Algorithems solved in ES5 & ES6 concepts

## Table of Contents
* Multiple Pointer
    * [Write a function called **countZeroes**, which returns the number of zeroes in the array.](#countzeroes)
    * [SubSequence check without continuous characters](#subsequence-check-without-continuous-characters)
    * [SubSequence check with continuous characters](#subsequence-check-with-continuous-characters)
    * [Average pair](#average-pair)
* Sliding Window
    * [Minimum Subarray length](#minimum-subarray-length)
    * [Maximum Subarray length](#maximum-subarray-length)
* Recurssion
    * [Flattern Array](#flattern-array)
    * [Palindrome Check](#palindrome-check)
    * [Reverse string](#reverse-string)
    * [Factorial](#factorial)
    * [Find nth Fibonacci number](#find-nth-fibonacci-number)
    * [Find Fibonacci series upto a given number](#find-fibonacci-series-upto-a-given-number)
    * [Capitalize Words](#capitalize-words)
    * [Collect String from nested object](#collect-string-from-nested-object)
    * [Sum of all numbers from nested object](#sum-of-all-numbers-from-nested-object)
    * [Capitalize first character of each string in an array](#Capitalize-first-character-of-each-string-in-an-array)
    * [Add all numbers from 0 to given](#add-all-numbers-from-0-to-given)
* [Single Linked List - SLL](singleLinkedList.js)
* [Stack - SLL](stack.js)
* [Binary Search Tree - BST with BFS & DFS ALgo](binarySearchTree.js)
* For more DS like Queue, Stacks, Heaps please visit https://codepen.io/collection/GoOBJk
* Coin Change
    * [Find total number of ways](#coin-change---find-total-number-of-ways)
    * [Find minimum number of coins](#coin-change---find-minimum-number-of-coins)
* [Find shortest path between 2 points using Dijkstra's Algorithem](Dijkstra's-Algorithem.js)

### countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s. Write a function called **countZeroes**, which returns the number of zeroes in the array.

```javascript
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
```
<details><summary>Answer</summary>

```javascript
/*
    Approach - 1 => Frequency counter
    This approach doesn't depends on any array order
*/

function countZeroes(array = []) {
    if (!(array && array.length)) return null;
    const hash = {};
    for (const value of array) {
        hash[value] = (hash[value] || 0) + 1;
    }
    return hash[0] || 0;
}

/* 
    Approach - 2 => Divide and Conquer 
    this approach only works with array values present in any order
*/

function countZeroes(array = []) {
    if (!(array && array.length)) return null;
    let min = 0, max = array.length - 1;
    
    if(array[min] === 0) return array.length;
    if(array[max] === 1) return 0;

    while (min < max) {
        const mid = Math.floor((min + max) / 2);
        if (array[mid] === 1) {
            if (array[mid + 1] === 0) {
                return array.length - 1 - mid;
            }
            min = mid;
        } else {
            if (array[mid - 1] === 1) {
                return array.length - mid;
            }
            max = mid;
        }
    }
    return 0;
}
```
</details>

### SubSequence check without continuous characters
Write a function called **isSubsequence** which takes in two strings and checks whether the characters in the first string appear somewhere in the second string, without their order changing.
```javascript
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
```
<details>
<summary>Answer</summary>

```javascript
function isSubsequence(str, longStr) {
    let i = 0, j = 0;
    while (j < longStr.length) {
        if (str[i] === longStr[j]) i++;
        if (i === str.length) return true;
        j++;
    }
    return false;
}
```
</details>

### SubSequence check with continuous characters
Write a function called **isSubsequence** which takes in two strings and checks whether the characters in the first string appear somewhere in the second string.
```javascript
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // false
isSubsequence('racad', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false
```
<details>
<summary>Answer</summary>

```javascript
function isSubsequence(str, longStr) {
    let i = 0, j = 0;
    while (j < longStr.length) {
        if (str[i] === longStr[j]) i++;
        else i = 0;
        if (i === str.length) return true;
        j++;
    }
    return false;
}
```
</details>

### Average Pair
Write a function called **averagePair**. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

```javascript
averagePair([1, 2, 3], 2.5); // [[2,3]]
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // [[6,10]]
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // null
averagePair([], 4); // null
averagePair([0, 1, 2, 3, 4, 5], 2.5); // [[0,5],[1,4],[2,3]]
```
<details><summary>Answer</summary>

```javascript
function averagePair(array, avg) {
    const target = avg * 2;
    let i = 0, j = array.length - 1;
    const result = [];
    while (i < j) {
        const sum = array[i] + array[j];
        if (sum === target) {
            result.push([array[i], array[j]]);
            i++;
            j--;
        }
        else if (sum < target) i++;
        else j--;
    }
    return result.length ? result : null;
}
```
</details>

### Minimum Subarray length
Write a function called **minSubArrayLen** which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
```javascript
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
```
<details><summary>Answer</summary>

```javascript
function createMinArray(start, end, array, output) {
    for (let i = start; i < end; i++) {
        output.push(array[i]);
    }
}
function minSubArrayLen(array, sum) {
    let start = 0, 
        end = 0, 
        total = 0, 
        minimum = Infinity, 
        output = [];
    while (start < array.length) {
        if (total < sum && end < array.length) {
            total += array[end];
            end++;
        } else if (total >= sum) {
            let prevMin = minimum;
            minimum = Math.min(minimum, end - start);
            if (minimum < prevMin) {
                output = [];
                createMinArray(start, end, array, output);
            }
            total -= array[start];
            start++;
        } else {
            break;
        }
    }
    console.log("output = ", output);
    return minimum === Infinity ? 0 : minimum;
}
console.log(
    minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)
);
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
```
</details>

### Maximum Subarray length
Given an array of integers and a number, write a function called **maxSubarraySum**, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. 

In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

```javascript
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
maxSubarraySum([2,3], 3) // null
```
<details><summary>Answer</summary>

```javascript
function createSubArray(array, start, end, result) {
    for (let i = start; i <= end; i++) {
        result.push(array[i]);
    }
}

function maxSubarraySum(array, length) {
    if (length > array.length) return null;
    let total = 0,
        maximum = -Infinity;
    for (let i = 0; i < length; i++) {
        total += array[i];
    }
    maximum = total;
    for (let i = length; i < array.length; i++) {
        total = total - array[i - length] + array[i];
        let prevMax = maximum;
        maximum = Math.max(maximum, total);
        if (maximum > prevMax) {
            numbers = [];
            createSubArray(array, i - length + 1, i, numbers);
        }
    }
    console.log("numbers = ", numbers);
    return maximum;
}
```
</details>

### Flattern Array
Write a recursive function called **flatten** which accepts an array of arrays and returns a new array with all values flattened.
```javascript
flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
```
<details><summary>Answer</summary>

```javascript
function flatten(array) {
    let result = [];
    if (array.length === 0) return result;
    for (const element of array) {
        if (Array.isArray(element)) {
            result = result.concat(flatten(element));
        } else {
            result.push(element);
        }
    }
    return result;
}
```
</details>

### Palindrome Check
Write a recursive function called **isPalindrome** which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
```javascript
isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
```
<details><summary>Answer</summary>

```javascript
function isPalindrome(string) {
    if (!string) return true;
    const length = string.length;
    const isSame = string.charAt(0) === string.charAt(length - 1);
    return isSame && isPalindrome(string.slice(1, -1))
}
```
</details>

### Reverse string
Write a recursive function called **reverse** which accepts a string and returns a new string in reverse.
```javascript
reverse('rithmschool') // 'loohcsmhtir'
reverse('awesome') // 'emosewa'
```
<details><summary>Answer</summary>

```javascript
function reverse(string) {
    if (!string) return '';
    return reverse(string.slice(1)) + string.charAt(0);
}
```
</details>

### Factorial
Write a function **factorial** which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.
<details><summary>Answer</summary>

```javascript
function factorial(number) {
    if (number === 1) return 1;
    return number * factorial(--number);
}
```
</details>

### Find nth Fibonacci number
Write a function **fibonacci** which accepts a number and return nth number in the fibonacci series
<details><summary>Answer</summary>

```javascript
function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}
```
</details>

### Find Fibonacci series upto a given number
Write a function **fibonacci** which accepts a number and returns an fibonacci series whose last index value is less or equal to given number
<details><summary>Answer</summary>

```javascript
function fibonacci(n, series = [0, 1]) {
    const length = series.length;
    const next = series[length - 1] + series[length - 2];
    if (next <= n) {
        series.push(next);
        return fibonacci(n, series);
    } else {
        return series;
    }
}
```
</details>


### Capitalize Words
Write a recursive function called **capitalizeWords**. Given an array of words, return a new array containing each word capitalized.
```javascript
const words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
```
<details><summary>Answer</summary>

```javascript
function capitalizedWords(words) {
    const result = [];
    if (words.length === 0) return result;
    const word = words.shift().toUpperCase();
    result.push(word);
    return result.concat(capitalizedWords(words));
}
```
</details>

### Add all numbers from 0 to given
Write a function called **recursiveRange** which accepts a number and adds up all the numbers from 0 to the number passed to the function
```javascript
recursiveRange(6) // 21
recursiveRange(10) // 55
```
<details><summary>Answer</summary>

```javascript
function recursiveRange(number) {
    if (number === 0) return 0;
    return number + recursiveRange(--number);
}
```
</details>

### Collect String from nested object
Write a function called **collectStrings** which accepts an object and returns an array of all the values in the object that have a typeof string.
```javascript
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"]
```
<details><summary>Answer</summary>

```javascript
function collectStrings(object) {
    let result = [];
    for(const [key, value] of Object.entries(object)) {
        if(typeof value === 'string') {
            result.push(value)
        } else if(Object.prototype.toString.call(value) === '[object Object]') {
            result = result.concat(collectStrings(value));
        } else {
            continue;
        }
    }
    return result;
}
```
</details>

### Sum of all numbers from nested object
Write a recursive function called **nestedEvenSum**. Return the sum of all even numbers in an object which may contain nested objects.
```javascript
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
```

### Capitalize first character of each string in an array
Write a recursive function called **capitalizeFirst**. Given an array of strings, capitalize the first letter of each string in the array.
```javascript
capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
```
<details><summary>Answer</summary>

```javascript
function capitalizeFirst(array) {
    if (array.length === 0) return [];
    const str = array.shift();
    const newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return [newStr].concat(capitalizeFirst(array));
}
```
</details>


### Coin Change - Find total number of ways

Write a function called **coinChange** which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

```javascript
const denominations = [1, 5, 10, 25]
 
coinChange(denominations, 1) // 1
coinChange(denominations, 2) // 1
coinChange(denominations, 5) // 2
coinChange(denominations, 10) // 4
coinChange(denominations, 25) // 13
coinChange(denominations, 45) // 39
coinChange(denominations, 100) // 242
coinChange(denominations, 145) // 622
coinChange(denominations, 1451) // 425663
coinChange(denominations, 14511) // 409222339
```

<details><summary>Answer</summary>
Ref: https://www.youtube.com/watch?v=l_nR5X9VmaI

```javascript
// Dynamic Programming
// Time complexity - O(coins.length * sum)
function coinChange(coins, sum) {
    /* 
        table[i] will be storing the number of solutions for value i.
        we need (sum + 1) rows as the table is constructed in bottom-up
        manner using the base case (sum = 0)
     */
    const table = new Array(sum + 1);
    table.fill(0);

    // Base case if given sum is 0
    table[0] = 1;

    /* 
        pick all values one by one and update the table[] values
        after the index greater than or equal to the value of the
        picked coin

        i => iterate over coin array
        j => pointing to each coin in the array
    */
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= sum; j++) {
            table[j] = table[j] + table[j - coins[i]];
        }
        console.log("inner loop => ", i, table);
    }
    return table[sum];
}
console.log(coinChange([1, 2, 3], 4));
```
```javascript
// Recurssion - Not suitable for a larger sum
// Time complexity - O(n^n) exponential
function count(coins, size, sum) {
    /* 
        If the sum is 0 then there is only one solution
        i.e: Do not include any coin
    */
    if (sum == 0) return 1;
    /* 
        If there are no coins or sum less than 0
    */
    if (sum < 0 || size <= 0) return 0;
    /* 
        count is the sum of solution 
        (i) including size - 1 coin
        (ii) excluding coins[size - 1] 
    */
    return count(coins, size - 1, sum) + count(coins, size, sum - coins[size - 1]);
}
function coinChange(coins, sum) {
    return count(coins, coins.length, sum);
}
```
</details>

### Coin Change - find minimum number of coins

Write a function called **coinChange** which accepts two parameters: an array of denominations and a value. The function should return minimum number of coins required to obtain the given amount. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

```javascript
coinchange([1, 2, 5], 11); // 3
coinchange([1, 2, 3], 7); // 3
```
<details><summary>Answer</summary>

```javascript
// Recurssion - Not suitable for a larger sum
function recursion(coins, sum) {
    // Base case
    if (sum === 0) return 0;
    if (sum < 0) return Infinity;

    let min = Infinity;
    for (let coin of coins) {
        const result = coinChange(coins, sum - coin);
        if (result !== Infinity)
            min = Math.min(min, result);
    }
    return min;
}
function coinChange(coins, sum) {
    const result = recursion(coins, sum);
    return result === Infinity ? -1 : result;
}
console.log(coinChange([1, 2, 3], 7));
```

```javascript
// Tabular
function coinChange(coins, sum) {
    const tables = new Array(sum + 1);
    tables.fill(Infinity);
    tables[0] = 0;
    for (let i = 1; i <= sum; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0 && tables[i - coins[j]] != Infinity) {
                tables[i] = Math.min(tables[i], 1 + tables[i - coins[j]]);
            }
        }
    }
    return tables[sum];
}
```
</details>

### Dijkstra's Algorithem
