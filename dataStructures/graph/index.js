class Graph {
  constructor() {
    this.list = {};
  }

  addNode(name) {
    if (!this.list[name])  this.list[name] = [];
    else console.log('repeated node');
  }

  removeNode(node) {
    while (this.list[node].length) {
      const removedNode = this.list[node].pop();
      this.removeEdge(node, removedNode);
    }
    delete this.list[node];
  }

  addEdge(n1, n2) {
    this.list[n1].push(n2);
    this.list[n2].push(n1);
  }

  removeEdge(n1, n2) {
    this.list[n2] = this.list[n2].filter(el => el !== n1);
    this.list[n1] = this.list[n1].filter(el => el !== n2);
  }
}
