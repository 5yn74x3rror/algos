// const { tree1, tree2 } = require('../dataStructures/examples/BST');

const BFS = (tree) => {
  const result = [];
  const queue = [];

  let node = tree.root;
  queue.push(node);

  while (queue.length) {
    node = queue.shift(); // grab first form queue
    result.push(node.value); // OR push(node) depending on usecase
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
};

// console.log(BFS(tree1));

// tree2 graph
//      10
//     /  \
//    6    15
//   / \    \
//  3   8    20
// console.log(BFS(tree2));

module.exports = BFS;