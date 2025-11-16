> LeetCode - [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

### LL:  Add Two Numbers

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

#### Problem Details
- Each node contains a single digit
- You must add two numbers just like you would do with pen and paper, accounting for carry if the sum exceeds 9 at any node
- Return the sum as a new linked list, with digits still in reverse order.

**Example**

If the input is:

First list: 2 → 4 → 3 (representing 342)

Second list: 5 → 6 → 4 (representing 465)

The sum is 807, and the answer would be: 7 → 0 → 8.​

<img width="483" height="342" alt="image" src="https://github.com/user-attachments/assets/eb029b63-6f2e-425a-8474-9ccb85a359fd" />

**Approach**
- Traverse both lists simultaneously.
- Add corresponding digits and maintain a carry value for sums ≥ 10.
- Create new list nodes for each resulting digit, maintaining the reversed order.​
- If there's a final carry, add a new node at the end.

<details>
  <summary>LeetCode Solution</summary>

```javascript
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  const result = new ListNode(), resultHead = result;
  while(l1 || l2 || carry) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = Math.floor(sum / 10);
    const digit = (sum % 10);

    const node = new ListNode(digit);
    result.next = node;
    result = result.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }
  return resultHead.next;
}
```
</details>
