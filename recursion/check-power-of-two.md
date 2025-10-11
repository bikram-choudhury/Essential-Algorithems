# Power of Two Check Using Recursion

**Problem:**  
Given an integer \( n \), return **true** if it is a power of two. Otherwise, return **false**.  
An integer \( n \) is a power of two if there exists an integer \( x \) such that \( n = 2^x \).

## Examples:
- Input: \( n = 1 \)  
  Output: **true** (since \( 2^0 = 1 \))
- Input: \( n = 3 \)  
  Output: **false** (3 is not a power of two)

## Approach:  
Use recursion to solve the problem.

---

## Step-by-step Explanation for Input \( n = 4 \):

1. **Initial call:** \( n = 4 \)  
   - Check base cases:  
     - Is \( n == 1 \)? No.  
     - Is \( n < 1 \)? No.  
   - Is 4 divisible by 2? Yes.  
   - Recurse with \( n = \frac{4}{2} = 2 \).

2. **Second call:** \( n = 2 \)  
   - Check base cases:  
     - Is \( n == 1 \)? No.  
     - Is \( n < 1 \)? No.  
   - Is 2 divisible by 2? Yes.  
   - Recurse with \( n = \frac{2}{2} = 1 \).

3. **Third call:** \( n = 1 \)  
   - Check base cases:  
     - Is \( n == 1 \)? Yes.  
   - Return **true**.

4. **Unwind recursion:**  
   - Each prior recursive call returns **true** up the stack.

Therefore, \( 4 \) is confirmed as a power of two.

```js
var isPowerOfTwo = function(n) {
    if(n == 1) return true;
    if(n % 2 !==0 || n < 1) return false;
    
    return isPowerOfTwo(n/2);
};
```

