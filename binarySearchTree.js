//Binary search tree

function Node() {
  this.value = null;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.addNode = function(value) {
  if (this.root === null) {
    this.root = value;
  }
};
