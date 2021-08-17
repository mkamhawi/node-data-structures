const LinkedList = require('./linkedlist');

module.exports = class Stack {
  constructor() {
    this.stack = new LinkedList();
  }

  pop() {
    const item = this.stack.pullFromTail();
    return item ? item.getValue() : item;
  }

  push(value) {
    this.stack.pushToTail(value);
  }
};
