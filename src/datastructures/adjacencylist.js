module.exports = class AdjacencyList {
  constructor(isDirectedGraph = false) {
    this.adjacencyList = new Map();
    this.isDirectedGraph = isDirectedGraph;
  }

  assertVertexExists(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error(`Vertex ${vertex} does not exist!`);
    }
  }

  assertVertexDoesNotExists(vertex) {
    if (this.adjacencyList.has(vertex)) {
      throw new Error(`Vertex ${vertex} already exists!`);
    }
  }

  addVertex(vertex) {
    this.assertVertexDoesNotExists(vertex);
    this.adjacencyList.set(vertex, []);
  }

  connectVertices(source, destination, weight) {
    this.assertVertexExists(source);
    this.assertVertexExists(destination);
    this.adjacencyList.get(source).push([destination, weight]);
    if (!this.isDirectedGraph) {
      this.adjacencyList.get(destination).push([source, weight]);
    }
  }

  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }

  getAdjacentVertices(vertex) {
    return this.adjacencyList.get(vertex);
  }
};
