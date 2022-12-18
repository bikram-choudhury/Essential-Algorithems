/* 
Single Linked List
  Insertion - O(1)
  Removal - It depends O(1) or O(n)
  Searching - O(n)
  Access - O(n)

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        return ++this.length;
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return ++this.length;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = null;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;

        if (newTail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.length--;
        return current;
    }
    get(idx) {
        if (!this.head) return null;
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === idx) return current;
            current = current.next;
            count++;
        }
        return null;
    }
    set(idx, value) {
        if (!this.head) return null;
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === idx) {
                current.value = value;
                return current;
            }
            current = current.next;
            count++;
        }
        return null;
    }
    insert(idx, value) {
        if (idx > this.length) return null;
        if (idx === this.length) return this.push(value);
        if (idx === 0) return this.unshift(value);
        const newNode = new Node(value);
        const prev = this.get(idx - 1);
        const next = prev.next;
        prev.next = newNode;
        newNode.next = next;
        return ++this.length;
    }
    reverse() {
        // swap head & tail
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        // take next of current node and make that as previous
        // mark current node as previous for future cases
        let i = 0, prev = null, next;
        while (i < this.length) {
            next = current.next;
            current.next = prev;

            prev = current;
            current = next;
            i++;
        }
        return this;
    }
}

const sll = new SingleLinkedList();
sll.push(5);
sll.push(10);
sll.push(15);
sll.insert(0, 1);
sll.insert(4, 20);
sll.insert(2, 12);