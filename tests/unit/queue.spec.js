const { expect } = require('chai');
const Queue = require('../../src/datastructures/queue');

describe('Queue tests', () => {
  context('Edge cases', () => {
    it('Should dequeue null from an empty queue', () => {
      const queue = new Queue();
      expect(queue.dequeue()).to.be.eql(null);
      expect(queue.dequeue()).to.be.eql(null);
      expect(queue.dequeue()).to.be.eql(null);
    });
  });

  context('First in first out', () => {
    it('Should dequeue items in expected order', () => {
      const queue = new Queue();

      queue.enqueue(33);
      queue.enqueue(44);
      expect(queue.dequeue()).to.be.eql(33);
      expect(queue.dequeue()).to.be.eql(44);
      expect(queue.dequeue()).to.be.eql(null);
    });
  });
});
