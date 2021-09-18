const SortBase = require('./base');

module.exports = class MergeSort extends SortBase {
  sort() {
    this.mergeSort(0, this.items.length - 1);
  }

  mergeSort(startingIndex, endingIndex) {
    const middleIndex = Math.floor((startingIndex + endingIndex) / 2);
    if (endingIndex - startingIndex > 1) {
      this.mergeSort(startingIndex, middleIndex);
      this.mergeSort(middleIndex, endingIndex);
    }
    this.merge(startingIndex, middleIndex, endingIndex);
  }

  merge(start, middle, end) {
    let midPoint = middle;
    if (start === midPoint) { midPoint += 1; }
    const leftArray = this.items.slice(start, midPoint);
    const rightArray = this.items.slice(midPoint, end + 1);

    let i = start;
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] < rightArray[0]) {
        this.items[i] = leftArray.shift();
      } else {
        this.items[i] = rightArray.shift();
      }
      i += 1;
    }

    while (leftArray.length) {
      this.items[i] = leftArray.shift();
      i += 1;
    }

    while (rightArray.length) {
      this.items[i] = rightArray.shift();
      i += 1;
    }
  }
};
