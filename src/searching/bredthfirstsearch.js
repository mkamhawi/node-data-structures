const BaseSearch = require('./basesearch');

module.exports = class BreadthFirstSearch extends BaseSearch {
  reset() {
    this.queue = [];
    this.visited = {};
  }

  findPath(source, destination) {
    this.reset();
    this.queue.push([source, null]);

    while (this.queue.length > 0) {
      const [current, previous] = this.queue.shift();
      if (current === destination) {
        this.visited[current] = previous;
        return this.constructPath(source, destination);
      }
      if (this.visited[current] === undefined) {
        this.visited[current] = previous;
        const neighbors = this.graph.getConnectedVertices(current);
        neighbors.forEach((neighbor) => {
          if (neighbor) {
            const [next] = neighbor;
            this.queue.push([next, current]);
          }
        });
      }
    }

    return undefined;
  }
};
