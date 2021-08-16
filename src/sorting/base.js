module.exports = class SortBase {
  constructor(items) {
    this.items = items;
    this.opCount = 0;
  }

  getOpCount() {
    return this.opCount;
  }

  getItems() {
    return this.items;
  }
};
