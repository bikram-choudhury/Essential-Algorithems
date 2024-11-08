> LeetCode - [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)
### LL: Remove Kth Node From end
Given the `head` of a linked list, remove the nth node from the end of the list and return its head.

**Example 1:**

![remove](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

**Example 2:**

Input: head = [1], n = 1
Output: []

**Example 3:**

Input: head = [1,2], n = 1
Output: [1]

_**Follow up:** Could you do this in one pass?_

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let start = head, end = head, prev = null;
    for(let i = 0; i < n; i++) {
        if(!end) return new ListNode();
        end = end.next;
    }
    if(!end) return head.next;
    while(end) {
        prev = start;
        start = start.next;
        end = end.next;
    }
    prev.next = start.next;
    start.next = null;
    return head;
};
```
</details>

