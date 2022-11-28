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

  dfsRecursion(start) {
    const result = [];
    const visited = {};

    (function traverse(node) {
      if (node.length === 0) return;
  
      result.push(node);
      visited[node] = true;
      
      const neighbours = this.list[node];
      for (let i = 0; i < neighbours.length; i++) {
        if (!visited[neighbours[i]]) {
          traverse.call(this, neighbours[i]);
        }
      }
    }).call(this, start);

    return result;
  }

  dfsIteration(start) {
    let stack = [];
    const visited = {};
    const result = [];
    stack.push(start);

    while(stack.length) {
      const node = stack.pop();  // this makes it go different direction than revursive version
      result.push(node);
      if (!visited[node]) {
        visited[node] = true;
        stack = stack.concat(this.list[node]);
      }
    }

    return result;
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {
      start: true,
    };

    while (queue.length) {
      const node = queue.shift();
      result.push(node);
      this.list[node].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }

      });
    }

    console.log(result);
  }
}
const g = new Graph();

g.addNode('A');
g.addNode('B');
g.addNode('C');
g.addNode('D');
g.addNode('E');
g.addNode('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

g.bfs('A');