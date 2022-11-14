class StackNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  } 
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new StackNode(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    console.log(this);
    return ++this.size;
  }

  pop() {
    if (!this.first) {
      console.log(null)
      return null
    } 
      
    const nextNode = this.first.next;
    const removedNode = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = nextNode;
    this.size--;
    console.log(this);

    return removedNode;
  }
}

const stack = new Stack();
stack.push(123);
stack.push(1234);
stack.pop()
stack.pop()
stack.pop()
stack.push(456)
stack.pop()