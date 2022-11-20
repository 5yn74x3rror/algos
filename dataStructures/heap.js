class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]];
  }

  insert(val) {
    this.values.push(val);

    // bubble up
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (this.values[parentIdx] < this.values[idx]) {
      this.swap(parentIdx, idx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }

  }

  heapify(index) {
    let parentIdx = index;
    let parent = this.values[parentIdx];
    
    while (true) {
      let swapIdx = null;
      let leftChildIdx = (2 * parentIdx) + 1;
      let leftChild = this.values[leftChildIdx];

      if (leftChild > parent) {
        swapIdx = leftChildIdx
      }

      let rightChildIdx = (2 * parentIdx) + 2;
      let rightChild = this.values[rightChildIdx];

      if (rightChild > parent && (rightChild > leftChild || !swapIdx)) {
        swapIdx = rightChildIdx;
      }

      if (!swapIdx) break;

      this.swap(parentIdx, swapIdx);
      parentIdx = swapIdx;
    }
  }

  extractMax() {
    this.swap(0, this.values.length - 1);
    
    const max = this.values.pop();
    
    this.heapify(0);
    
    return max;
  }

  extractElement(val) {
    const elIdx = this.values.indexOf(val);
    this.swap(elIdx, this.values.length - 1);
    const removed = this.values.pop();

    this.heapify(elIdx);

    return removed;
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