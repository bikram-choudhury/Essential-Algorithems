> LeetCode - [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

### LL:  Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

#### Problem Summary
- Given the head of a singly linked list, swap every two adjacent nodes.
- Only the nodes themselves can be changed—values within the nodes should not be altered.
- The solution must return the head of the modified list.

<img width="422" height="222" alt="image" src="https://github.com/user-attachments/assets/4049255e-5278-4bc4-a251-e83d82de22a6" />

**Example 1:** 
Input: head = [1,2,3,4]

Output: [2,1,4,3]

**Example 2:**

Input: head = []

Output: []

**Example 3:**

Input: head = [1]

Output: [1]

**Example 4:**

Input: head = [1,2,3]

Output: [2,1,3]

<details>
  <summary>LeetCode Solution Iterative Approach</summary>

```javascript
var swapPairs = function(head) {
  if(!head || !head.next) return head;

  const sentinental = new ListNode();
  sentinental.next = head;

  let prev = sentinental, current = head, next = head.next;
  while(current && next) {
    current.next = next.next;
    next.next = current;
    prev.next = next;

    current = next;
    prev = next;
    next = next.next;
  }
  return sentinental.next;
};
```
</details>
