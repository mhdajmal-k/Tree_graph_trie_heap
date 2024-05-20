class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    insert(value){
        const node=new Node(value)
        if(!this.root){
            this.root=node
        }else{
            this.insertNewNode(this.root,node)
        }
    }
    insertNewNode(root,node){
        if(root.value>node.value){
            if(!root.left){
                root.left=node
            }else{
                this.insertNewNode(root.left,node)
            }
        }else{
            if(!root.left){
                root.right=node
            }else{
                this.insertNewNode(root.right,node)
            }
        }
    }
    validateBst(root,min=Number.MIN_SAFE_INTEGER,max=Number.MAX_SAFE_INTEGER){
        if(!root){
            return true
        }
        if(root.value<=min||root.value>=max){
            return false
        }
        return this.validateBst(root.left,min.root)&&this.validateBst(root.right,root,max)
    }
    getHigh(root){
        if(!root){
            return 0
        }
        let leftHight=this.getHigh(root.left)
        let rightHight=this.getHigh(root.right)
        let maxHight=Math.max(leftHight,rightHight)+1
        return maxHight
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }
}

const bst=new BinarySearchTree()
bst.insert(50)
bst.insert(30)
bst.insert(40)
bst.insert(20)
bst.insert(30)
console.log(bst.validateBst(bst.root))
console.log(bst.getHigh(bst.root));
bst.inorder(bst.root)