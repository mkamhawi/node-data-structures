const SortBase = require('./base');

module.exports = class SelectionSort extends SortBase {
  sort() {
    let smallestIndex = 0;
    for (let i = 0; i < this.items.length; i += 1) {
      smallestIndex = i;
      for (let j = i + 1; j < this.items.length; j += 1) {
        if (this.items[j] < this.items[smallestIndex]) {
          smallestIndex = j;
        }
      }
      this.swap(i, smallestIndex);
    }
  }
};
