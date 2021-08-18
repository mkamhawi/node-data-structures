const SortBase = require('./base');

module.exports = class QuickSort extends SortBase {
  sort() {
    return this.quickSort(0, this.items.length - 1);
  }

  quickSort(start, end) {
    if (start >= end) return;
    const pivot = this.partition(start, end);
    this.quickSort(start, pivot - 1);
    this.quickSort(pivot + 1, end);
  }

  partition(start, end) {
    let pivot = end;
    let i = 0;
    while (start + i <= end) {
      if (this.items[start + i] > this.items[pivot]) {
        this.swap(start + i, pivot);
        pivot = start + i;
      }
      i += 1;
    }
    return pivot;
  }

  swap(i, j) {
    const tmp = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = tmp;
  }
};
