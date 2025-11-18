> LeetCode - [61. Rotate List](https://leetcode.com/problems/rotate-list/description/)

### LL: Rotate List

The given problem asks you to rotate a singly linked list to the right by `k` places. This involves moving the last `k` nodes to the front of the list while preserving their order, and adjusting the pointers accordingly.

<img width="712" height="302" alt="image" src="https://github.com/user-attachments/assets/6530d925-4fa2-4b51-bd7a-9a8acdaf644a" />

<img width="472" height="542" alt="image" src="https://github.com/user-attachments/assets/eaad2fbb-3416-423e-9884-9e7c8da96d2a" />

### Solution
- If `k` is larger than the length of the list, only `k` modulo the list length rotations are performed, as rotating by the list's length results in the original list.
- The list is traversed to find its length.
- If `k` is greater than the length, use `k mod length` for the rotation.
- After rotation, the new head will be at the position `length − k` from the original head.
- The list is reconnected such that the new tail points to null and the old tail points to the old head, completing the rotation.
##### Edge Cases
If the list is empty, or `k is 0`, or `k` is a multiple of the list's length, the original list is returned without changes.

<details>
  <summary>LeetCode Solution</summary>

```javascript
var rotateRight = function(head, k) {
  // If "head" null or list has a single node, then return that it self
  if(!head || !head.next) return head;

  // calculate length
  let current = head, length = 0;
  while(current) {
    current = current.next;
    length++;
  }

  // For every "length"-times rotation, the list will be the same one
  // hence, if the "k" is greater then "length" then we should recalculate the new rotation number
  let kMod = k % length;
  if(kMod === 0) return head;

  // Use slow & fast pointer approach to move till kth-node
  let start = head, end = head;
  for(let i = 0; i < kMod; i++) {
    end = end.next;
  }
  while(end.next) {
    end = end.next;
    start = start.next;
  }
  
  end.next = head;
  head = start.next;
  start.next = null;

  return head;
}
```
</details>
