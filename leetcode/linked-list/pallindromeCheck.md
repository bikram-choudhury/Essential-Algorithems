> LeetCode - [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/description/)

### LL: Pallindrome Check
Given the `head` of a singly linked list, return `true` if it is a **palindrome** or `false` otherwise.

**Example 1:**

![pallindrome](https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg)

Input: head = [1,2,2,1]
Output: true

**Example 2:**

![nopallindrome](https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg)

Input: head = [1,2]
Output: false

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
 * @return {boolean}
 */
const getMidNode = function(head) {
    if(!head) return null;
    let slow = head, fast = head;
    while(fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
const reverse = function(head) {
    if(!head) return null;
    let prev = null, current = head;
    while(current) {
        const next = current.next;
        current.next = prev;

        prev = current;
        current = next;
    }
    return prev;
}
var isPalindrome = function(head) {
    const midNode = getMidNode(head);
    const reverseRightList = reverse(midNode);

    let leftTemp = head, rightTemp = reverseRightList;
    while(leftTemp !== midNode && rightTemp) {
        if(leftTemp.val !== rightTemp.val) return false;
        leftTemp = leftTemp.next;
        rightTemp = rightTemp.next
    }
    return true;
};
```
</details>
