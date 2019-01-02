//Binary search tree

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  add(value) {
    let node = new BinarySearchTree(value);
    if (!this.value) {
      this.value = node;
    } else {
      if (this.value > value) {
        if (!this.left) {
          this.left = node;
        } else {
          this.left.add(value);
        }
      } else {
        if (!this.right) {
          this.right = node;
        }
        this.right.add(value);
      }
    }
  }
}
