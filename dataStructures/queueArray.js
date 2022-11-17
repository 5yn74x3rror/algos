class Queue {
  constructor() {
    this.q = [];
  }

  add(val) {
    this.q.push(val);
    return this;
  }

  remove() {
    return this.q.unshift();
  }
}