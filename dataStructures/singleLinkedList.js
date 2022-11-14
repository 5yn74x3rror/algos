class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return;
    if (!this.head.next) {
      const oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldTail;
    }

    let newTail = this.head;

    while (newTail.next !== this.tail) {
      newTail = newTail.next;
    }

    const oldTail = newTail.next;

    newTail.next = null;
    this.tail = newTail;
    this.length--;

    return oldTail;
  }

  shift() {
    if (!this.head) return;
    this.length--;
    const oldHead = this.head;
    this.head = oldHead.next;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let found = this.head;
    while (counter !== index) {
      found = found.next;
      counter++;
    }
    return found;
  }

  set(index, val) {
    const item = this.get(index);

    if (item) {
      item.val = val;
      return true;
    }
  }

  insert(index, val) {
    if (index === this.length) {
      this.push(val);
      return true;
    }

    const currentItem = this.get(index);
    if (!currentItem) return false;

    const previousItem = this.get(index - 1);
    const newItem = new Node(val);

    if (previousItem) {
      newItem.next = previousItem.next;
      previousItem.next = newItem;
    } else {
      newItem.next = this.head;
      this.head = newItem;
    }
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();

    const itemPrev = this.get(index - 1);
    const removed = itemPrev.next;
    if (itemPrev) {
      itemPrev.next = itemPrev.next.next;
      this.length--;
    }
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
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

let list = new SingleLinkedList();
list.push(1);
list.push(15);
list.push(114);
list.push(190);
console.log(JSON.stringify(list));
list.reverse();
console.log(JSON.stringify(list));
