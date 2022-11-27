const BinaryHeap = require('./BinaryHeapBaseClass');

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue extends BinaryHeap {
  constructor() {
    super();
  }

  insert(val, priority) {
    const newNode = new Node(val, priority);
    super.insert(newNode)
  }

  // lower priority is more important
  compare(x, y) {
    if (!x || !y) return x || y;
    return super.compare(y.priority, x.priority);
  }

  dequeue() {
    return super.extractTop();
  }
}

let ER = new PriorityQueue();
ER.insert('cold', 5);
ER.insert('shot', 2);
ER.insert('fever', 3);

console.log(ER);


module.exports = PriorityQueue;