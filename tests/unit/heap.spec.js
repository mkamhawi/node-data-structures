const { expect } = require('chai');
const Heap = require('../../src/datastructures/heap');

describe('Heap tests', () => {
  context('Pushing to heap', () => {
    it('Should push items to heap in expected order', () => {
      const heap = new Heap();
      heap.pushToHeap(33);
      expect(heap.getHeap()).to.eql([33]);
      heap.pushToHeap(30);
      expect(heap.getHeap()).to.eql([33, 30]);
      heap.pushToHeap(30);
      expect(heap.getHeap()).to.eql([33, 30, 30]);
      heap.pushToHeap(11);
      expect(heap.getHeap()).to.eql([33, 30, 30, 11]);
    });

    it('Should rebalance heap correctly after pushing an item', () => {
      const heap = new Heap();
      heap.pushToHeap(33);
      heap.pushToHeap(30);
      heap.pushToHeap(11);
      expect(heap.getHeap()).to.eql([33, 30, 11]);
      heap.pushToHeap(31);
      expect(heap.getHeap()).to.eql([33, 31, 11, 30]);
      heap.pushToHeap(34);
      expect(heap.getHeap()).to.eql([34, 33, 11, 30, 31]);
      heap.pushToHeap(22);
      expect(heap.getHeap()).to.eql([34, 33, 22, 30, 31, 11]);
    });
  });

  context('Pulling heap root', () => {
    it.only('Should rebalance heap correctly after pulling root', () => {
      const heap = new Heap();
      heap.pushToHeap(33);
      heap.pushToHeap(30);
      heap.pushToHeap(11);
      heap.pushToHeap(31);
      heap.pushToHeap(34);
      heap.pushToHeap(22);
      expect(heap.getHeap()).to.eql([34, 33, 22, 30, 31, 11]);
      let root = heap.pullHeapRoot();
      expect(root).to.be.eql(34);
      expect(heap.getHeap()).to.eql([33, 31, 22, 30, 11]);
      root = heap.pullHeapRoot();
      expect(root).to.be.eql(33);
      expect(heap.getHeap()).to.eql([31, 30, 22, 11]);
      root = heap.pullHeapRoot();
      expect(root).to.be.eql(31);
      expect(heap.getHeap()).to.eql([30, 11, 22]);
      root = heap.pullHeapRoot();
      expect(root).to.be.eql(30);
      expect(heap.getHeap()).to.eql([22, 11]);
      root = heap.pullHeapRoot();
      expect(root).to.be.eql(22);
      expect(heap.getHeap()).to.eql([11]);
      root = heap.pullHeapRoot();
      expect(root).to.be.eql(11);
      expect(heap.getHeap()).to.eql([]);
      root = heap.pullHeapRoot();
      expect(root).to.be.eql(undefined);
      expect(heap.getHeap()).to.eql([]);
    });
  });
});
