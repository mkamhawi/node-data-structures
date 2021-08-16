module.exports = class BinarySearchTree {
  constructor(value) {
    this.leftChild = null;
    this.rightChild = null;
    this.value = value;
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
      return this;
    }
    if (value < this.value) return this.insertToLeftChild(value);
    if (value >= this.value) return this.insertToRightChild(value);
    return this;
  }

  insertToLeftChild(value) {
    if (!this.leftChild) {
      this.leftChild = new BinarySearchTree(value);
      return this.leftChild;
    }
    return this.leftChild.insert(value);
  }

  insertToRightChild(value) {
    if (!this.rightChild) {
      this.rightChild = new BinarySearchTree(value);
      return this.rightChild;
    }
    return this.rightChild.insert(value);
  }

  getValue() {
    return this.value;
  }

  getLeftChild() {
    return this.leftChild;
  }

  getRightChild() {
    return this.rightChild;
  }
};
