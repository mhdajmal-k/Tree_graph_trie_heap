class Heap {
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
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    heapifyUp(index) {
        while (index > 0 && this.heap[index] < this.heap[this.getParent(index)]) {
            this.swap(this.getParent(index),index);
            index = this.getParent(index);
        }
    }
    removeMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const remove = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return remove;
    }
    heapifyDown(index) {
        let currentIndex = index;
        while (this.getLeftChild(currentIndex) < this.heap.length) {
            let next = this.getLeftChild(currentIndex);
            if (this.getRightChild(currentIndex) < this.heap.length && this.heap[this.getRightChild(currentIndex)] < this.heap[next]) {
                next = this.getRightChild(currentIndex);
            }
            if (this.heap[currentIndex] <= this.heap[next]) {
                break;
            }
            this.swap(currentIndex, next);
            currentIndex = next;
        }
    }
    heapSort(){
        let sorted=[]
        while(this.heap.length){

            sorted.unshift(this.heap.shift())
        }
        return sorted
    }
}
const minHeap = new Heap();

// Insert elements into the heap
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(30);
minHeap.insert(5);
minHeap.insert(3);

// Print the contents of the heap
console.log("Heap after insertion:");
console.log(minHeap.heap);
console.log(minHeap.heapSort());


