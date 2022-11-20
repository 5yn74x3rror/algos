const BinaryHeap = require('./BinaryHeap');

class MinBinaryHeap extends BinaryHeap {
  constructor() {
    super();
  }

  compare(x, y) {
    return super.compare(y, x);
  }

  extractMin() {
    return super.extractTop();
  }
};

const x = new MinBinaryHeap();
x.insert(41);
x.insert(39);
x.insert(33);
x.insert(18);
x.insert(27);
x.insert(12);
x.insert(55);
console.log(x.extractMin());
console.log(x.extractMin());
console.log(x.extractMin());
console.log(x.extractMin());
console.log(x);

module.exports = MinBinaryHeap;