const { expect } = require('chai');
const LinkedList = require('../../datastructures/linkedlist');

describe('Linked Lists', () => {
  context('Doubly linked lists', () => {
    it('Should push to head of the list successfully', () => {
      const list = new LinkedList(22);
      list.pushToHead(33);

      expect(list.head.getValue()).to.be.eql(33);
      expect(list.tail.getValue()).to.be.eql(22);
    });

    it('Should push to tail of the list successfully', () => {
      const list = new LinkedList(22);
      list.pushToTail(33);
      list.pushToTail(34);

      expect(list.tail.getValue()).to.be.eql(34);
      expect(list.head.getValue()).to.be.eql(22);
      expect(list.head.getNextNode().getValue()).to.be.eql(33);
      expect(list.head.getNextNode().getNextNode().getValue()).to.be.eql(34);
    });

    it('Should delete from the head of the list successfully', () => {
      const list = new LinkedList(22);
      list.pushToTail(33);
      list.pushToTail(34);

      expect(list.head.getValue()).to.be.eql(22);
      list.deleteFromHead();
      expect(list.head.getValue()).to.be.eql(33);
      expect(list.head.getNextNode().getValue()).to.be.eql(34);
      expect(list.head.getPreviousNode()).to.be.eql(null);
    });

    it('Should pull from the head of the list successfully', () => {
      const list = new LinkedList(22);
      list.pushToTail(33);
      list.pushToTail(34);

      expect(list.head.getValue()).to.be.eql(22);
      const oldHead = list.pullFromHead();
      expect(oldHead.getValue()).to.be.eql(22);
      expect(list.head.getValue()).to.be.eql(33);
    });

    it('Should delete from the tail of the list successfully', () => {
      const list = new LinkedList(22);
      list.pushToTail(33);
      list.pushToTail(34);

      expect(list.tail.getValue()).to.be.eql(34);
      list.deleteFromTail();
      expect(list.tail.getValue()).to.be.eql(33);
      expect(list.tail.getNextNode()).to.be.eql(null);
      expect(list.tail.getPreviousNode().getValue()).to.be.eql(22);
    });

    it('Should pull from the tail of the list successfully', () => {
      const list = new LinkedList(22);
      list.pushToTail(33);
      list.pushToTail(34);

      expect(list.tail.getValue()).to.be.eql(34);
      const oldTail = list.pullFromTail();
      expect(oldTail.getValue()).to.be.eql(34);
      expect(list.tail.getValue()).to.be.eql(33);
    });

    it('Should return expected textual representation', () => {
      const list = new LinkedList(22);
      list.pushToHead(33);
      list.pushToTail(11);

      expect(list.getTextualRepresentation()).to.be.eql('(33, 22, 11)');
    });
  });
});
