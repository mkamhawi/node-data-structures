const { expect } = require('chai');
const BubbleSort = require('../../src/sorting/bubble');
const InsertionSort = require('../../src/sorting/insertion');
const MergeSort = require('../../src/sorting/merge');
const QuickSort = require('../../src/sorting/quick');
const SelectionSort = require('../../src/sorting/selection');

const items = [33, 55, 11, 1, 8, 2, 5, -4, -5];
const expectedOutput = [-5, -4, 1, 2, 5, 8, 11, 33, 55];

const dItems = [11, 10, 9, 8, 5, 3, 1, 0, -1, -3];
const dExpectedOutput = [-3, -1, 0, 1, 3, 5, 8, 9, 10, 11];

const aItems = [-44, -37, -33, -22, -11, 0, 11, 22, 33, 37, 44];
const aExpectedOutput = [-44, -37, -33, -22, -11, 0, 11, 22, 33, 37, 44];

describe('Sorting tests', () => {
  context('Bubble sort', () => {
    it('Should sort the items correctly', () => {
      const bubbleSort = new BubbleSort(items);
      bubbleSort.sort();
      const output = bubbleSort.getItems();
      expect(output).to.be.eql(expectedOutput);
    });

    it('Should sort the descending ordered items correctly', () => {
      const bubbleSort = new BubbleSort(dItems);
      bubbleSort.sort();
      const output = bubbleSort.getItems();
      expect(output).to.be.eql(dExpectedOutput);
    });

    it('Should not change the ascending ordered items', () => {
      const bubbleSort = new BubbleSort(aItems);
      bubbleSort.sort();
      const output = bubbleSort.getItems();
      expect(output).to.be.eql(aExpectedOutput);
    });
  });

  context('Insertion sort', () => {
    it('Should sort the items correctly', () => {
      const insertionSort = new InsertionSort(items);
      insertionSort.sort();
      const output = insertionSort.getItems();
      expect(output).to.be.eql(expectedOutput);
    });

    it('Should sort the descending ordered items correctly', () => {
      const insertionSort = new InsertionSort(dItems);
      insertionSort.sort();
      const output = insertionSort.getItems();
      expect(output).to.be.eql(dExpectedOutput);
    });

    it('Should not change the ascending ordered items', () => {
      const insertionSort = new InsertionSort(aItems);
      insertionSort.sort();
      const output = insertionSort.getItems();
      expect(output).to.be.eql(aExpectedOutput);
    });
  });

  context('Selection sort', () => {
    it('Should sort the items correctly', () => {
      const selectionSort = new SelectionSort(items);
      selectionSort.sort();
      const output = selectionSort.getItems();
      expect(output).to.be.eql(expectedOutput);
    });

    it('Should sort the descending ordered items correctly', () => {
      const selectionSort = new SelectionSort(dItems);
      selectionSort.sort();
      const output = selectionSort.getItems();
      expect(output).to.be.eql(dExpectedOutput);
    });

    it('Should not change the ascending ordered items', () => {
      const selectionSort = new SelectionSort(aItems);
      selectionSort.sort();
      const output = selectionSort.getItems();
      expect(output).to.be.eql(aExpectedOutput);
    });
  });

  context('Merge sort', () => {
    it('Should sort the items correctly', () => {
      const mergeSort = new MergeSort(items);
      mergeSort.sort();
      const output = mergeSort.getItems();
      expect(output).to.be.eql(expectedOutput);
    });

    it('Should sort the descending ordered items correctly', () => {
      const mergeSort = new MergeSort(dItems);
      mergeSort.sort();
      const output = mergeSort.getItems();
      expect(output).to.be.eql(dExpectedOutput);
    });

    it('Should not change the ascending ordered items', () => {
      const mergeSort = new MergeSort(aItems);
      mergeSort.sort();
      const output = mergeSort.getItems();
      expect(output).to.be.eql(aExpectedOutput);
    });
  });

  context('Quick sort', () => {
    it('Should sort the items correctly', () => {
      const quickSort = new QuickSort(items);
      quickSort.sort();
      const output = quickSort.getItems();
      expect(output).to.be.eql(expectedOutput);
    });

    it('Should sort the descending ordered items correctly', () => {
      const quickSort = new QuickSort(dItems);
      quickSort.sort();
      const output = quickSort.getItems();
      expect(output).to.be.eql(dExpectedOutput);
    });

    it('Should not change the ascending ordered items', () => {
      const quickSort = new QuickSort(aItems);
      quickSort.sort();
      const output = quickSort.getItems();
      expect(output).to.be.eql(aExpectedOutput);
    });
  });
});
