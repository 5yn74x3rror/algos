const BinaryHeap = require('./BinaryHeap');

class MaxBinaryHeap extends BinaryHeap {
  constructor() {
    super();
  }

  compare(x, y) {
    return super.compare(x, y);
  }

  extractMax() {
    return super.extractTop();
  }
};

const x = new MaxBinaryHeap();
x.insert(41);
x.insert(39);
x.insert(33);
x.insert(18);
x.insert(27);
x.insert(12);
x.insert(55);
console.log(x);
console.log(x.extractElement(41));
console.log(x);