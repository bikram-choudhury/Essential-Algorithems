> LeetCode - [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)

### LL: Intersection of Two Linked Lists

Given the heads of two singly linked-lists `headA` and `headB`, return the _node at which the two lists intersect_. If the two linked lists have no intersection at all, return `null`.

Example 1:

The following two linked lists begin to intersect at node `c1`:

<img width="742" height="241" alt="image" src="https://github.com/user-attachments/assets/a21e3e09-b130-4bb4-8e8d-2fa5fe72fb81" />

Example 2:

The following two linked lists begin to intersect at node `8`:

<img width="742" height="241" alt="image" src="https://github.com/user-attachments/assets/ccdc6d45-abab-4f6b-adb1-3342373310f9" />


Example 3:

The following two linked lists _does not intersect_, hence return `null`:

<img width="382" height="241" alt="image" src="https://github.com/user-attachments/assets/561f991f-c8dd-4d70-ae90-6d9b913b2c8a" />



<details>
  <summary>LeetCode Solution</summary>

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // Add all nodes of headB into a "Set", because searching in Set & HashMap is O(n)
    const set = new Set();
    let current = headB;
    while(current) {
        set.add(current);
        current = current.next;
    }

    // check if any node of headA is present in the Set
    current = headA;
    while(current) {
        if(set.has(current)) {
            return current;
        }
        current = current.next;
    }
    return null;
};
```
</details>
