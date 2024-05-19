class Heap{
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
    peek(){
        return this.heap[0]
    }
    insert(value){
        this.heap.push(value)
        this.hipifyUp(this.heap.length-1)
    }
    swap(index1,index2){
    [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    hipifyUp(index){
        let currentIndex=index
        while (currentIndex>0&&this.heap[currentIndex]>this.heap[this.getParent(currentIndex)]) {
            this.swap(this.getParent(currentIndex),currentIndex)
            currentIndex=this.getParent(currentIndex)
        }
    }
    extractMax(){
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDowon(0)
        return max
    }
    heapifyDowon(index){
        if(this.heap.length==0) return null
        let curr=index
        let max;
        while (this.getLeftChild(curr)<this.heap.length) {
            max=this.getLeftChild(curr)
            if(this.getRightChild(curr)<this.heap.length&&this.heap[max]<this.heap[this.getRightChild(curr)]){
                max=this.getRightChild(curr)
            }
            if(this.heap[curr]>=this.heap[max]){
                break
            }
            this.swap(curr,max)
            curr=max
        }
    }

    heapSort(){
        let sorted=[]
        while (this.heap.length) {
            sorted.unshift(this.extractMax())
        }
        return sorted
    }
}

const maxHeap=new Heap()
maxHeap.insert(10)
maxHeap.insert(15)
maxHeap.insert(18)
maxHeap.insert(5)
maxHeap.insert(3)
maxHeap.insert(1)
console.log(maxHeap.heap);
maxHeap.extractMax()
console.log(maxHeap.heap);
console.log(maxHeap.heapSort());
console.log(maxHeap.heap);

