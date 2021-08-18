const SortBase = require('./base');

module.exports = class SelectionSort extends SortBase {
  sort() {
    let tmp = 0;
    let smallestIndex = 0;
    for (let i = 0; i < this.items.length - 2; i += 1) {
      smallestIndex = i;
      for (let j = i + 1; j < this.items.length - 1; j += 1) {
        if (this.items[j] < this.items[smallestIndex]) {
          smallestIndex = j;
        }
      }
      tmp = this.items[i];
      this.items[i] = this.items[smallestIndex];
      this.items[smallestIndex] = tmp;
    }
  }
};
