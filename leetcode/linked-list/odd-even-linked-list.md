> LeetCode - [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/description/)

### LL: Odd Even Linked List

This problem asks you to reorder a singly linked list so that all nodes at **odd** indices come **first**, followed by nodes at **even** indices, while maintaining their original relative order within each group. For example, given the list ```1 → 2 → 3 → 4 → 5``` the output should be ```1 → 3 → 5 → 2 → 4```.

<img width="542" height="222" alt="image" src="https://github.com/user-attachments/assets/da915e23-9f52-4a0d-8af9-a6e713672e1c" />

<img width="782" height="222" alt="image" src="https://github.com/user-attachments/assets/a8cc961e-6afe-4f2c-8df5-f9a004016371" />

#### Problem Requirements
- Group nodes with **odd** indices together, then **even** indices.
- Do not create new nodes or use extra data structures: only rearrange pointers (O(1) additional space).​​
- Maintain the relative order among odd and even groups.

### Solution Approach
- Use two pointers to build separate chains for odd and even indexed nodes during a single traversal of the list.​​
- After separating the chains, connect the end of the odd chain to the start of the even chain.
- The implementation typically starts with checking if the list is empty, then initializes pointers for odd and even sequences. You iterate, updating pointers to skip the alternate node, finally linking the odd chain’s tail to the head of the even chain.​​
- The solution has a time complexity of **O(n)** and space complexity of **O(1)**

<details>
  <summary>LeetCode Solution</summary>

```javascript
var oddEvenList = function(head) {
  if(!head) return null;
  let odd = head, even = head.next, evenHead = even;
  while(odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next
  }
  odd.next = evenHead;
  return head;
}
```
</details
