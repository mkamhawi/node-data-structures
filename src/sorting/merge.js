const SortBase = require('./base');

module.exports = class MergeSort extends SortBase {
  sort() {
    this.mergeSort(0, this.items.length - 1);
  }

  mergeSort(startingIndex, endingIndex) {
    if (endingIndex > startingIndex) {
      const middleIndex = Math.floor((startingIndex + endingIndex) / 2);
      this.mergeSort(startingIndex, middleIndex);
      this.mergeSort(middleIndex + 1, endingIndex);
      this.merge(startingIndex, middleIndex, endingIndex);
    }
  }

  merge(start, middle, end) {
    const leftArray = this.items.slice(start, middle);
    const rightArray = this.items.slice(middle, end + 1);

    let l = 0;
    let r = 0;
    for (let i = start; i <= end; i += 1) {
      if (r === rightArray.length || (l < leftArray.length && leftArray[l] < rightArray[r])) {
        this.items[i] = leftArray[l];
        l += 1;
      } else {
        this.items[i] = rightArray[r];
        r += 1;
      }
    }
  }
};
