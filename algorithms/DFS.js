// const { tree2 } = require('../dataStructures/examples/BST');

const DFS_PreOrder = tree => {
  const results = [];
  const traverse = node => {
    results.push(node.value); // OR push(node)
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(tree.root);
  return results;
};

const DFS_PostOrder = tree => {
  const results = [];
  const traverse = node => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    results.push(node.value); // OR push(node)
  };
  traverse(tree.root);
  return results;
};

const DFS_InOrder = tree => {
  const results = [];
  const traverse = node => {
    if (node.left) traverse(node.left);
    results.push(node.value); // OR push(node)
    if (node.right) traverse(node.right);
  };
  traverse(tree.root);
  return results;
};

// tree2 graph
//      10
//     /  \
//    6    15
//   / \    \
//  3   8    20

// console.log(DFS_PreOrder(tree2));
// console.log(DFS_PostOrder(tree2));
// console.log(DFS_InOrder(tree2));

module.exports = {
  DFS_PreOrder,
  DFS_PostOrder,
  DFS_InOrder,
};