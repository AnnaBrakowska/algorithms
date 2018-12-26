//SINGLY LINKED LINK LIST

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let curr = this.head;
    let newTail = curr;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return oldHead;
  }
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
      this.length += 1;
      return this;
    }
  }
  getItem(position) {
    if (position < 0 || position >= this.length) return undefined;
    let curr = this.head;
    let i = 0;
    while (i < position) {
      curr = curr.next;
      i++;
    }
    return curr;
  }
  setItem(position, val) {
    let node = this.getItem(position);
    if (node) {
      node.value = val;
      return this;
    }
    return false;
  }
  insert(position, value) {
    let newNode = new Node(value);
    if (position < 0 || position > this.length) return false;
    if (position === this.length) {
      return !!this.push(value);
    } else if (position === 0) {
      return !!this.unshift(value);
    } else {
      let nodeToAttach = this.getItem(position - 1);
      newNode.next = nodeToAttach.next;
      nodeToAttach.next = newNode;
      this.length++;
      return true;
    }
  }
  remove(position) {
    if (position < 0 || position >= this.length) return undefined;
    if (position === 0) {
      return this.shift();
    } else if (position === this.length) {
      return this.pop();
    } else {
      let prevNode = this.get(position - 1);
      let nodeToRemove = prevNode.next;
      prevNode.next = nodeToRemove.next;
      this.length--;
      return true;
    }
  }
  reverse() {
    //swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
