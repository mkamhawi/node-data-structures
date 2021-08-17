const { expect } = require('chai');
const Stack = require('../../src/datastructures/stack');

describe('Stack tests', () => {
  context('Edge cases', () => {
    it('Should pop null from an empty stack', () => {
      const stack = new Stack();
      expect(stack.pop()).to.be.eql(null);
      expect(stack.pop()).to.be.eql(null);
      expect(stack.pop()).to.be.eql(null);
    });
  });

  context('Last in first out', () => {
    it('Should pop items in expected order', () => {
      const stack = new Stack();

      stack.push('33');
      stack.push('44');
      expect(stack.pop()).to.be.eql('44');
      expect(stack.pop()).to.be.eql('33');
      expect(stack.pop()).to.be.eql(null);
    });
  });
});
