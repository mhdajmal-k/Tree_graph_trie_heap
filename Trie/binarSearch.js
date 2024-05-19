function binarySearch(arr,target){
    if(arr.length==0){
        return null
    }
    let left=0;
    let right=arr.length-1
    while (left<=right) {
        let midIndex=Math.floor((left+right)/2)
        console.log(midIndex);
        if(arr[midIndex]==target){
            return midIndex
        }
         if(arr[midIndex]<target){
             left=midIndex+1
        }else{
            right=midIndex-1
        }
    }
    return "no vlaue"
}

const array=[1,2,3,4,5,6,7,8,9,10]
const target=10
console.log(binarySearch(array,target))