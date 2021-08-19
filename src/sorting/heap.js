const SortBase = require('./base');
const Heap = require('../datastructures/heap');

module.exports = class HeapSort extends SortBase {
  constructor() {
    super();
    this.heap = new Heap();
  }

  sort() {
    this.buildTheHeap();
    this.items = [];
    this.heapSort();
  }

  buildTheHeap() {
    this.items.forEach((item) => this.heap.pushToHeap(item));
  }

  heapSort() {
    if (this.heap.isEmpty()) return;
    this.items.splice(0, 0, this.heap.pullHeapRoot());
    this.heapSort();
  }
};
