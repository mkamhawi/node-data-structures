module.exports = class Heap {
  constructor() {
    this.heap = [];
  }

  pushToHeap(item) {
    const i = this.heap.length;
    this.heap[i] = item;
    this.balanceChildPlacement(i);
  }

  pullHeapRoot() {
    if (this.isEmpty()) return undefined;
    const root = this.heap.shift();
    const lastLeaf = this.heap.pop();
    if (lastLeaf !== undefined) {
      this.heap.splice(0, 0, lastLeaf);
      this.balanceParentPlacement(0);
    }
    return root;
  }

  async balanceParentPlacement(parentIndex) {
    const leftChildIndex = 2 * parentIndex + 1;
    const rightChildIndex = 2 * parentIndex + 2;
    if (this.heap.length <= leftChildIndex) return;
    const rightChildExist = this.heap.length > rightChildIndex;
    if (
      this.heap[parentIndex] < this.heap[leftChildIndex]
      || (rightChildExist && this.heap[parentIndex] < this.heap[rightChildIndex])
    ) {
      let swapTargetIndex;
      if (!rightChildExist) swapTargetIndex = leftChildIndex;
      else {
        swapTargetIndex = this.heap[leftChildIndex] > this.heap[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;
      }
      this.swapItems(parentIndex, swapTargetIndex);
      await this.balanceParentPlacement(swapTargetIndex);
    }
  }

  async balanceChildPlacement(childIndex) {
    const isLeftChild = childIndex % 2 === 1;
    const parentIndex = (childIndex - (isLeftChild ? 1 : 2)) / 2;
    if (this.heap[parentIndex] < this.heap[childIndex]) {
      this.swapItems(childIndex, parentIndex);
      await this.balanceChildPlacement(parentIndex);
    }
  }

  swapItems(i, j) {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  getHeap() {
    return this.heap;
  }
};
