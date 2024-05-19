class Heap{
    constructor(){
        this.heap=[]
    }
    getParent(index){
        return Math.floor(index-1)/2
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
    insert(value){
        this.heap.push(value)
        this.heapifyUp();
    }
    heapifyUp(value){
        let currentIndex=this.heap.length-1
        while(currentIndex>0&&this.heap[currentIndex]<this.heap[this.getParent(currentIndex)]){
            this.swap(currentIndex,this.getParent(currentIndex))
            currentIndex=this.getParent(currentIndex)
        }
    }
    pop(){
        if(this.heap.length==0) return null
        if(this.heap.length==1) return this.heap.pop()
            let remove=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown()
        return remove
    }
    heapifyDown() {
        let currentIndex = 0;
        let next;
    
        while (this.getLeftChild(currentIndex) < this.heap.length) {
            next = this.getLeftChild(currentIndex);
    
            if (this.getRightChild(currentIndex) < this.heap.length && this.heap[this.getRightChild(currentIndex)] < this.heap[next]) {
                next = this.getRightChild(currentIndex);
            }
    
            if (this.heap[currentIndex] < this.heap[next]) {
                break;
            }
    
            this.swap(currentIndex, next);
            currentIndex = next; // Update currentIndex inside the loop
        }
    }
    
}

const minHeap=new Heap()
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);
console.log(minHeap.heap);
console.log(minHeap.pop()); // 1
console.log(minHeap.heap);