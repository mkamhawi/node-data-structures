const BaseSearch = require('./basesearch');

module.exports = class DepthFirstSearch extends BaseSearch {
  reset() {
    this.visited = {};
  }

  findPath(source, destination) {
    this.reset();
    this.dfs(source, null, destination);
    return this.constructPath(source, destination);
  }

  dfs(current, previous, destination) {
    if (current === destination) {
      this.visited[current] = previous;
    }
    if (this.visited[current] === undefined) {
      this.visited[current] = previous;
      const neighbors = this.graph.getConnectedVertices(current);
      neighbors.forEach((neighbor) => {
        if (neighbor) {
          const [next] = neighbor;
          this.dfs(next, current, destination);
        }
      });
    }
  }
};
