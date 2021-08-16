const { expect } = require('chai');
const BinarySearchTree = require('../../datastructures/bst');

describe('Binary Search Trees', () => {
  context('Node insertion order', () => {
    it('Should insert nodes in correct order', () => {
      const root = new BinarySearchTree(33);
      root.insert(34);
      root.insert(22);
      root.insert(11);
      root.insert(25);

      expect(root.getValue()).to.be.eql(33);
      expect(root.leftChild.getValue()).to.be.eql(22);
      expect(root.getRightChild().getValue()).to.be.eql(34);
      expect(root.getLeftChild().getLeftChild().getValue()).to.be.eql(11);
      expect(root.getLeftChild().getRightChild().getValue()).to.be.eql(25);
    });
  });
});
