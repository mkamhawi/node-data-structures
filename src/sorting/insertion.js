const SortBase = require('./base');

module.exports = class InsertionSort extends SortBase {
  sort() {
    let current = 0;
    for (let i = 0; i < this.items.length; i += 1) {
      current = this.items[i];
      let j = i - 1;
      while (j >= 0 && this.items[j] > current) {
        this.items[j + 1] = this.items[j];
        j -= 1;
      }
      this.items[j + 1] = current;
    }
  }
};
