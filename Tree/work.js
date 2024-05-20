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
    isEmpty(){
        return this.root==null
    }
    ///insertion
    insertion(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertionNewNode(this.root,node)
        }
    }
    insertionNewNode(root,node){
        if(root.value>node.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertionNewNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertionNewNode(root.right,node)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }else if(root.value==value){
            return true
        }else{
            if(root.value>value){
              return this.search(root.left,value)
            }else{
               return this.search(root.right,value)
            }
        }
        
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)

        }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){

            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    levelOrder(root){
        if(!root){
            return
        }
        let queue=[]
        queue.push(root)
        while (queue.length) {
            const curr=queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(!root){
            return root
        }
        if(root.value>value){
            root.left=this.deleteNode(root.left,value)
        }else if(root.value<value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
    getHight(root){
        if(!root){
            return 0
        }
       let leftHight=this.getHight(root.left)
        let rightHight=this.getHight(root.right)
        return Math.max(leftHight,rightHight)+1
    }
    validateBst(root,min=Number.MIN_SAFE_INTEGER,max){
        if(root==null){
            return true
        }
        if(root.value<=min||root.value>=max){
            return false
        }

        return this.validateBst(root.left,min,root.value)&& this.validateBst(root.right,min,root.value)

    }
}

const bstTree=new BinarySearchTree()
bstTree.insertion(50)
bstTree.insertion(80)
bstTree.insertion(50)
bstTree.insertion(30)
bstTree.insertion(90)
bstTree.insertion(10)
bstTree.levelOrder(bstTree.root)
console.log(bstTree.search(bstTree.root,50));

