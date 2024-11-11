### Stack: Parentheses Balanced

Implement a function called `isBalancedParentheses()` that checks if a given string containing parentheses is balanced or not.

Input:
- A string parentheses.
Output:
- The function should return a boolean value, `true` if the input string contains balanced parentheses, and `false` if not.

Constraints:
- You must use the provided Stack class to check if the parentheses are balanced.
- You cannot use built-in string manipulation methods for this task.

**Function Signature:**
```javascript
function isBalancedParentheses(parentheses) {
    // Your implementation goes here
}
```

**Example 1:**
```javascript
const input = "(()())";
const output = isBalancedParentheses(input);
```
The `output` should be `true`, as the input string contains balanced parentheses.

**Example 2:**
```javascript
const input = "(()";
const output = isBalancedParentheses(input);
```
The `output` should be `false`, as the input string contains unbalanced parentheses.

**Example 3:**
```javascript
const input = ")(";
const output = isBalancedParentheses(input);
```
The `output` should be `false`, as the input string contains unbalanced parentheses.

<details>
  <summary>Udemy Solution</summary>

```javascript
class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }
    
}

const paranMap = {
    '(': ')',
    '{': '}',
    '[': ']'
}

function isBalancedParentheses(parentheses) {
    const stack = new Stack();
    for(const char of parentheses) {
        if(paranMap[char]) {
            stack.push(paranMap[char]);
        } else {
            const peek = stack.pop();
            if(char !== peek) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}

const input1 = "(())";
const expected1 = true;
const result1 = isBalancedParentheses(input1);
console.log(`Input: "${input1}" | Expected: ${expected1} | Result: ${result1}`);

const input2 = "(()))";
const expected2 = false;
const result2 = isBalancedParentheses(input2);
console.log(`Input: "${input2}" | Expected: ${expected2} | Result: ${result2}`);

const input3 = "((()))";
const expected3 = true;
const result3 = isBalancedParentheses(input3);
console.log(`Input: "${input3}" | Expected: ${expected3} | Result: ${result3}`);

const input4 = "(((())";
const expected4 = false;
const result4 = isBalancedParentheses(input4);
console.log(`Input: "${input4}" | Expected: ${expected4} | Result: ${result4}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Input: "(())" | Expected: true | Result: true
    Input: "(()))" | Expected: false | Result: false
    Input: "((()))" | Expected: true | Result: true
    Input: "(((())" | Expected: false | Result: false

*/

```
</details>


