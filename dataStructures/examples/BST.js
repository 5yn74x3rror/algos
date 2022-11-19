const BinarySearchTree = require('../binarySearchTree');

const tree1 = new BinarySearchTree();
tree1.insert(7);
tree1.insert(10);
tree1.insert(6);
tree1.insert(8);
tree1.insert(11);

const tree2 = new BinarySearchTree();
tree2.insert(10); 
tree2.insert(6); 
tree2.insert(15); 
tree2.insert(3); 
tree2.insert(8); 
tree2.insert(20); 

module.exports = {
  tree1,
  tree2,
};