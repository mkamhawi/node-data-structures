const { expect } = require('chai');
const BubbleSort = require('../../src/sorting/bubble');
const HeapSort = require('../../src/sorting/heap');
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

const runSortingTest = (sortingObject, array, expectedArray) => {
  sortingObject.setItems(array);
  sortingObject.sort();
  const output = sortingObject.getItems();
  expect(output).to.be.eql(expectedArray);
};

describe('Sorting tests', () => {
  context('Bubble sort', () => {
    it('Should sort the items correctly', () => {
      runSortingTest(new BubbleSort(), [...items], expectedOutput);
    });

    it('Should sort the descending ordered items correctly', () => {
      runSortingTest(new BubbleSort(), [...dItems], dExpectedOutput);
    });

    it('Should not change the ascending ordered items', () => {
      runSortingTest(new BubbleSort(), [...aItems], aExpectedOutput);
    });
  });

  context('Insertion sort', () => {
    it('Should sort the items correctly', () => {
      runSortingTest(new InsertionSort(), [...items], expectedOutput);
    });

    it('Should sort the descending ordered items correctly', () => {
      runSortingTest(new InsertionSort(), [...dItems], dExpectedOutput);
    });

    it('Should not change the ascending ordered items', () => {
      runSortingTest(new InsertionSort(), [...aItems], aExpectedOutput);
    });
  });

  context('Selection sort', () => {
    it('Should sort the items correctly', () => {
      runSortingTest(new SelectionSort(), [...items], expectedOutput);
    });

    it('Should sort the descending ordered items correctly', () => {
      runSortingTest(new SelectionSort(), [...dItems], dExpectedOutput);
    });

    it('Should not change the ascending ordered items', () => {
      runSortingTest(new SelectionSort(), [...aItems], aExpectedOutput);
    });
  });

  context('Merge sort', () => {
    it('Should sort the items correctly', () => {
      runSortingTest(new MergeSort(), [...items], expectedOutput);
    });

    it('Should sort the descending ordered items correctly', () => {
      runSortingTest(new MergeSort(), [...dItems], dExpectedOutput);
    });

    it('Should not change the ascending ordered items', () => {
      runSortingTest(new MergeSort(), [...aItems], aExpectedOutput);
    });
  });

  context('Quick sort', () => {
    it('Should sort the items correctly', () => {
      runSortingTest(new QuickSort(), [...items], expectedOutput);
    });

    it('Should sort the descending ordered items correctly', () => {
      runSortingTest(new QuickSort(), [...dItems], dExpectedOutput);
    });

    it('Should not change the ascending ordered items', () => {
      runSortingTest(new QuickSort(), [...aItems], aExpectedOutput);
    });
  });

  context('Heap sort', () => {
    it('Should sort the items correctly', () => {
      runSortingTest(new HeapSort(), [...items], expectedOutput);
    });

    it('Should sort the descending ordered items correctly', () => {
      runSortingTest(new HeapSort(), [...dItems], dExpectedOutput);
    });

    it('Should not change the ascending ordered items', () => {
      runSortingTest(new HeapSort(), [...aItems], aExpectedOutput);
    });
  });
});
