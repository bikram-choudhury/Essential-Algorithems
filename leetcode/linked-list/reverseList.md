> LeetCode - [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/)
### LL Reverse List

Given the `head` of a singly linked list, reverse the list, and return the reversed list.

**Example 1:**

![rev1](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

**Example 2:**

![rev2](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

Input: head = [1,2]
Output: [2,1]

**Example 3:**

Input: head = []
Output: []

<details>
  <summary>LeetCode Solution</summary>
  
```javascript
  /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null, current = head;
    while(current) {
        const next = current.next;
        current.next = prev;
        
        prev = current;
        current = next
    }
    return prev;
};
```
</details>
