const { expect } = require('chai');
const AdjacencyList = require('../../src/datastructures/adjacencylist');
const AdjacencyMatrix = require('../../src/datastructures/adjacencylist');
const BreadthFirstSearch = require('../../src/searching/bredthfirstsearch');
const DepthFirstSearch = require('../../src/searching/depthfirstsearch');

describe('Searching a graph', () => {
  context('Bredth First Search', () => {
    context('Adjacency List', () => {
      it('Should find expected path between two vertices in an undirected graph', () => {
        const undirectedGraph = new AdjacencyList(false);
        undirectedGraph.addVertex('a');
        undirectedGraph.addVertex('b');
        undirectedGraph.addVertex('c');
        undirectedGraph.addVertex('d');
        undirectedGraph.addVertex('e');
        undirectedGraph.addVertex('f');
        undirectedGraph.connectVertices('a', 'b', 3);
        undirectedGraph.connectVertices('a', 'c', 4);
        undirectedGraph.connectVertices('c', 'b', 5);
        undirectedGraph.connectVertices('c', 'd', 1);
        undirectedGraph.connectVertices('d', 'f', 1);
        undirectedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new BreadthFirstSearch(undirectedGraph);
        const path = searchAlgorithm.findPath('a', 'e');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql('a -> c -> d -> f -> e');
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'a',
          d: 'c',
          e: 'f',
          f: 'd'
        });
      });

      it('Should return undefined if no path exists between two vertices in an undirected graph', () => {
        const undirectedGraph = new AdjacencyList(false);
        undirectedGraph.addVertex('a');
        undirectedGraph.addVertex('b');
        undirectedGraph.addVertex('f');
        undirectedGraph.connectVertices('a', 'b', 3);

        const searchAlgorithm = new BreadthFirstSearch(undirectedGraph);
        const path = searchAlgorithm.findPath('a', 'f');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql(undefined);
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a'
        });
      });

      it('Should find expected path between two vertices in a directed graph', () => {
        const directedGraph = new AdjacencyList(true);
        directedGraph.addVertex('a');
        directedGraph.addVertex('b');
        directedGraph.addVertex('c');
        directedGraph.addVertex('d');
        directedGraph.addVertex('e');
        directedGraph.addVertex('f');
        directedGraph.connectVertices('a', 'b', 3);
        directedGraph.connectVertices('a', 'c', 4);
        directedGraph.connectVertices('c', 'b', 5);
        directedGraph.connectVertices('c', 'd', 1);
        directedGraph.connectVertices('d', 'f', 1);
        directedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new BreadthFirstSearch(directedGraph);
        const path = searchAlgorithm.findPath('a', 'f');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql('a -> c -> d -> f');
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'a',
          d: 'c',
          f: 'd'
        });
      });

      it('Should return undefined if no path exists between two vertices in a directed graph', () => {
        const directedGraph = new AdjacencyList(true);
        directedGraph.addVertex('a');
        directedGraph.addVertex('b');
        directedGraph.addVertex('c');
        directedGraph.addVertex('d');
        directedGraph.addVertex('e');
        directedGraph.addVertex('f');
        directedGraph.connectVertices('a', 'b', 3);
        directedGraph.connectVertices('a', 'c', 4);
        directedGraph.connectVertices('c', 'b', 5);
        directedGraph.connectVertices('c', 'd', 1);
        directedGraph.connectVertices('d', 'f', 1);
        directedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new BreadthFirstSearch(directedGraph);
        const path = searchAlgorithm.findPath('a', 'e');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql(undefined);
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'a',
          d: 'c',
          f: 'd'
        });
      });
    });

    context('Adjacency Matrix', () => {
      it('Should find expected path between two vertices in an undirected graph', () => {
        const undirectedGraph = new AdjacencyMatrix(false);
        undirectedGraph.addVertex('a');
        undirectedGraph.addVertex('b');
        undirectedGraph.addVertex('c');
        undirectedGraph.addVertex('d');
        undirectedGraph.addVertex('e');
        undirectedGraph.addVertex('f');
        undirectedGraph.connectVertices('a', 'b', 3);
        undirectedGraph.connectVertices('a', 'c', 4);
        undirectedGraph.connectVertices('c', 'b', 5);
        undirectedGraph.connectVertices('c', 'd', 1);
        undirectedGraph.connectVertices('d', 'f', 1);
        undirectedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new BreadthFirstSearch(undirectedGraph);
        const path = searchAlgorithm.findPath('a', 'e');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql('a -> c -> d -> f -> e');
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'a',
          d: 'c',
          e: 'f',
          f: 'd'
        });
      });

      it('Should return undefined if no path exists between two vertices in an undirected graph', () => {
        const undirectedGraph = new AdjacencyMatrix(false);
        undirectedGraph.addVertex('a');
        undirectedGraph.addVertex('b');
        undirectedGraph.addVertex('f');
        undirectedGraph.connectVertices('a', 'b', 3);

        const searchAlgorithm = new BreadthFirstSearch(undirectedGraph);
        const path = searchAlgorithm.findPath('a', 'f');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql(undefined);
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a'
        });
      });

      it('Should find expected path between two vertices in a directed graph', () => {
        const directedGraph = new AdjacencyMatrix(true);
        directedGraph.addVertex('a');
        directedGraph.addVertex('b');
        directedGraph.addVertex('c');
        directedGraph.addVertex('d');
        directedGraph.addVertex('e');
        directedGraph.addVertex('f');
        directedGraph.connectVertices('a', 'b', 3);
        directedGraph.connectVertices('a', 'c', 4);
        directedGraph.connectVertices('c', 'b', 5);
        directedGraph.connectVertices('c', 'd', 1);
        directedGraph.connectVertices('d', 'f', 1);
        directedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new BreadthFirstSearch(directedGraph);
        const path = searchAlgorithm.findPath('a', 'f');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql('a -> c -> d -> f');
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'a',
          d: 'c',
          f: 'd'
        });
      });

      it('Should return undefined if no path exists between two vertices in a directed graph', () => {
        const directedGraph = new AdjacencyMatrix(true);
        directedGraph.addVertex('a');
        directedGraph.addVertex('b');
        directedGraph.addVertex('c');
        directedGraph.addVertex('d');
        directedGraph.addVertex('e');
        directedGraph.addVertex('f');
        directedGraph.connectVertices('a', 'b', 3);
        directedGraph.connectVertices('a', 'c', 4);
        directedGraph.connectVertices('c', 'b', 5);
        directedGraph.connectVertices('c', 'd', 1);
        directedGraph.connectVertices('d', 'f', 1);
        directedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new BreadthFirstSearch(directedGraph);
        const path = searchAlgorithm.findPath('a', 'e');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql(undefined);
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'a',
          d: 'c',
          f: 'd'
        });
      });
    });
  });

  context('Depth First Search', () => {
    context('Adjacency List', () => {
      it('Should find expected path between two vertices in an undirected graph', () => {
        const undirectedGraph = new AdjacencyList(false);
        undirectedGraph.addVertex('a');
        undirectedGraph.addVertex('b');
        undirectedGraph.addVertex('c');
        undirectedGraph.addVertex('d');
        undirectedGraph.addVertex('e');
        undirectedGraph.addVertex('f');
        undirectedGraph.connectVertices('a', 'b', 3);
        undirectedGraph.connectVertices('a', 'c', 4);
        undirectedGraph.connectVertices('c', 'b', 5);
        undirectedGraph.connectVertices('c', 'd', 1);
        undirectedGraph.connectVertices('d', 'f', 1);
        undirectedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new DepthFirstSearch(undirectedGraph);
        const path = searchAlgorithm.findPath('a', 'e');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql('a -> b -> c -> d -> f -> e');
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'b',
          d: 'c',
          e: 'f',
          f: 'd'
        });
      });

      it('Should return undefined if no path exists between two vertices in an undirected graph', () => {
        const undirectedGraph = new AdjacencyList(false);
        undirectedGraph.addVertex('a');
        undirectedGraph.addVertex('b');
        undirectedGraph.addVertex('f');
        undirectedGraph.connectVertices('a', 'b', 3);

        const searchAlgorithm = new DepthFirstSearch(undirectedGraph);
        const path = searchAlgorithm.findPath('a', 'f');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql(undefined);
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a'
        });
      });

      it('Should find expected path between two vertices in a directed graph', () => {
        const directedGraph = new AdjacencyList(true);
        directedGraph.addVertex('a');
        directedGraph.addVertex('b');
        directedGraph.addVertex('c');
        directedGraph.addVertex('d');
        directedGraph.addVertex('e');
        directedGraph.addVertex('f');
        directedGraph.connectVertices('a', 'b', 3);
        directedGraph.connectVertices('a', 'c', 4);
        directedGraph.connectVertices('c', 'b', 5);
        directedGraph.connectVertices('c', 'd', 1);
        directedGraph.connectVertices('d', 'f', 1);
        directedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new DepthFirstSearch(directedGraph);
        const path = searchAlgorithm.findPath('a', 'f');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql('a -> c -> d -> f');
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'a',
          d: 'c',
          f: 'd'
        });
      });

      it('Should return undefined if no path exists between two vertices in a directed graph', () => {
        const directedGraph = new AdjacencyList(true);
        directedGraph.addVertex('a');
        directedGraph.addVertex('b');
        directedGraph.addVertex('c');
        directedGraph.addVertex('d');
        directedGraph.addVertex('e');
        directedGraph.addVertex('f');
        directedGraph.connectVertices('a', 'b', 3);
        directedGraph.connectVertices('a', 'c', 4);
        directedGraph.connectVertices('c', 'b', 5);
        directedGraph.connectVertices('c', 'd', 1);
        directedGraph.connectVertices('d', 'f', 1);
        directedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new DepthFirstSearch(directedGraph);
        const path = searchAlgorithm.findPath('a', 'e');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql(undefined);
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'a',
          d: 'c',
          f: 'd'
        });
      });
    });

    context('Adjacency Matrix', () => {
      it('Should find expected path between two vertices in an undirected graph', () => {
        const undirectedGraph = new AdjacencyMatrix(false);
        undirectedGraph.addVertex('a');
        undirectedGraph.addVertex('b');
        undirectedGraph.addVertex('c');
        undirectedGraph.addVertex('d');
        undirectedGraph.addVertex('e');
        undirectedGraph.addVertex('f');
        undirectedGraph.connectVertices('a', 'b', 3);
        undirectedGraph.connectVertices('a', 'c', 4);
        undirectedGraph.connectVertices('c', 'b', 5);
        undirectedGraph.connectVertices('c', 'd', 1);
        undirectedGraph.connectVertices('d', 'f', 1);
        undirectedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new DepthFirstSearch(undirectedGraph);
        const path = searchAlgorithm.findPath('a', 'e');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql('a -> b -> c -> d -> f -> e');
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'b',
          d: 'c',
          e: 'f',
          f: 'd'
        });
      });

      it('Should return undefined if no path exists between two vertices in an undirected graph', () => {
        const undirectedGraph = new AdjacencyMatrix(false);
        undirectedGraph.addVertex('a');
        undirectedGraph.addVertex('b');
        undirectedGraph.addVertex('f');
        undirectedGraph.connectVertices('a', 'b', 3);

        const searchAlgorithm = new DepthFirstSearch(undirectedGraph);
        const path = searchAlgorithm.findPath('a', 'f');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql(undefined);
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a'
        });
      });

      it('Should find expected path between two vertices in a directed graph', () => {
        const directedGraph = new AdjacencyMatrix(true);
        directedGraph.addVertex('a');
        directedGraph.addVertex('b');
        directedGraph.addVertex('c');
        directedGraph.addVertex('d');
        directedGraph.addVertex('e');
        directedGraph.addVertex('f');
        directedGraph.connectVertices('a', 'b', 3);
        directedGraph.connectVertices('a', 'c', 4);
        directedGraph.connectVertices('c', 'b', 5);
        directedGraph.connectVertices('c', 'd', 1);
        directedGraph.connectVertices('d', 'f', 1);
        directedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new DepthFirstSearch(directedGraph);
        const path = searchAlgorithm.findPath('a', 'f');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql('a -> c -> d -> f');
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'a',
          d: 'c',
          f: 'd'
        });
      });

      it('Should return undefined if no path exists between two vertices in a directed graph', () => {
        const directedGraph = new AdjacencyMatrix(true);
        directedGraph.addVertex('a');
        directedGraph.addVertex('b');
        directedGraph.addVertex('c');
        directedGraph.addVertex('d');
        directedGraph.addVertex('e');
        directedGraph.addVertex('f');
        directedGraph.connectVertices('a', 'b', 3);
        directedGraph.connectVertices('a', 'c', 4);
        directedGraph.connectVertices('c', 'b', 5);
        directedGraph.connectVertices('c', 'd', 1);
        directedGraph.connectVertices('d', 'f', 1);
        directedGraph.connectVertices('e', 'f', 1);

        const searchAlgorithm = new DepthFirstSearch(directedGraph);
        const path = searchAlgorithm.findPath('a', 'e');
        const visitedVertices = searchAlgorithm.getVisitedVertices();
        expect(path).to.be.eql(undefined);
        expect(visitedVertices).to.be.eql({
          a: null,
          b: 'a',
          c: 'a',
          d: 'c',
          f: 'd'
        });
      });
    });
  });
});
