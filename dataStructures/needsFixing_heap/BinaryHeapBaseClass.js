class BinaryHeap {
  constructor() {
    this.values = [];
  }

  // by default it is MaxBinaryHeap
  compare(x, y) {
    return x > y;
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]];
  }

  insert(val) {
    this.values.push(val);

    // bubble up
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.compare(this.values[idx], this.values[parentIdx])) break;
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }

  }

  heapify(index) {
    let parentIdx = index;
    let parent = this.values[parentIdx];
    
    while (true) {
      let swapIdx = null;
      let leftChildIdx = (2 * parentIdx) + 1;
      let leftChild = this.values[leftChildIdx];

      if (this.compare(leftChild, parent)) {
        swapIdx = leftChildIdx
      }

      let rightChildIdx = (2 * parentIdx) + 2;
      let rightChild = this.values[rightChildIdx];

      if (
        this.compare(rightChild, parent)
        && (this.compare(rightChild, leftChild) || !swapIdx
      )) {
        swapIdx = rightChildIdx;
      }

      if (!swapIdx) break;

      this.swap(parentIdx, swapIdx);
      parentIdx = swapIdx;
    }
  }

  extractTop() {
    this.swap(0, this.values.length - 1);
    const top = this.values.pop();
    this.heapify(0);
    return top;
  }

  extractElement(val) {
    const elIdx = this.values.indexOf(val);
    this.swap(elIdx, this.values.length - 1);
    const removed = this.values.pop();

    this.heapify(elIdx);

    return removed;
  }
};

module.exports = BinaryHeap