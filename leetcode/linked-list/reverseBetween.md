> LeetCode - [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/description/)
### LL: Reverse Between
Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.

**Example 1:**

![reverse](https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg)

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

**Example 2:**

Input: head = [5], left = 1, right = 1
Output: [5]

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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head || left === right) {
        return head;
    }
    const dummy = new ListNode();
    dummy.next = head;

    let prev = dummy;
    for(let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }
    let current = prev.next;
    for(let i = 0; i < (right - left); i++) {
        const nextToCurrent = current.next;
        current.next = nextToCurrent.next;
        nextToCurrent.next = prev.next;
        prev.next = nextToCurrent;
    }
    return dummy.next;
};
```
</details>
