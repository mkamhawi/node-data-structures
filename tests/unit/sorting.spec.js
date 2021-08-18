const { expect } = require('chai');
const BubbleSort = require('../../src/sorting/bubble');
const InsertionSort = require('../../src/sorting/insertion');
const MergeSort = require('../../src/sorting/merge');
const SelectionSort = require('../../src/sorting/selection');

const items = [33, 55, 11, 1, 8, 2, 5, -4, -5];
const expectedOutput = [-5, -4, 1, 2, 5, 8, 11, 33, 55];

describe('Sorting tests', () => {
  context('Bubble sort', () => {
    it('Should sort the items correctly', () => {
      const bubbleSort = new BubbleSort(items);
      bubbleSort.sort();
      const output = bubbleSort.getItems();
      expect(output).to.be.eql(expectedOutput);
    });
  });

  context('Insertion sort', () => {
    it('Should sort the items correctly', () => {
      const insertionSort = new InsertionSort(items);
      insertionSort.sort();
      const output = insertionSort.getItems();
      expect(output).to.be.eql(expectedOutput);
    });
  });

  context('Selection sort', () => {
    it('Should sort the items correctly', () => {
      const selectionSort = new SelectionSort(items);
      selectionSort.sort();
      const output = selectionSort.getItems();
      expect(output).to.be.eql(expectedOutput);
    });
  });

  context('Merge sort', () => {
    it('Should sort the items correctly', () => {
      const mergeSort = new MergeSort(items);
      mergeSort.sort();
      const output = mergeSort.getItems();
      expect(output).to.be.eql(expectedOutput);
    });
  });
});
