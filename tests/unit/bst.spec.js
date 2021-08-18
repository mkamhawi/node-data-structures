const { expect } = require('chai');
const BinarySearchTree = require('../../src/datastructures/bst');

describe('Binary Search Trees', () => {
  context('Insert', () => {
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

  context('In order traversal', () => {
    it('Should return expected traversal string', () => {
      const root = new BinarySearchTree(33);
      root.insert(34);
      root.insert(22);
      root.insert(11);
      root.insert(25);

      expect(root.traverseInOrder()).to.be.eql('11 22 25 33 34 ');
    });
  });

  context('Pre order traversal', () => {
    it('Should return expected traversal string', () => {
      const root = new BinarySearchTree(33);
      root.insert(34);
      root.insert(22);
      root.insert(11);
      root.insert(25);

      expect(root.traversePreOrder()).to.be.eql('33 22 11 25 34 ');
    });
  });

  context('Post order traversal', () => {
    it('Should return expected traversal string', () => {
      const root = new BinarySearchTree(33);
      root.insert(34);
      root.insert(22);
      root.insert(11);
      root.insert(25);

      expect(root.traversePostOrder()).to.be.eql('11 25 22 34 33 ');
    });
  });
});
