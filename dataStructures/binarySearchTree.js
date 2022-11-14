class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // console.log('newNode', newNode);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) {
        console.log('already in there');
        return this;
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }      
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(7);
tree.insert(10);
tree.insert(7);
tree.insert(6);
tree.insert(8);
tree.insert(4);
console.log(tree);