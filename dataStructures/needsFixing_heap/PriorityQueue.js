const BinaryHeap = require('./BinaryHeapBaseClass');

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}


// TODO: fix this

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
    if (!x || !y) return 0;
    return y.priority - x.priority;
  }

  dequeue() {
    return super.extractTop();
  }
}

let ER = new PriorityQueue();
ER.insert('cold', 5);
ER.insert('shot', 2);
ER.insert('fever', 3);
ER.insert('one', 1);
ER.insert('four', 4);
ER.insert('six', 6);

console.log(ER);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER);


module.exports = PriorityQueue;