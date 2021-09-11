module.exports = class AdjacencyList {
  constructor(isDirectedGraph = false) {
    this.adjacencyList = {};
    this.isDirectedGraph = isDirectedGraph;
  }

  assertVertexExists(vertex) {
    if (this.adjacencyList[vertex] === undefined) {
      throw new Error(`Vertex ${vertex} does not exist!`);
    }
  }

  assertVertexDoesNotExists(vertex) {
    if (this.adjacencyList[vertex] !== undefined) {
      throw new Error(`Vertex ${vertex} already exists!`);
    }
  }

  addVertex(vertex) {
    this.assertVertexDoesNotExists(vertex);
    this.adjacencyList[vertex] = [];
  }

  connectVertices(source, destination, weight) {
    this.assertVertexExists(source);
    this.assertVertexExists(destination);
    this.adjacencyList[source].push([destination, weight]);
    if (!this.isDirectedGraph) {
      this.adjacencyList[destination].push([source, weight]);
    }
  }

  getVertices() {
    return Object.keys(this.adjacencyList);
  }

  getAdjacentVertices(vertex) {
    return this.adjacencyList[vertex];
  }
};
