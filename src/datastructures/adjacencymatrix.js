module.exports = class AdjacencyMatrix {
  constructor(isDirectedGraph = false) {
    this.vertexList = new Map();
    this.matrix = [[]];
    this.isDirectedGraph = isDirectedGraph;
    this.vertexCount = 0;
  }

  assertVertexExists(vertex) {
    if (!this.vertexList.has(vertex)) {
      throw new Error(`Vertex ${vertex} does not exist!`);
    }
  }

  assertVertexDoesNotExists(vertex) {
    if (this.vertexList.has(vertex)) {
      throw new Error(`Vertex ${vertex} already exists!`);
    }
  }

  addVertex(vertex) {
    this.assertVertexDoesNotExists(vertex);
    this.vertexList.set(vertex, this.vertexCount);
    this.vertexCount += 1;
    this.matrix.forEach((v) => {
      v.push(undefined);
    });
    this.matrix.push([]);
    for (let i = 0; i < this.vertexCount; i += 1) {
      this.matrix[this.vertexCount].push(undefined);
    }
  }

  connectVertices(source, destination, weight) {
    this.assertVertexExists(source);
    this.assertVertexExists(destination);
    const sourceIndex = this.vertexList.get(source);
    const destinationIndex = this.vertexList.get(destination);
    this.matrix[sourceIndex][destinationIndex] = [destination, weight];
    if (!this.isDirectedGraph) {
      this.matrix[destinationIndex][sourceIndex] = [source, weight];
    }
  }

  getVertices() {
    return [...this.vertexList.keys()];
  }

  getConnectedVertices(vertex) {
    this.assertVertexExists(vertex);
    const vertexIndex = this.vertexList.get(vertex);
    return this.matrix[vertexIndex];
  }
};
