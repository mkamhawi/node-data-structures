const ListNode = require('./listnode');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  pushToHead(value) {
    if (!value) return;
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    node.setNextNode(this.head);
    this.head.setPreviousNode(node);
    this.head = node;
  }

  pullFromHead() {
    const oldHead = this.head;
    if (!this.head) {
      return oldHead;
    }
    this.head = this.head.getNextNode();
    if (this.head) this.head.setPreviousNode(null);
    return oldHead;
  }

  deleteFromHead() {
    delete this.pullFromHead();
  }

  pushToTail(value) {
    if (!value) return;
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.setNextNode(node);
    node.setPreviousNode(this.tail);
    this.tail = this.tail.getNextNode();
  }

  pullFromTail() {
    const oldTail = this.tail;
    if (!oldTail) return oldTail;
    this.tail = this.tail.getPreviousNode();
    if (this.tail) this.tail.setNextNode(null);
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
