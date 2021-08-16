const ListNode = require('./listnode');

module.exports = class LinkedList {
  constructor(value) {
    const node = new ListNode(value);
    this.head = node;
    this.tail = node;
  }

  pushToHead(value) {
    const node = new ListNode(value);
    node.setNextNode(this.head);
    this.head.setPreviousNode(node);
    this.head = node;
  }

  pullFromHead() {
    const oldHead = this.head;
    this.head = this.head.getNextNode();
    this.head.setPreviousNode(null);
    return oldHead;
  }

  deleteFromHead() {
    delete this.pullFromHead();
  }

  pushToTail(value) {
    const node = new ListNode(value);
    this.tail.setNextNode(node);
    node.setPreviousNode(this.tail);
    this.tail = this.tail.getNextNode();
  }

  pullFromTail() {
    const oldTail = this.tail;
    this.tail = this.tail.getPreviousNode();
    this.tail.setNextNode(null);
    return oldTail;
  }

  deleteFromTail() {
    delete this.pullFromTail();
  }

  getTextualRepresentation() {
    let nextNode = this.head;
    let list = '';
    while (nextNode != null) {
      list = `${list}${nextNode.getValue()}`;
      nextNode = nextNode.getNextNode();
      if (nextNode) list = `${list}, `;
    }
    return `(${list})`;
  }
};
