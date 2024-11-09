> LeetCode - 1836. Remove Duplicates From an Unsorted Linked List
### LL: Remove Duplicates

Implement a member function called `removeDuplicates()` that removes all duplicate nodes from the linked list based on their values.

_**Note:** this linked list class does NOT have a tail which will make this method easier to implement._

**Output:**
The function should modify the linked list in-place, removing all nodes with duplicate values.

**Constraints:**
You are allowed to use the JavaScript Set data structure to keep track of unique node values.

**Example 1:**

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 2 -> 1 -> 4

After calling the removeDuplicates() function:
```
list.removeDuplicates();
```
The linked list should now have the following values: 1 -> 2 -> 3 -> 4


**Example 2:**

Now suppose you have a LinkedList object, list, with the following values:
3 -> 3 -> 3


After calling the removeDuplicates() function:
```
list.removeDuplicates();
```
The linked list should now have the following value: 3

_Remember to update the length._

<details>
  <summary>Udemy Solution</summary>

  ```javascript
  removeDuplicates() {
	    const unique = new Set();
	    let current = this.head, priv = null;
	    
	    while(current) {
	        if(!unique.has(current.value)) {
	            unique.add(current.value);
	            priv = current;
	        } else {
	            priv.next = current.next;
	            this.length--;
	        }
	        current = current.next;
	    }
	}
  ```

</details>
