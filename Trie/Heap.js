class MaxHeap{
    constructor(){
        this.heap=[]
    }
    getParent(index){
        return Math.floor((index-1)/2)
    }
    getLeftChild(index){
        return index*2+1
    }
    getRightChild(index){
        return 2*index+2
    }
    swap(index,index2){
        [this.heap[index],this.heap[index2]]=[this.heap[index2],this.heap[index]]
    }
    insert(value){
        this.heap.push(value)
        this.heapFyUp(this.heap.length-1)
    }
    heapFyUp(index){
        let currentIndex=index
        while (currentIndex>0&&this.heap[currentIndex]>this.heap[this.getParent(currentIndex)]) {
            this.swap(this.getParent(currentIndex),currentIndex)
            currentIndex=this.getParent(currentIndex)
        }
    }
    extractMax(){
        const max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapFyDown(0)
        return max
    }
    heapFyDown(index){
        let currentIndex=index
        let largest;
        while (this.getLeftChild(currentIndex)<this.heap.length) {
            largest=this.getLeftChild(currentIndex)
            if(this.getRightChild(currentIndex)<this.heap.length&&this.heap[largest]<this.heap[this.getRightChild(currentIndex)]){
                largest=this.getRightChild(currentIndex)
            }
            if(this.heap[currentIndex]>=this.heap[largest]){
                break
            }
            this.swap(largest,currentIndex)
            currentIndex=largest
        }
    }
}

function heapSort(arr){
    if(arr.length==0) return null
    let result=[]
    const maxHeap=new MaxHeap()
    for (const value of arr) {
        maxHeap.insert(value)
    }
    for(let i=arr.length-1;i>=0;i--){
        result[i]=maxHeap.extractMax()
    }
    return result
}
const heap=new MaxHeap()
heap.insert(50)
heap.insert(40)
heap.insert(30)
heap.insert(60)
console.log(heap.heap)
heap.extractMax()
console.log(heap.heap)

const arr=[2,3,4,2,1,4,5,6]

console.log(heapSort(arr))