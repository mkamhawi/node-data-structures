const { expect } = require('chai');
const Heap = require('../../src/datastructures/heap');

describe('Heap tests', () => {
  context('Max heap', () => {
    it('Should push items to max-heap in expected order', () => {
      const heap = new Heap(false);
      heap.enqueue(33);
      expect(heap.getHeap()).to.eql([33]);
      heap.enqueue(30);
      expect(heap.getHeap()).to.eql([33, 30]);
      heap.enqueue(30);
      expect(heap.getHeap()).to.eql([33, 30, 30]);
      heap.enqueue(11);
      expect(heap.getHeap()).to.eql([33, 30, 30, 11]);
    });

    it('Should rebalance max-heap correctly after pushing an item', () => {
      const heap = new Heap(false);
      heap.enqueue(33);
      heap.enqueue(30);
      heap.enqueue(11);
      expect(heap.getHeap()).to.eql([33, 30, 11]);
      heap.enqueue(31);
      expect(heap.getHeap()).to.eql([33, 31, 11, 30]);
      heap.enqueue(34);
      expect(heap.getHeap()).to.eql([34, 33, 11, 30, 31]);
      heap.enqueue(22);
      expect(heap.getHeap()).to.eql([34, 33, 22, 30, 31, 11]);
    });

    it('Should rebalance max-heap correctly after pulling root', () => {
      const heap = new Heap(false);
      heap.enqueue(33);
      heap.enqueue(30);
      heap.enqueue(11);
      heap.enqueue(31);
      heap.enqueue(34);
      heap.enqueue(22);
      expect(heap.getHeap()).to.eql([34, 33, 22, 30, 31, 11]);
      let root = heap.dequeue();
      expect(root).to.be.eql(34);
      expect(heap.getHeap()).to.eql([33, 31, 22, 30, 11]);
      root = heap.dequeue();
      expect(root).to.be.eql(33);
      expect(heap.getHeap()).to.eql([31, 30, 22, 11]);
      root = heap.dequeue();
      expect(root).to.be.eql(31);
      expect(heap.getHeap()).to.eql([30, 11, 22]);
      root = heap.dequeue();
      expect(root).to.be.eql(30);
      expect(heap.getHeap()).to.eql([22, 11]);
      root = heap.dequeue();
      expect(root).to.be.eql(22);
      expect(heap.getHeap()).to.eql([11]);
      root = heap.dequeue();
      expect(root).to.be.eql(11);
      expect(heap.getHeap()).to.eql([]);
      root = heap.dequeue();
      expect(root).to.be.eql(undefined);
      expect(heap.getHeap()).to.eql([]);
    });
  });

  context('Min heap', () => {
    it('Should push items to min-heap in expected order', () => {
      const heap = new Heap(true);
      heap.enqueue(33);
      expect(heap.getHeap()).to.eql([33]);
      heap.enqueue(30);
      expect(heap.getHeap()).to.eql([30, 33]);
      heap.enqueue(30);
      expect(heap.getHeap()).to.eql([30, 33, 30]);
      heap.enqueue(11);
      expect(heap.getHeap()).to.eql([11, 30, 30, 33]);
    });

    it('Should rebalance min-heap correctly after pushing an item', () => {
      const heap = new Heap(true);
      heap.enqueue(33);
      heap.enqueue(30);
      heap.enqueue(11);
      expect(heap.getHeap()).to.eql([11, 33, 30]);
      heap.enqueue(31);
      expect(heap.getHeap()).to.eql([11, 31, 30, 33]);
      heap.enqueue(34);
      expect(heap.getHeap()).to.eql([11, 31, 30, 33, 34]);
      heap.enqueue(22);
      expect(heap.getHeap()).to.eql([11, 31, 22, 33, 34, 30]);
    });

    it('Should rebalance min-heap correctly after pulling root', () => {
      const heap = new Heap(true);
      heap.enqueue(33);
      heap.enqueue(30);
      heap.enqueue(11);
      heap.enqueue(31);
      heap.enqueue(34);
      heap.enqueue(22);
      expect(heap.getHeap()).to.eql([11, 31, 22, 33, 34, 30]);
      let root = heap.dequeue();
      expect(root).to.be.eql(11);
      expect(heap.getHeap()).to.eql([22, 31, 30, 33, 34]);
      root = heap.dequeue();
      expect(root).to.be.eql(22);
      expect(heap.getHeap()).to.eql([30, 31, 34, 33]);
      root = heap.dequeue();
      expect(root).to.be.eql(30);
      expect(heap.getHeap()).to.eql([31, 33, 34]);
      root = heap.dequeue();
      expect(root).to.be.eql(31);
      expect(heap.getHeap()).to.eql([33, 34]);
      root = heap.dequeue();
      expect(root).to.be.eql(33);
      expect(heap.getHeap()).to.eql([34]);
      root = heap.dequeue();
      expect(root).to.be.eql(34);
      expect(heap.getHeap()).to.eql([]);
      root = heap.dequeue();
      expect(root).to.be.eql(undefined);
      expect(heap.getHeap()).to.eql([]);
    });
  });
});
