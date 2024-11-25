/* 
Binary Search Tree - BST
    Insertion - O(log n)
    Searching - O(log n)
    
    Worst case i.e: If the tree is one sided ->
    Insertion - O(n)
    Searching - O(n)
    
Note: To solve the worst case, re-structure the whole tree by choosing a middle element
  
Here we also do implement BFS, DFS to explore around Tree Traversal
  BFS - Breadth First Search
      - Traverse Horrizontallly
      - Works better for short edged tree or one sided tree
      
  DFS - Depth First Search
      - Traverse Vertically
      - Works better for complex or high edged trees
      - 3 types. i.e: PreOrder, InOrder, PostOrder
        - InOrder => mostly used for BSTs as it is giving same order or structure tree
        - PreOrder => 
        - PostOrder => 
  
  
    Example:
            10
       5          13
   2       7   11     16

*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const node = new Node(value);
        let current = this.root;
        if (!current) {
            this.root = node;
        } else {
            while (current) {
                if (value === current.value) return undefined;
                if (value > current.value) {
                    if (!current.right) {
                        current.right = node;
                        return this;
                    }
                    current = current.right;
                } else {
                    if (!current.left) {
                        current.left = node;
                        return this;
                    }
                    current = current.left;
                }
            }
        }
        return this;
    }
    search(value) {
        let current = this.root;
        while (current) {
            if (current.value === value) return true;
            else if (value > current.value) current = current.right;
            else current = current.left;
        }
        return false;
    }
    // BFS & DFS travers all elements 
    BFS() {
        let queue = [], data = [];
        queue.push(this.root);
        while (queue.length) {
            const node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    DFS() {
        let data = [];
        function traverse(node) {
            data.push(node.value); // PreOrder
            if (node.left) traverse(node.left);
            // data.push(node.value); // InOrder
            if (node.right) traverse(node.right);
            // data.push(node.value); // PostOrder
        }
        traverse(this.root);
        return data;
    }
}
/** ================================================================================================================================= */
// Check if a Binary Tree (BT) is a Binary Search Tree (BST) or not ?
function isBinarySearchTree(node) {
    if(node === null) return true;

    if(maxValue(node.left) >= node.value) {
        return false;
    }

    if(minValue(node.right) <= node.value) {
        return false;
    }
    
    return isBinarySearchTree(node.left) && isBinarySearchTree(node.right);
}

// find the maximum value of the left tree
function maxValue(node) {
    if(node === null) return -Infinity;

    return Math.max(node.value, maxValue(node.left), maxValue(node.right));
}

// find the minimum value of the right truee
function minValue(node) {
    if(node === null) return Infinity;

    return Math.min(node.value, minValue(node.left), minValue(node.right))
}
