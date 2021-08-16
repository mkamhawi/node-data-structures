module.exports = class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  getNextNode() {
    return this.next;
  }

  setNextNode(node) {
    this.next = node;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

  getPreviousNode() {
    return this.previous;
  }

  setPreviousNode(node) {
    this.previous = node;
  }
};
