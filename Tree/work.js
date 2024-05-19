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
    insertion(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertionNode(this.root,node)
        }
    }
    insertionNode(root,node){
        if(root.value>node.value){
            if(!root.left){
                root.left=node
            }else{
                this.insertionNode(root.left,node)
            }
        }else{
            if(!root.right){
                root.right=node
            }else{
                this.insertionNode(root.right,node)
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
    postOrder(root){
        if(root){
            console.log(root.value);
            this.inOrder(root.left)
           this.inOrder(root.right)
        }
    }
    preOrder(){
        if(root){
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.value);
        }
    }
    max(root){
        if(root.right==null){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    min(root){
        if(root.left==null){
            return root.value
        }else{
            return this.max(root.left)
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root==null){
            return root
        }
        if(root.value>value){
            this.left=this.deleteNode(root.left,value)
        }else if(root.value<value){
            this.right=this.deleteNode(root.right,value)
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
        let right=this.getHight(root.right)
        let left=this.getHight(root.left)
        let hi=Math.max(right,left)+1
        return hi
    }
    validate(root,max,min){
        if(root==null){
            return true
        }
        if(root.value<=max||root.value>=min){
            return false
        }
        return this.validate(root.left,max,root.value)&&this.validate(root.right,root.value,min)
    }
}

const bst=new BinarySearchTree()
console.log(bst.isEmpty());
bst.insertion(50)
bst.insertion(60)
bst.insertion(30)
bst.insertion(40)
bst.insertion(20)
console.log(bst.isEmpty());
console.log(bst.search(bst.root,5000));
bst.delete(30)
bst.inOrder(bst.root);
console.log(bst.getHight(bst.root));
console.log(bst.validate(bst.root));

