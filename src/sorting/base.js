module.exports = class SortBase {
  constructor() {
    this.items = [];
  }

  setItems(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  swap(i, j) {
    const tmp = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = tmp;
  }
};
