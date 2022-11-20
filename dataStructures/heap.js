class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);

    // bubble up
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (this.values[parentIdx] < this.values[idx]) {
      [
        this.values[parentIdx], this.values[idx]
      ] = [this.values[idx], this.values[parentIdx]];
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }

  } 
};

const x = new MaxBinaryHeap();
x.insert(55);
x.insert(1);
x.insert(45);
console.log(x);