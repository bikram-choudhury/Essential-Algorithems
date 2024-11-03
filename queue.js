/* Queue are FIFO DS.
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

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    return ++this.length;
  }
  dequeue() {
    if(this.length === 0) return undefined;
    const temp = this.first;
    this.first = this.first.next;
    if(this.length === 1) {
      this.last = null;
    }
    --this.length;
    return temp;
  }
}

const queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
