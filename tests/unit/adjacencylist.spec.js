const { expect } = require('chai');
const AdjacencyList = require('../../src/datastructures/adjacencylist');

describe('Graphs: Adjacency List', () => {
  context('Unidrected graph', () => {
    it('Should successfully add new vertices', () => {
      const adjacencyList = new AdjacencyList(false);
      adjacencyList.addVertex('a');
      adjacencyList.addVertex('b');
      adjacencyList.addVertex('c');
      expect(adjacencyList.getVertices()).to.be.eql(['a', 'b', 'c']);
      expect(adjacencyList.getConnectedVertices('a')).to.be.eql([]);
    });

    it('Should throw error when getting edges of non existing vertex', () => {
      try {
        const adjacencyList = new AdjacencyList(false);
        adjacencyList.addVertex('a');
        adjacencyList.getConnectedVertices('b');
      } catch (error) {
        expect(error.message).to.be.eql('Vertex b does not exist!');
      }
    });

    it('Should not add existing vertices', () => {
      try {
        const adjacencyList = new AdjacencyList(false);
        adjacencyList.addVertex('a');
        adjacencyList.addVertex('a');
      } catch (error) {
        expect(error.message).to.be.eql('Vertex a already exists!');
      }
    });

    it('Should successfully connect existing vertices in an undirected graph', () => {
      const undirectedGraph = new AdjacencyList(false);
      undirectedGraph.addVertex('a');
      undirectedGraph.addVertex('b');
      undirectedGraph.addVertex('c');
      undirectedGraph.connectVertices('a', 'b', 3);
      undirectedGraph.connectVertices('a', 'c', 4);
      undirectedGraph.connectVertices('c', 'b', 5);
      expect(undirectedGraph.getConnectedVertices('a')).to.be.eql([['b', 3], ['c', 4]]);
      expect(undirectedGraph.getConnectedVertices('b')).to.be.eql([['a', 3], ['c', 5]]);
      expect(undirectedGraph.getConnectedVertices('c')).to.be.eql([['a', 4], ['b', 5]]);
    });

    it('Should not connect non existing vertices', () => {
      try {
        const undirectedGraph = new AdjacencyList(false);
        undirectedGraph.addVertex('a');
        undirectedGraph.addVertex('b');
        undirectedGraph.connectVertices('a', 'c', 7);
      } catch (error) {
        expect(error.message).to.be.eql('Vertex c does not exist!');
      }
    });
  });

  context('Directed graph', () => {
    it('Should successfully connect existing vertices in a directed graph', () => {
      const directedGraph = new AdjacencyList(true);
      directedGraph.addVertex('a');
      directedGraph.addVertex('b');
      directedGraph.addVertex('c');
      directedGraph.connectVertices('a', 'b', 3);
      directedGraph.connectVertices('a', 'c', 4);
      directedGraph.connectVertices('c', 'b', 5);
      expect(directedGraph.getConnectedVertices('a')).to.be.eql([['b', 3], ['c', 4]]);
      expect(directedGraph.getConnectedVertices('b')).to.be.eql([]);
      expect(directedGraph.getConnectedVertices('c')).to.be.eql([['b', 5]]);
    });
  });
});
