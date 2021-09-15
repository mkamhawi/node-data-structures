module.exports = class BaseSearch {
  constructor(graph) {
    this.graph = graph;
    this.reset();
  }

  constructPath(src, dst) {
    let previous = this.visited[dst];
    if (!previous) return undefined;
    let path = dst;
    while (previous !== src) {
      if (previous) path = `${previous} -> ${path}`;
      previous = this.visited[previous];
    }
    return `${src} -> ${path}`;
  }

  getVisitedVertices() {
    return this.visited;
  }
};
