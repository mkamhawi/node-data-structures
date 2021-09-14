const { expect } = require('chai');
const AdjacencyMatrix = require('../../src/datastructures/adjacencymatrix');

describe('Graphs: Adjacency Matrix', () => {
  context('undirected graph', () => {
    it('Should successfully add new vertices', () => {
      const adjacencyMatrix = new AdjacencyMatrix(undefined);
      adjacencyMatrix.addVertex('a');
      adjacencyMatrix.addVertex('b');
      adjacencyMatrix.addVertex('c');
      expect(adjacencyMatrix.getVertices()).to.be.eql(['a', 'b', 'c']);
      expect(adjacencyMatrix.getConnectedVertices('a')).to.be.eql([undefined, undefined, undefined]);
    });

    it('Should throw error when getting edges of non existing vertex', () => {
      try {
        const adjacencyMatrix = new AdjacencyMatrix(undefined);
        adjacencyMatrix.addVertex('a');
        adjacencyMatrix.getConnectedVertices('b');
      } catch (error) {
        expect(error.message).to.be.eql('Vertex b does not exist!');
      }
    });

    it('Should not add existing vertices', () => {
      try {
        const adjacencyMatrix = new AdjacencyMatrix(undefined);
        adjacencyMatrix.addVertex('a');
        adjacencyMatrix.addVertex('a');
      } catch (error) {
        expect(error.message).to.be.eql('Vertex a already exists!');
      }
    });

    it('Should successfully connect existing vertices in an undirected graph', () => {
      const undirectedGraph = new AdjacencyMatrix(undefined);
      undirectedGraph.addVertex('a');
      undirectedGraph.addVertex('b');
      undirectedGraph.addVertex('c');
      undirectedGraph.connectVertices('a', 'b', 3);
      undirectedGraph.connectVertices('a', 'c', 4);
      undirectedGraph.connectVertices('c', 'b', 5);
      expect(undirectedGraph.getConnectedVertices('a')).to.be.eql([undefined, ['b', 3], ['c', 4]]);
      expect(undirectedGraph.getConnectedVertices('b')).to.be.eql([['a', 3], undefined, ['c', 5]]);
      expect(undirectedGraph.getConnectedVertices('c')).to.be.eql([['a', 4], ['b', 5], undefined]);
    });

    it('Should not connect non existing vertices', () => {
      try {
        const undirectedGraph = new AdjacencyMatrix(undefined);
        undirectedGraph.addVertex('a');
        undirectedGraph.addVertex('b');
        undirectedGraph.connectVertices('a', 'c', 7);
      } catch (error) {
        expect(error.message).to.be.eql('Vertex c does not exist!');
      }
    });
  });

  context('Directed graphs', () => {
    it('Should successfully connect existing vertices in a directed graph', () => {
      const undirectedGraph = new AdjacencyMatrix(true);
      undirectedGraph.addVertex('a');
      undirectedGraph.addVertex('b');
      undirectedGraph.addVertex('c');
      undirectedGraph.connectVertices('a', 'b', 3);
      undirectedGraph.connectVertices('a', 'c', 4);
      undirectedGraph.connectVertices('c', 'b', 5);
      expect(undirectedGraph.getConnectedVertices('a')).to.be.eql([undefined, ['b', 3], ['c', 4]]);
      expect(undirectedGraph.getConnectedVertices('b')).to.be.eql([undefined, undefined, undefined]);
      expect(undirectedGraph.getConnectedVertices('c')).to.be.eql([undefined, ['b', 5], undefined]);
    });
  });
});
