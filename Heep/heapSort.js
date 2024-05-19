class MaxHeap{
    constructor(){
        this.heap=[]
    }
    getParent(index){
        return Math.floor((index-1)/2)
    }
    getLeftChild(index){
        return 2*index+1
    }
    getRightChild(index){
        return 2*index+2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    peek(){
        return this.heap[0]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        let curr=index
        while (curr>0&&this.heap[curr]>this.heap[this.getParent(curr)]) {
            this.swap(this.getParent(curr),curr)
            curr=this.getParent(curr)
        }
    }
    delete(){
        if (this.heap.length === 0) {
            return null; // Handle the case where the heap is empty
        }
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
        return max
    }
    heapifyDown(index){
        if(this.heap.length==0) return null
        let curr=index
        let next;
        while (this.getLeftChild(curr)<this.heap.length) {
            next=this.getLeftChild(curr)
            if(this.getRightChild(curr)<this.heap.length&&this.heap[next]<this.heap[this.getRightChild(curr)]){
                next=this.getRightChild(curr)
            }
            if(this.heap[curr]>=this.heap[next]){
                break
            }
            this.swap(curr,next)
            curr=next
        }
    }
}

function heapSort(array) {
    // Step 1: Build a max heap from the input array
    const maxHeap = new MaxHeap();
    for (let value of array) {
        maxHeap.insert(value);
    }
    
    // Step 2: Extract the elements from the heap and rebuild the heap
    for (let i = array.length - 1; i >= 0; i--) {
        array[i] = maxHeap.delete();
    }
    return array;
}
const array = [5, 16, 1, 10, 5];
console.log("Original array:", array);
const sortedArray = heapSort(array);
console.log("Sorted array:", sortedArray)

