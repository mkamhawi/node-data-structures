const SortBase = require('./base');

module.exports = class QuickSort extends SortBase {
  sort() {
    return this.quickSort(0, this.items.length - 1);
  }

  quickSort(start, end) {
    if (end - start <= 1) return;
    const pivot = this.partition(start, end);
    this.quickSort(start, pivot - 1);
    this.quickSort(pivot + 1, end);
  }

  partition(start, end) {
    const pivot = end;
    let i = start;
    while (i <= end) {
      if (this.items[i] > this.items[pivot]) {
        this.swap(i, pivot);
      }
      i += 1;
    }
    return pivot;
  }
};
