const SortBase = require('./base');

module.exports = class BubbleSort extends SortBase {
  sort() {
    let tmp = 0;
    for (let i = 0; i <= this.items.length - 2; i += 1) {
      for (let j = 0; j <= this.items.length - 2 - i; j += 1) {
        this.opCount += 1;
        if (this.items[j] > this.items[j + 1]) {
          this.opCount += 3;
          tmp = this.items[j];
          this.items[j] = this.items[j + 1];
          this.items[j + 1] = tmp;
        }
      }
    }
  }
};
