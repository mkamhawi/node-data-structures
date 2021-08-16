const SortBase = require('./base');

module.exports = class InsertionSort extends SortBase {
  sort() {
    let current = 0;
    for (let i = 0; i < this.items.length - 1; i += 1) {
      this.opCount += 1;
      current = this.items[i];
      let j = i - 1;
      while (j >= 0 && this.items[j] > current) {
        this.opCount += 2;
        this.items[j + 1] = this.items[j];
        j -= 1;
      }
      this.opCount += 1;
      this.items[j + 1] = current;
    }
  }
};
