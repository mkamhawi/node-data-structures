module.exports = class Heap {
  constructor(isMinHeap = false) {
    this.heap = [];
    this.isMinHeap = isMinHeap;
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
    const targetChildIndex = this.getTargetChildIndex(leftChildIndex, rightChildIndex);
    if (targetChildIndex === undefined) return;
    if (!this.shouldSwapItems(parentIndex, targetChildIndex)) return;
    this.balanceChildPlacement(targetChildIndex);
    this.balanceParentPlacement(targetChildIndex);
  }

  async balanceChildPlacement(currentIndex) {
    const isLeftChild = currentIndex % 2 === 1;
    const parentIndex = (currentIndex - (isLeftChild ? 1 : 2)) / 2;
    if (parentIndex < 0) return;
    if (this.shouldSwapItems(parentIndex, currentIndex)) {
      this.swapItems(currentIndex, parentIndex);
      await this.balanceChildPlacement(parentIndex);
    }
  }

  swapItems(i, j) {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }

  shouldSwapItems(i, j) {
    return (!this.isMinHeap && this.heap[i] < this.heap[j])
     || (this.isMinHeap && this.heap[i] > this.heap[j]);
  }

  getTargetChildIndex(leftChildIndex, rightChildIndex) {
    if (rightChildIndex < leftChildIndex) {
      throw new Error('left child index should be less than right child index!');
    }
    if (this.heap.length <= leftChildIndex) return undefined;
    if (this.heap.length <= rightChildIndex) return leftChildIndex;
    if (!this.isMinHeap && this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
      return rightChildIndex;
    }
    if (this.isMinHeap && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
      return rightChildIndex;
    }
    return leftChildIndex;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  getHeap() {
    return this.heap;
  }
};
