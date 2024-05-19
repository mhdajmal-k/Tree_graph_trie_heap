class maxHeap {
  constructor() {
    this.heap = [];
  }
  getParent(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChild(index) {
    return 2 * index + 1;
  }
  getRightChild(index) {
    return 2 * index + 2;
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  heapifyUp(index) {
    let curr = index;
    while (curr > 0 && this.heap[curr] > this.heap[this.getParent(curr)]) {
      this.swap(this.getParent(curr), curr);
      curr = this.getParent(curr);
    }
  }
  ExtractMax() {
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }
  heapifyDown(index) {
    if (this.heap.length === 0) return null;
    let curr = index;
    let next;
    while (this.getLeftChild(curr) < this.heap.length) {
      next = this.getLeftChild(curr);
      if (
        this.getRightChild(curr) < this.heap.length &&
        this.heap[next] < this.heap[this.getRightChild(curr)]
      ) {
        next = this.getRightChild(curr);
      }
      if (this.heap[curr] >= this.heap[next]) {
        break;
      }
      this.swap(curr, next);
      curr = next;
    }
  }
}
function heapSort(arr) {
  if (arr.length == 0) {
    return null;
  }
  let max = new maxHeap();
  for (let value of arr) {
    max.insert(value);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = max.ExtractMax();
  }

  return arr;
}
const array = [5, 4, 3, 2, 1, 8, 6, 7, 10, 9];
console.log(heapSort(array));
