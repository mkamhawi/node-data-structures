const LinkedList = require('./linkedlist');

module.exports = class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  enqueue(value) {
    this.queue.pushToTail(value);
  }

  dequeue() {
    const item = this.queue.pullFromHead();
    return item ? item.getValue() : item;
  }
};
