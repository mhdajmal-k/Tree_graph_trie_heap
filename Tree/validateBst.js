class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function validateBst(root,min=Number.MIN_SAFE_INTEGER,max=Number.MAX_SAFE_INTEGER){
    if(!root){
        return true
    }
   
    if(root.value<=min||root.value>max){
        return false
    }
    return validateBst(root.left,min,root.value)&&validateBst(root.right,root.value,max)
}

function max(root){
    if(!root.right){
        return root.value
    }
    return max(root.right)
}
function min(root){
    if(!root.left){
        return root.value
    }
    return min(root.left)
}

function hightOfNode(root){
    if(!root){
        return 0
    }
    let left=hightOfNode(root.left)
    let right=hightOfNode(root.right)
    let hight=Math.max(left,right)+1
    return hight
}

const root=new Node(50)
root.left=new Node(40)
root.right=new Node(60)
root.left.left=new Node(30)
root.right.right=new Node(90)

console.log(max(root))
console.log(min(root));
console.log(hightOfNode(root));
console.log(validateBst(root));