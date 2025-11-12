> LeetCode - [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/description/)

## LL: Remove Element from List

Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return the new head.

**Example: 1**

<img width="782" height="222" alt="image" src="https://github.com/user-attachments/assets/110acf36-d657-4460-ac5b-ce9ccd71f1ef" />

Input: head = [1,2,6,3,4,5,6], val = 6

Output: [1,2,3,4,5]

**Example 2:**

Input: head = [], val = 1

Output: []

**Example 3:**

Input: head = [7,7,7,7], val = 7

Output: []


<details>
  <summary>LeetCode Solution</summary>

```javascript

function removeElements(head, val) {
  const sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;
  while(prev && prev.next) {
    if(prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinel.next;
}

```
</details>
