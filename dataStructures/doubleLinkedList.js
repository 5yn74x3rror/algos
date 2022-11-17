class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    
    const removedNode = this.tail;
    
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null; // clearing references
    }

    this.length--;

    return removedNode;
  }

  shift() {
    if (!this.head) return undefined;

    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }

    this.length--;

    return removedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;          
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter ;
    let current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        console.log('going forward', current.val);
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        console.log('going backwards', current.val);
        current = current.prev;
        counter--;
      }
    }

    return current;
  }

  set(index, value) {
    const found = this.get(index);
    if (found !== null) {
      found.val = value;
      return found;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) this.unshift(value);
    if (index === this.length) this.push(value);
    
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    const newNode = new Node(value);

    if (prevNode !== null) {
      newNode.prev = prevNode;
      newNode.next = nextNode;
      prevNode.next = newNode;
      nextNode.prev = newNode;
      this.length++;
      return true;
    }
    
    return false;
  }

  remove(index) {
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();

    const removedNode = this.get(index);

    if (removedNode !== null) {
      const prevNode = removedNode.prev;
      const nextNode = removedNode.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;

      removedNode.next = null;
      removedNode.prev = null;

      this.length--;

      return removedNode;
    }

    return false;
  }
}

// const list = new DoubleLinkedList();
// list.push(1);
// list.push(2);
// list.insert(1, 6);
// console.log(list);