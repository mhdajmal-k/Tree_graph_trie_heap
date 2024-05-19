class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function twoTreeBalanced(t1,t2){
    if(!t1&&!t2){
return true
    }
    if(!t1||!t2){
        return false
    }
    if(t1.value!==t2.value){
        return false
    }
    return twoTreeBalanced(t1.left,t2.left)&&twoTreeBalanced(t1.right,t2.right)
}
let tree1=new Node(50)
 tree1.left=new Node(40)
 tree1.right=new Node(60)

 let tree2=new Node(50)
 tree2.left=new Node(40)
 tree2.right=new Node(60)
 console.log(twoTreeBalanced(tree1,tree2))