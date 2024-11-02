/* Stacks are LIFO DS.
  Insertion - O(1)
  Removal - O(1)
  Searching - O(n)
  Access - O(n)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if(this.length) {
      newNode.next = this.top;
    }
    this.top = newNode;
    return ++this.length;
  }
  pop() {
    if(this.length === 0) return undefined;
    const temp = this.top;
    this.top = this.top.next;
    
    --this.length;
    temp.next = null;
    return temp;
  }
}

const stack = new Stack(5);
stack.push(11);
stack.push(3);
stack.push(20);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
stack.push(20);
console.log(stack);
