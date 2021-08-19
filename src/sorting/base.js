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
};
