> LeetCode - [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)

### LL: Merge Two Sorted Lists
You are given the heads of two sorted linked lists `list1` and `list2`.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

#### Problem Details
- You are given the heads of two sorted linked lists (list1 and list2)
- The result should be a new sorted linked list combining both, preserving order.​
- If either input list is empty, the result is simply the non-empty list.

**Example**

If the input is:

list1: 1 → 2 → 4

list2: 1 → 3 → 4

The output should be: 1 → 1 → 2 → 3 → 4 → 4.​

<img width="662" height="302" alt="image" src="https://github.com/user-attachments/assets/ade51fff-1b2a-4fd6-bf53-220908d57db3" />

**Solution Approach**
- Use a dummy node to simplify appending nodes to the merged list.
- Compare current nodes of both lists, append the smaller to the merged list, and advance pointers.
- After one list is exhausted, append the remainder of the other list.​
- Time complexity: O(n+m), where n and m are the lengths of the two input lists.​


<details>
  <summary>LeetCode Solution</summary>

```javascript
var mergeTwoLists = function(list1, list2) {
    let result = new ListNode();
    const resultHead = result;

    while(list1 && list2) {
        let value;
        if(list1.val < list2.val) {
            value = list1.val;
            list1 = list1.next;
        } else {
            value = list2.val;
            list2 = list2.next;
        }
        const node = new ListNode(value);
        result.next = node;
        result = result.next;
    }
    const list = list1 || list2;
    result.next = list;

    /* let list = list1 || list2;
    while(list) {
        const value = list.val;
        const node = new ListNode(value);
        result.next = node;
        result = result.next;
        list = list.next;
    } */
    return resultHead.next;
};
```
</details>
